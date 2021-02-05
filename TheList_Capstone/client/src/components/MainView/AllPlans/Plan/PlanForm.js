import React from "react";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import "./Plan.css";

const PlanForm = ({ inputText, setInputText, tasks, setTasks }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitPlanHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
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
      <Button onClick={submitPlanHandler} className="plan-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </Button>
    </Form>
  );
};

export default PlanForm;
