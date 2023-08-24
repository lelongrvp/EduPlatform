/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const CreateUser = () => {
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleCloseRoleModal = () => {
    setShowRoleModal(false);
    setSelectedRole(null);
  };

  return (
    <div>
      <Button onClick={() => setShowRoleModal(true)}>Create new user</Button>

      <RoleModal
        show={showRoleModal}
        onSelectRole={setSelectedRole}
        onClose={handleCloseRoleModal}
      />

      {selectedRole && (
        <UserFormModal
          role={selectedRole}
          onClose={() => setSelectedRole(null)}
        />
      )}
    </div>
  );
};

const RoleModal = ({ show, onSelectRole, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select Role</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button variant="primary" onClick={() => onSelectRole("Teacher")}>
          <FaChalkboardTeacher style={{ marginRight: "5px" }} />
          Teacher
        </Button>
        <Button variant="primary" onClick={() => onSelectRole("Student")}>
          <PiStudentFill style={{ marginRight: "5px" }} />
          Student
        </Button>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "center" }}>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const UserFormModal = ({ role, onClose }) => {
  const userFormFields =
    role === "Teacher" ? teacherFormFields : studentFormFields;

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create {role}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {userFormFields.map((field) => (
            <Form.Group key={field.key} controlId={field.key}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control type={field.type} placeholder={field.placeholder} />
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary">Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

const teacherFormFields = [
  { key: "email", label: "Email", type: "email", placeholder: "Enter email" },
  { key: "phone", label: "Phone", type: "text", placeholder: "Enter phone" },
  {
    key: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter first name",
  },
  {
    key: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter last name",
  },
  {
    key: "image",
    label: "Image",
    type: "text",
    placeholder: "Enter image URL",
  },
  { key: "bio", label: "Bio", type: "text", placeholder: "Enter bio" },
  { key: "link", label: "Link", type: "text", placeholder: "Enter link" },
  {
    key: "certificates",
    label: "Certificates",
    type: "text",
    placeholder: "Enter certificates",
  },
  {
    key: "experience",
    label: "Experience",
    type: "text",
    placeholder: "Enter experience",
  },
];

const studentFormFields = [
  { key: "email", label: "Email", type: "email", placeholder: "Enter email" },
  { key: "phone", label: "Phone", type: "text", placeholder: "Enter phone" },
  {
    key: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter first name",
  },
  {
    key: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter last name",
  },
  {
    key: "image",
    label: "Image",
    type: "text",
    placeholder: "Enter image URL",
  },
  {
    key: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter description",
  },
];

// TODO: Implement handleCreateUser function

export default CreateUser;
