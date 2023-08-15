/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Sumary from './Sumary/Sumary';
import Objectives from './Objectives';
import Contents from './Contents';
import Target from './Target/Target';
import Requirements from './Requirement/Requirements';
import Description from './Description/Description';
import Teacher from './Teacher/Teacher';
import Rating from './Rating/Rating';
import Payment from './Payment/Payment';
import TeacherDetails from '../TeacherDetails/TeacherDetails';
import { useState } from 'react';
export default function DetailsContent({showFullDetails}) {
  const courses = {
    name : "AWS Cloud for beginner (Vietnamese)",
    namevi : "AWS Cloud cho người mới bắt đầu (Tiếng Việt)",
    teacher : {
      id:1,
      name : "Linh Nguyen",
      link : "/teacher/id",
      avatar: "https://source.unsplash.com/random",
      role :  "Engineering Consultant, AWS Cloud Solution Architect",
      exp: "I have been working with Cloud (main AWS) since 2015 and 5 year working and living in Japan.",
      totalRateStar : 4.8,
      totalRate : 133,
      totalStudents: 411,
      totalCourses: 1,
      language : [
        "Japanese (Business Intermediate level)",
        "English (Intermediate)",
      ],
      bio : [
        "Hiện đang là AWS Cloud Solution Architect, Engineering Consultant chuyên phụ trách các KH thị trường Nhật.",
        "Làm việc với Cloud & AWS từ năm 2015 với vai trò Cloud Engineer và từ 2018 với vai trò Cloud Solution Architect.",
        "Có kinh nghiệm thực chiến trong việc tư vấn, thiết kế và triển khai các hệ thống lớn quy mô hàng triệu user trên toàn thế giới. Chịu trách nhiệm cao nhất về kiến trúc cũng như giải pháp cho các dự án, đảm bảo hệ thống được thiết kế, xây dựng và release tới khách hàng và end-user với chất lượng cao nhất."
      ],
      ability: "As a Cloud Solution Architect (SA), I can provide many solution for customer during system design, development and deployment. I also contribute to community by many activities like Youtube channel, on-demand private training course and now on Udemy. Nice to make friend with all of you.",
      subCertificates:"Chứng chỉ AWS hiện có:",
      certificates: [
        "AWS Solution Architect Professional (2020, 2023)",
        "AWS Solution Architect Associate (2018)",
        "AWS Developer Associate (2015)",
      ],
      contact: "Các bạn có thể sử dụng tính năng comment của Udemy, mình sẽ thường xuyên check và trả lời các comment cũng như update video khi bị outdate. Ngoài ra mình cũng có một group riêng hỗ trợ technical cho các bạn có mua khóa học của mình trong suốt quá trình học tập, check inbox của mình để được invite vào nhé.",

    },
    price: '279,000 vnd',
    createAt: "05/12/2001",
    updateAt: "29/08/2023",
    language: "Vietnamese",
    rate : 4.8,
    rateTime : 133,
    review : "link to review",
    totalStudent: 400,
    objectives : [
      "Nắm vứng các khái niệm về Cloud Computing & AWS",
      "Tự tin tạo, cấu hình cũng như thao tác với các dịch vụ AWS thường dùng.",
      "Handson lab: tất cả các section đều có handson lab giúp bạn áp dụng kiến thức vào thực tế.",
      "Có kiến thức cơ bản về các dịch vụ AWS (Networking, Compute, Storage, Database, Container...)",
      "Có khả năng tự thiết kế hệ thống trên AWS theo tiêu chuẩn Best Practice.",
      "Trang bị kiến thức cần thiết để chuẩn bị thi chứng chỉ SAA & DVA",
    ],
    targets:[
      "Sinh viên, Lập trình viên, Kỹ sư hệ thống đang muốn tìm hiểu về Cloud cũng như AWS",
      "Các bạn đang có nhu cầu nâng cao kỹ năng cũng như tìm kiếm cơ hội việc làm mới.",
      "Những bạn đã có hiểu biết cơ bản về Cloud & AWS nhưng muốn tìm hiểu kỹ hơn về thiết kế hệ thống.",
    ],
    requirements: [
      "Có kiến thức cơ bản về IT tuy nhiên không bắt buộc.",
      "Bạn không cần phải biết code vì tất cả code mẫu được cung cấp bởi giảng viên.",
      "Những bạn có kiến thức cơ bản về server như Linux, Windows có khả năng sẽ học nhanh hơn.",
    ],
    description: {
      hello:"Chào mừng đến với khoá học AWS Cloud for beginner - Tiếng Việt!",
      aboutTeacher:"----Giới thiệu về giảng viên----",
      aboutCourse:"----Về khoá học AWS Cloud for beginner---",
      targets: [
        "Bạn đang là IT, Software Engineer hoặc sinh viên đang muốn bắt đầu hành trình trên Cloud của mình, hoặc bạn muốn học thêm những kiến thức liên quan AWS nói riêng phục vụ cho công việc hằng ngày cũng như tìm kiếm cơ hội mới. Khoá học này đích thực dành cho bạn!",
        "Khoá học này tập trung vào những kiến thưc cơ bản liên quan tới Cloud Computing và AWS, lịch sử hình thành và phát triển của AWS, các dịch vụ cơ bản trên AWS, đặc trưng và tình huống vận dụng của cá dịch vụ.",
        "Khoá học thiết kế đan xen giữa lý thuyết và thực hành, giúp các bạn không chỉ nắm rõ các dịch vụ của AWS mà còn tự tin thao tác với chúng, có thể vận dụng trong dự án thực tế cũng như phát triển sản phẩm của riêng bạn."
      ],
      aboutObjectives: "Sau khoá học này bạn sẽ tự tin làm việc với các dịch vụ:",
      objectives: [
        "Networking (VPC, Subnet, Security Group...)",
        "Computing (EC2, Lambda)",
        "Database (SQL and No SQL)",
        "Storage (S3, EBS, EFS)",
        "Security (Identity & Access Manager, Security concepts)",
        "Monitoring and Auditing",
        "Container (Docker), ECR, ECS",
        "Messaging Services (SNS, SQS, SES)",
        "Infra as Code (basic)",
        "Backup and Recovery",
      ],
      subObjectivesTitle:"Không chỉ vậy, bạn còn được hướng dẫn cách tạo ra các mô hình thiết kế hệ thống kết hợp các dịch vụ đã học. Thiết kế và xây dựng hệ thống theo các Best Practice của AWS như Tự động scale theo workload của người dùng, auto recovery khi có sự cố, High Availability, Security, Monitoring.",
      subObjectives:[
        "Khoá học này không yêu cầu bất kỳ kinh nghiệm sẵn có nào tuy nhiên bạn sẽ gặp chút khó khăn nếu không phải là người học về IT/Software hoặc là người đang đi làm (ví dụ trường hợp bạn trái ngành và làm IT/Software chưa đủ lâu).",
        "Các bài lab đều được hướng dẫn kỹ step-by-step, chỉ cần bạn chịu khó là có thể hoàn thành.",
        "Chúc các bạn có thể gặt hái được nhiều kiến thức bổ ích qua khoá học này.",
        "Thân ái - Linh Nguyễn."
      ],
      contactTeacher: "----Liên lạc với giảng viên----",
    },
    videos:[
      "https://www.youtube.com/embed/a9__D53WsUs",
      "https://www.youtube.com/embed/PZxAkzpuxT8",
      "https://www.youtube.com/embed/fgbdtNNXR0U"
    ],

  }
  const [showTeacherDetails, setShowTeacherDetails] = useState(false);
  return (
    <div className="details-content">
      <div>Here is nav bar an notification!</div>
      <Button size="small" onClick={()=>{showFullDetails(false)}}>Back</Button>
      
      {!showTeacherDetails?
      <div className='contents' style={{position:'relative'}}>
        <Sumary {...{courses}}/>
        <Payment {...{courses}}/>
        <div style={{padding: "20px 600px 20px 200px",}}>
          <Objectives {...{courses}}/>
          <Contents {...{courses}}/>
          <Requirements {...{courses}}/>
          <Description {...{courses}}/>
          <Target {...{courses}}/>
          <Teacher {...{courses, setShowTeacherDetails}}/>
          <Rating {...{courses}}/>
        </div>
      </div>
      :<TeacherDetails {...{setShowTeacherDetails}}/>}
      
    </div>
  );
}