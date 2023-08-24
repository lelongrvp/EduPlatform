import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap"; // Import Bootstrap components
import CreateUser from "./CreateUser";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      email: "longeu100@gmail.com",
      phone: null,
      firstName: "Long",
      lastName: "Hoang",
      image: null,
      bio: null,
      link: null,
      certificates: null,
      experience: null,
      userID: 2,
      createdDate: "20-08-2023 17:43:45",
      modifiedDate: "20-08-2023 17:43:45",
    },
    {
      email: "longeu1@gmail.com",
      phone: "0969307637",
      image: null,
      firstName: "Long",
      lastName: "Hoang",
      description: null,
      userID: 3,
      createdDate: "21-08-2023 06:37:31",
      modifiedDate: "23-08-2023 01:40:15",
    },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDelete = (user) => {
    const updatedUsers = users.filter((u) => u.userID !== user.userID);
    setUsers(updatedUsers);
    setShowModal(false); // Close the modal if it's open
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 20px",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <h2>User Management</h2>
      <CreateUser />
      <ul>
        {users.map((user) => (
          <li
            key={user.userID}
            style={{
              width: "100vw",
              display: "flex",
              gap: "20px",
              margin: "20px 0",
              alignItems: "center",
            }}
          >
            <h5>Email:</h5> {user.email}
            <h5>Full Name:</h5> {user.firstName + " " + user.lastName}
            <h5>Phone Number:</h5> {user.phone}
            <h5>Joined at:</h5> {user.createdDate}
            <Button variant="primary" onClick={() => handleEdit(user)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => handleDelete(user)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>

      {/* View/Edit Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedUser ? selectedUser.email : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" defaultValue={selectedUser.email} />
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue={selectedUser.firstName + selectedUser.lastName}
                />
              </Form.Group>
              {/* Add more form fields based on the JSON structure and role */}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserManagement;
