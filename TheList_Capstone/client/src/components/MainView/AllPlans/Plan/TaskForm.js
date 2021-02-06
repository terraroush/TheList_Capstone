import React from "react";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import "./Plan.css";

const TaskForm = ({ inputText, setInputText, tasks, setTasks }) => {
  // handlers
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTaskHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { name: inputText }]);
    setInputText("");
    constructTaskObject();
  };
  const constructTaskObject = () => {
    if (taskId) {
      updateTask({
        id: planItem.id,
        name: planItem.name,
        planId: "",
      });
    } else {
      addTask({
        id: planItem.id,
        name: planItem.name,
        planId: "",
      }).then(() => {
        setTasks();
      });
    }
  };
  if (!task) return null;

  return (
    <>
      <Form inline>
        <FormGroup>
          <Label for="planItemInput" hidden>
            planItemInput
          </Label>
          <Input
            value={inputText}
            name="planItemInput"
            id="planItemInput"
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
