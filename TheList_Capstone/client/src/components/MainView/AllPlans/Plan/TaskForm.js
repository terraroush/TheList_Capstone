import React from "react";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import "./Plan.css";

const TaskForm = ({ inputText, setInputText, tasks, setTasks }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTaskHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { planItem: inputText, id: Math.random() * 1000 }]);
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
            className="plan-input"
          />
        </FormGroup>
        <Button
          onClick={submitTaskHandler}
          className="plan-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </Button>
      </Form>
    </>
  );
};

export default TaskForm;
