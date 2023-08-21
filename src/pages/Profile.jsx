import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdFiberManualRecord, MdEdit } from 'react-icons/md';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const fakeProfileData = [
  {
    id: 1,
    avatar: 'https://via.placeholder.com/150',
    firstName: 'Hung',
    lastName: 'Le',
    description: 'Software Developer',
    email: 'Hungvietle249@gmail.com',
    phone: '0977860952',
    role: 'Student',
    isActive: true,
  },
  {
    id: 2,
    avatar: 'https://via.placeholder.com/150',
    firstName: 'Hao',
    lastName: 'Doan',
    description: 'Web Designer',
    email: 'hao.doan@example.com',
    phone: '1234567890',
    role: 'Designer',
    isActive: false,
  },
];

const Profile = ({ id }) => {
  const profile = fakeProfileData.find(profile => profile.id === 1);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  const { avatar, firstName, lastName, description, email, phone, role, isActive } = profile;

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '2rem auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <Avatar alt="Avatar" src={avatar} sx={{ width: 100, height: 100, margin: 'auto' }} />
        <Link to={`/edit-profile/${profile.id}`} style={{ position: 'absolute', top: '0', right: '0' }}>
          <MdEdit style={{ fontSize: '1.5rem', color: 'blue' }} />
        </Link>
      </div>
      <Typography variant="h5" align="center" gutterBottom>
        {firstName} {lastName}
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        {role}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        {description}
      </Typography>
      <Typography variant="body2" align="center">
        {isActive ? (
          <span>
            <MdFiberManualRecord style={{ color: 'green', marginRight: '5px' }} />
            Active
          </span>
        ) : (
          <span>
            <MdFiberManualRecord style={{ color: 'grey', marginRight: '5px' }} />
            Inactive
          </span>
        )}
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <FaEnvelope style={{ marginRight: '5px' }} />
        <Typography variant="body2">{email}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaPhone style={{ marginRight: '5px' }} />
        <Typography variant="body2">{phone}</Typography>
      </div>
    </Paper>
  );
};

export default Profile;
