import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import axios from "axios";
import "./App.css";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function App() {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [editId, setEditId] = useState();
  
  const handleClose = () => setShow(false);
  
  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/todos");
      setTasks(res.data);
    };
    fetchData();
  }, []);

  const createTodo = async (text) => {
    const res = await axios.post("http://localhost:3000/todos", {
      title: text,
    });
    setTasks(res.data);
  };
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      setTasks(
        tasks.filter((task) => {
          return task.id !== id;
        })
        );
    } catch {
      alert("NOT GOOD");
    }
  };
  const editTodo = async () => {
    const data = await axios.patch(`http://localhost:3000/todos/${editId}`, {
      title:newTitle
    });
    console.log(data)
    if (data) {
      setTasks(data.data)
    }
  };
  const openModal = (id) => {
    setEditId(id);
    setShow(true);
  };
  function help() {
    handleClose()
    editTodo()
  }
  return (
    <div className="todoapp stack-large">
      <div className="container">
        <Header />
        <TodoInput createTodo={createTodo} />
        {tasks ? (
          <Todo
          tasks={tasks}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          openModal={openModal}
          newTitle={newTitle}
          editId={editId}
          />
          ) : (
            <Preloader />
            )}
      </div>
      <>
        <Modal show={show} onHide={handleClose} onClick={editTodo}>
          <Modal.Header closeButton>
            <Modal.Title>New Title For This Note </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Enter Here</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={help}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default App;

