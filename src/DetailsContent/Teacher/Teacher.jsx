/* eslint-disable react/prop-types */
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { MdStarRate, MdPlayCircle,MdSupervisorAccount, MdVerified } from "react-icons/md";

function handleClick(event) { //note that function and link was not definde
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
export default function Teacher({courses}) {
  return (
    <div id="teacher">
      <Typography variant='h4' style={{fontWeight:"bold"}}>Giảng viên</Typography>
      <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} style={{marginLeft:10, color:"#c0c4fc", textDecoration:"underline"}}>
      <Typography variant='h5' style={{fontWeight:"bold"}}>{courses.teacher.name}</Typography>
      </Link>
      
      <Typography variant='h6'>{courses.teacher.role}</Typography>
      <Box sx={{ flexGrow: 1 }} style={{padding:"10px"}}>
      <Grid container spacing={1} direction="row">
        <Grid xs={2}>
          <Avatar src={courses.teacher.avatar} sx={{ width: 100, height: 100 }}/>
        </Grid>
        <Grid xs={10}>
          <p>
            <MdStarRate/>
            <Typography variant='subtitle1' style={{display:"inline", marginLeft:10}}>{courses.teacher.totalRateStar} xếp hạng giảng viên</Typography>        
          </p>
          <p>
            <MdVerified/>
            <Typography variant='subtitle1' style={{display:"inline", marginLeft:10}}>{courses.teacher.totalRate} đánh giá</Typography>        
          </p>
          <p>
            <MdSupervisorAccount/>
            <Typography variant='subtitle1' style={{display:"inline", marginLeft:10}}>{courses.teacher.totalStudents} học viên</Typography>        
          </p>
          <p>
            <MdPlayCircle/>
            <Typography variant='subtitle1' style={{display:"inline", marginLeft:10}}>{courses.teacher.totalCourses} khóa học</Typography>        
          </p>
        </Grid>
      </Grid>
      </Box>
      <Typography variant='subtitle1'>{courses.teacher.exp}</Typography>        
      <Typography variant='subtitle1'>Language: {courses.teacher.language.join(", ")}</Typography>        
      <Typography variant='subtitle1'>Certificates:</Typography>        
      {courses.teacher.certificates.map((c,index)=>{
        return (<Typography variant='subtitle2' style={{marginLeft:20}} key={index}>- {c}</Typography>)
      })}
      <Typography variant='subtitle1'>{courses.teacher.ability}</Typography>        

    </div>
  )
}
