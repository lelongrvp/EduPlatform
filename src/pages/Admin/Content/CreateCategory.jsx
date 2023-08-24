/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const CreateCategory = ({ onCategoryCreate }) => {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCategoryName(""); // Clear the input field
  };

  const handleSaveCategory = () => {
    onCategoryCreate(categoryName); // Notify parent component about the new category
    handleCloseModal();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleOpenModal}>
        Create Category
      </Button>

      {/* Create Category Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="categoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveCategory}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateCategory;
