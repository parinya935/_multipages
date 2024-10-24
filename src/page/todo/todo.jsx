import { useState, useEffect, useRef } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { fetchTodos } from "../../data/todo";

import "./todo.css";

const initItemPerPage = 10;
const initOnlyWaiting = false;

function Todo() {
  const [todosRaw, setTodosRaw] = useState([]);

  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemPerPages, setItemPerPages] = useState(5);

  const [todos, setTodos] = useState([]);

  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const itemPerPagesRef = useRef();
  const onlyWaitingRef = useRef();

  useEffect(() => {
    setTodosRaw(fetchTodos());
    setOnlyWaiting(initOnlyWaiting);
    onlyWaitingRef.current.checked = initOnlyWaiting;

    setItemPerPages(initItemPerPage);
    itemPerPagesRef.current.value = initItemPerPage;
  }, []);

  useEffect(() => {
    if (onlyWaiting) {
      setTodos(todosRaw.filter((todo) => !todo.completed));
    } else {
      setTodos(todosRaw);
    }
  }, [todosRaw, onlyWaiting]);

  useEffect(() => {
    setNumPages(Math.ceil(todos.length / itemPerPages));
  }, [todos, itemPerPages]);

  useEffect(() => {
    if (numPages <= 0) setCurrentPage(0);
    else if (currentPage === 0) setCurrentPage(1);
    else if (currentPage > numPages) setCurrentPage(numPages);
  }, [numPages]);

  function addClick(id, title) {
    const newItem = {
      id,
      title,
      completed: false,
      userId: 1,
    };

    setTodosRaw([...todosRaw, newItem]);
  }

  function deleteClick(id) {
    setTodosRaw(todosRaw.filter((todo) => todo.id !== id));
  }

  function waitingClick(id) {
    const todoSelected = todosRaw.find((todo) => todo.id === id);

    todoSelected.completed = true;
    // setTodosRaw(todosRaw);
    setTodosRaw([...todosRaw]);
  }

  // Modal
  const newIDRef = useRef();
  const newTitleRef = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="todo-container">
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="bi bi-plus-lg">Add todo</span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID:</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                ref={newIDRef}
                disabled
                value={
                  Number(
                    todosRaw.reduce((prev, todo) => {
                      return todo.id > prev ? todo.id : prev;
                    }, 0)
                  ) + 1
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" autoFocus ref={newTitleRef} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <span className="bi bi-x-lg">&nbsp;Cancel</span>
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const id = newIDRef.current.value;
              const title = newTitleRef.current.value.trim();

              if (title === "") {
                alert("Title cannot be empty!");
                newTitleRef.current.value = "";
                newTitleRef.current.focus();
              } else {
                addClick(id, title);
                handleClose();
              }
            }}
          >
            <span className="bi bi-plus-lg">&nbsp;Add</span>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* filter */}
      <div className="todo-filers-container">
        <div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              // checked
              onChange={(e) => setOnlyWaiting(e.target.checked)}
              ref={onlyWaitingRef}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Show only &nbsp;
              <button className="btn btn-warning">
                waiting&nbsp; <span className="bi bi-clock"></span>
              </button>
            </label>
          </div>
        </div>
        <select
          className="form-select"
          aria-label="Default select example"
          value={itemPerPages}
          style={{ width: "200px" }}
          onChange={(e) => setItemPerPages(e.target.value)}
          ref={itemPerPagesRef}
        >
          <option value={5}>
            5 item per page
          </option>
          <option value={10}>10 item per page</option>
          <option value={50}>50 item per page</option>
          <option value={100}>100 item per page</option>
        </select>
      </div>

      {/* table */}
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th style={{ width: "5%" }} valign="middle">
              ID
            </th>
            <th valign="middle">TITLE</th>
            <th style={{ textAlign: "right", width: "20%" }} valign="middle">
              Completed&nbsp;
              <button className="btn btn-primary" onClick={() => handleShow()}>
                <span className="bi bi-plus-lg"></span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {todos
            .filter((todo, index) => {
              const min = (currentPage - 1) * itemPerPages;
              const max = currentPage * itemPerPages - 1;
              return index >= min && index <= max;
            })
            .map((todo) => {
              return (
                <tr key={todo.id}>
                  <td valign="middle">
                    <span
                      className="badge bg-secondary"
                      style={{ width: "3rem" }}
                    >
                      {todo.id}
                    </span>
                  </td>
                  <td style={{ textAlign: "left" }} valign="middle">{todo.title}</td>
                  <td style={{ textAlign: "right" }} valign="middle">
                    {todo.completed ? (
                      <span className="badge bg-success">
                        done&nbsp;
                        <span className="bi bi-check"></span>
                      </span>
                    ) : (
                      <button
                        className="btn btn-warning"
                        onClick={() => waitingClick(todo.id)}
                      >
                        waiting&nbsp;
                        <span className="bi bi-clock"></span>
                      </button>
                    )}
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteClick(todo.id)}
                    >
                      <span className="bi bi-trash"></span>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* page control */}
      <div>
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage <= 1}
        >
          First
        </button>
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <span className="todo-space">
          {currentPage}&nbsp;/&nbsp;{numPages}
        </span>
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => {
            currentPage < numPages && setCurrentPage(currentPage + 1);
          }}
          disabled={currentPage >= numPages}
        >
          Next
        </button>
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => setCurrentPage(numPages)}
          disabled={currentPage >= numPages}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default Todo;
