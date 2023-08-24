import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import CreateCategory from "./CreateCategory";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    {
      categoryID: 1,
      categoryName: "Frontend",
    },
    {
      categoryID: 2,
      categoryName: "Backend",
    },
    {
      categoryID: 3,
      categoryName: "Fullstack",
    },
    {
      categoryID: 4,
      categoryName: "Mobile",
    },
    {
      categoryID: 5,
      categoryName: "DevOps",
    },
    {
      categoryID: 6,
      categoryName: "Design",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCategoryCreate = (categoryName) => {
    // Create the new category and update the state
    setCategories([...categories, categoryName]);
  };

  const handleDelete = (category) => {
    const updatedCategories = categories.filter(
      (c) => c.categoryID !== category.categoryID
    );
    setCategories(updatedCategories);
    setShowModal(false); // Close the modal if it's open
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedCategory(null);
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
      <h2>Category Management</h2>
      <CreateCategory onCategoryCreate={handleCategoryCreate} />
      <ul>
        {categories.map((category) => (
          <li
            key={category.categoryID}
            style={{
              width: "100vw",
              display: "flex",
              gap: "20px",
              margin: "20px 0",
              alignItems: "center",
            }}
          >
            <h5>Category:</h5> {category.categoryName}
            <Button variant="danger" onClick={() => handleDelete(category)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>

      {/* View/Edit Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedCategory ? selectedCategory.categoryName : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCategory && (
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue={selectedCategory.categoryName}
                  readOnly
                />
              </Form.Group>
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

export default CategoryManagement;
