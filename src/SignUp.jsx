/* eslint-disable react/prop-types */
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FaBeer } from 'react-icons/fa';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl, InputLabel, Select, MenuItem, Modal  } from '@mui/material';
import { useState } from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignUp({checkHasAccount}) {
  const [role, selectRole] = useState('ROLE_STUDENT');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleSignUp = async (event) => {
    event.preventDefault();
    await fetch('http://localhost:8080/api/user/register',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": email,
        "username": userName,
        "firstName": firstName,
        "lastName": lastName,
        "role": role,
      }),
  }).then(setOpen(true)).catch((err) => window.alert(err));
  }
  const handleOTP = async (event) => {
    event.preventDefault();
    console.log(otp)
    await fetch('http://localhost:8080/api/user/activeAccount',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": email,
        "opt": otp,
        "password": password
      })
    }).then(res => {
      if (res.data == '') {
        console.log("no data found");
    }else{
      console.log(res.json());
      setOpen(false)
    }
    })
    .catch((err) => window.alert(err));
  }

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FaBeer />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id='firstName'
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => {setFirstName(e.target.value);}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => {setLastName(e.target.value);}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value);}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="userName"
                  autoComplete="family-name"
                  value={userName}
                  onChange={(e) => {setUserName(e.target.value);}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => {setPassword(e.target.value);}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth >
                  <InputLabel id="select-role">Role</InputLabel>
                  <Select
                    labelId="select-role"
                    value={role}
                    defaultValue='ROLE_STUDENT'
                    label="Role"
                    id="role"
                    onChange={(e) => {selectRole(e.target.value)}}
                  >
                    <MenuItem value={'ROLE_TEACHER'}>Teacher</MenuItem>
                    <MenuItem value={'ROLE_STUDENT'}>Student</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
          <Box sx={style} component="form" noValidate >
            <Typography variant='h6' align='center' sx={{paddingBottom:'20px', fontWeight:'bold'}}>An OTP code was send to your email!<br/>Enter to finish Sign Up!</Typography>
            <Grid container spacing={2} sx={{margin:'10px 30px', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <Grid item xs={6} >
                <FormControl >
                <TextField
                    required
                    name="otp"
                    label="OTP"
                    type="password"
                    id="otp"
                    value={otp}
                    onChange={(e) => {setOtp(e.target.value);}}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleOTP}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>checkHasAccount(true)}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}