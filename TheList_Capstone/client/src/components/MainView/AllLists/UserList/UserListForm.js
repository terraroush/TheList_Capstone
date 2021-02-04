import React from "react";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import "./UserList.css";

const UserListForm = ({ inputText, setInputText, tasks, setTasks }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTaskHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <>
      <Form inline>
        <FormGroup>
          <Label for="toDoInput" hidden>
            toDoInput
          </Label>
          <Input
            value={inputText}
            name="toDoInput"
            id="toDoInput"
            onChange={inputTextHandler}
            type="text"
            placeholder="add to your list"
            className="task-input"
            autofocus
          />
        </FormGroup>
        <Button
          onClick={submitTaskHandler}
          className="task-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </Button>
      </Form>
    </>
  );
};

export default UserListForm;
