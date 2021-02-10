import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../../../../providers/TaskProvider";
import { toast } from "react-toastify";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Plan.css";

const TaskForm = ({ task, planId }) => {
  const { addTask, updateTask, deleteTask } = useContext(TaskContext);
  const [isLoading, setIsLoading] = useState(true);

  const defaultTask = {
    name: "",
    planId: planId,
  };
  const [currentTask, setCurrentTask] = useState(defaultTask);

  let taskId;

  const handleControlledInputChange = (e) => {
    const newTask = { ...currentTask };
    newTask[e.target.name] = e.target.value;
    setCurrentTask(newTask);
  };

  const submitTaskObjectHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    constructTaskObject();
  };

  useEffect(() => {
    if (task) {
      setIsLoading(false);
      taskId = task.id;
      setCurrentTask(task);
    } else {
      setIsLoading(false);
      setCurrentTask(defaultTask);
    }
  }, []);

  const constructTaskObject = () => {
    if (task) {
      updateTask({
        id: currentTask.id,
        name: currentTask.name,
        planId,
      })
        .then(() => toast.success("good call on that edit"))
        .then((res) => {
          if (!res) {
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        });
    } else {
      addTask({
        name: currentTask.name,
        planId,
      }).then(() => {
        setIsLoading(false);
        setCurrentTask(defaultTask);
      });
    }
  };

  return (
    <Form
      className="planForm-container"
      inline
      onSubmit={submitTaskObjectHandler}
    >
      <FormGroup>
        <Label for="name" hidden>
          name
        </Label>
        <Input
          value={currentTask.name}
          name="name"
          id="name"
          onChange={handleControlledInputChange}
          type="text"
          placeholder="add to your list"
          className="plan-input"
        />
      </FormGroup>
      <Button className="plan-button" type="submit" disabled={isLoading}>
        {!task ? (
          <i className="fas fa-plus-square" />
        ) : (
          <i className="fas fa-pen-square" />
        )}
      </Button>
      {task && (
        <Button
          className="trash plan-button"
          type="submit"
          onClick={(e) => {
            if (window.confirm("delete this task?"))
              deleteTask(currentTask.id).then(() => {
                toast.success("I hope you said goodbye");
              });
          }}
          disabled={isLoading}
        >
          <i className="fas fa-trash" />
        </Button>
      )}
    </Form>
  );
};

export default TaskForm;
