/* eslint-disable react/prop-types */ 
import Typography from '@mui/material/Typography';
import BreadCrumbs from './BreadCrumbs';
//icons
import { MdInfo, MdLanguage, MdStarRate, MdStarBorder } from "react-icons/md";
import IntToStars from '../IntToStars';
//css
import './Sumary.css'
export default function Sumary({courses}) {

  const rateStar = [];
  for (let i = 0; i < 5; i++){
    if(i<Math.round(courses.rate))
    rateStar.push(<MdStarRate/>)
    else rateStar.push(<MdStarBorder/>)
  }
  return (
    <div className="courses-sumary" >
      <BreadCrumbs />
      <Typography variant="h4" style={{fontWeight:"bold" ,color: "inherit"}}>{courses.name}</Typography>
      <Typography variant="h6" color="inherit">{courses.namevi}</Typography>
      <Typography variant='subtitle1'>
        <span style={{backgroundColor:"rgb(236,235,152)", color:"black", fontWeight : "bold", padding: "5px 7px"}}>Bán chạy nhất</span>
        <span style={{color:'#f69c08', margin: "0 10px",}}>
        {courses.rate}
        <IntToStars int={courses.rate}/>
        <a href="#teacher" style={{marginLeft:10, color:"yellow", textDecoration:"underline"}}>({courses.rateTime} xếp hạng)</a>
        <span style={{color:"white",}}> {courses.totalStudent} học viên</span>
        </span>
      </Typography>
      <Typography variant="subtitle1" color="inherit">Được tạo bởi: 
          <a href="#teacher" style={{marginLeft:10, color:"yellow", textDecoration:"underline"}}>{courses.teacher.name}</a>
      </Typography>
      <Typography variant="subtitle1" color="inherit">
        <span style={{marginRight:20}}><MdInfo/>Lần cập nhật gần đây nhất:  {courses.updateAt}</span>
        <span><MdLanguage/>{courses.language}</span>
      </Typography>
    </div>
  )
}
