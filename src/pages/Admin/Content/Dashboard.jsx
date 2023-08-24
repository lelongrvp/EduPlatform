import { Card } from "react-bootstrap";
import "./Dashboard.scss";
import PieChart from "./PieChart";

const Dashboard = () => {
  const teacherCount = 10; // Replace with actual count
  const studentCount = 50; // Replace with actual count
  const courseCount = 20; // Replace with actual count

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="card-wrapper">
        <Card className="data-card">
          <Card.Body>
            <Card.Title>Teachers</Card.Title>
            <Card.Text>{teacherCount}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="data-card">
          <Card.Body>
            <Card.Title>Students</Card.Title>
            <Card.Text>{studentCount}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="data-card">
          <Card.Body>
            <Card.Title>Courses</Card.Title>
            <Card.Text>{courseCount}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <PieChart
        teacherPercentage={teacherCount}
        studentPercentage={studentCount}
      />
    </div>
  );
};

export default Dashboard;
