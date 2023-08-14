/* eslint-disable react/prop-types */
import {MdStarRate,MdStarBorder} from "react-icons/md";

export default function IntToStars({int}) {
  const rateStar = [];
  for (let i = 1; i <= 5; i++){
    if(i <= Math.round(int))
    rateStar.push(<MdStarRate/>)
    else rateStar.push(<MdStarBorder/>)
  }
  return (
    <span>{
      rateStar.map(
        (star,index) => {
          return (<span key={index}>{star}</span>)
        }
      )
    }</span>
  )
}
