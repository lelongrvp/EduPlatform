
import { IoMdAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import {
  Modal,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Input,
  Avatar
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
const Contents = ({course}) => {
  const token = localStorage.getItem('token');
  const [open, setOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailURl, setThumbnailURl] =useState(null);
  const role = localStorage.getItem('role');
  function handleUploadThumbnail(e) {
    setThumbnail(e.target.files[0]);
  }
  //function get link từ backend firebase đang lỗi 400-403
  const getThumbnailURL = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", thumbnail);
    if(thumbnail==null) return;
    const data = await fetch('http://localhost:8080/api/teacher/uploadFile', {
        method : 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
        body: formData,
      }).catch(err => console.error(err.message));
    setThumbnailURl((await data.text()).toString());
  }
  const createLecture = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    fetch('http://localhost:8080/api/lecture/add',{
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "description": "string",
        "name": "string",
        "documentPath": "string",
        "videoPath": "string",
        "status": "ACTIVE",
        "courseID": 0
      })
    }).then(res => {
      if(res.ok){
        setOpen(false)
        setThumbnail(null)
        setThumbnailURl(null)
      }else{
        window.alert("Fail to create course, Please contact the administrator!!")
      }
    })
    .catch(err => console.log(err.message))
    
  };
  return (
    <div style={{ padding: "10px", margin: "20px 0" }}>
      <Typography variant="h5" style={{ fontWeight: "bold", padding: "0 10px" , display:'inline'}}>
        Nội dung khóa học
      </Typography>
      {
        role === 'ROLE_TEACHER' && <Button variant="contained" startIcon={<IoMdAddCircleOutline/>} onClick={()=>setOpen(true)}>Add Lecture</Button>
      }
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
          overflowY: "scroll",
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw',
          minHeight: '100%',
          border: '2px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          boxShadow: 24,
        }}
        >
          <Box sx={{bgcolor: 'background.paper',minHeight: '100%',p: 4,}} onSubmit={()=>{}} component="form" noValidate>
            <Typography variant='h4' align='center' paddingBottom={'20px'}>Create Course</Typography>
            <Grid container spacing={2}>
            <Grid xs={6}>
              <FormControl  >
              <InputLabel htmlFor="courseName">Name of Courses</InputLabel>
              <OutlinedInput
                id="courseName"
                name="courseName"
                label="Name of Courses"
              />
              </FormControl>
            </Grid>
            
            {/* price */}
            <Grid xs={4} sx={{display:'inline-flex', justifyContent:'space-between'}}    >
              <FormControl>
                <InputLabel htmlFor="price" >Price</InputLabel>
                <OutlinedInput id="price" label="Price" name="price" type={'number'}/>
              </FormControl>
              <FormControl>
                <InputLabel >Unit</InputLabel>
                <Select
                  id="currentcy-unit"
                  labelId="currentcy-unit"
                  label="Currentcy-unit"
                  defaultValue='vnd'
                  name='currentcy-unit'
                >
                  <MenuItem value={'vnd'}>vnđ</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            </Grid>
            <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
              <Button type='submit' variant='contained'color='success' sx={{width:200}}>
                Create
              </Button>
              <Button type='button' variant='contained'color='error' sx={{width:200}} onClick={()=>setOpen(false)}>
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
    </div>
  );
};

export default Contents;
