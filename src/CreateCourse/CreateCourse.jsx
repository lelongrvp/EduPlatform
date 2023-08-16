import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, FilledInput, OutlinedInput, Select, MenuItem   } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
export default function CreateCourse() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [language, setLanguage] = useState('vi');

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <div>Here is Nav Bar</div>
      <div style={{minHeight:'90vh'}}>
        {/* cân nhắc dùng speed dial */}
        <Button variant="outlined" onClick={handleOpen}><IoMdAddCircleOutline style={{paddingRight:10}}/>Create Course</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant='h4' align='center' paddingBottom={'20px'}>Create Course</Typography>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <FormControl fullWidth>
              <InputLabel htmlFor="course-name">Name of Courses</InputLabel>
              <OutlinedInput
                id="course-name"
                label="Name of Courses"
              />
              </FormControl>
            </Grid>
            <Grid xs={6}>
              <FormControl fullWidth variant="filled">
                <InputLabel htmlFor="course-name">Name of Courses</InputLabel>
                <FilledInput id="course-name"/>
              </FormControl>
            </Grid>
            <Grid xs={6}>
              <FormControl fullWidth >
                <InputLabel id="select-language">Ngôn ngữ/Language</InputLabel>
                <Select
                  labelId="select-language"
                  value={language}
                  label="Language"
                  onChange={handleLanguage}
                >
                  <MenuItem value={'vi'}>Việt Nam</MenuItem>
                  <MenuItem value={'us'}>English</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          </Box>
        </Modal>
        </div>
      <div>Here is Bottom</div>
    </div>
  )
}
