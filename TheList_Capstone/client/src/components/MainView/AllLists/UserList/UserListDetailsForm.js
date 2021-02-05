import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Input, Label, CustomInput, Button } from "reactstrap";
import { UserListContext } from "../../../../providers/UserListProvider";
import { useParams } from "react-router-dom";
import "./DetailsForm.css";

const UserListDetailsForm = () => {
  const { addTaskList, getUserListsById, updateUserList } = useContext(
    UserListContext
  );
  const activeUser = +localStorage.getItem("userProfileId");
  const { taskListId } = useParams();

  const [taskList, setTaskList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //   const [isChecked, setIsChecked] = useState(false);
  //   const [groceryValue, setGroceryValue] = useState(false);

  //   const toggleGrocerySwitch = (e) => {
  //     groceryValue && setGroceryValue(false);
  //   };
  //   const handlePublicCheck = (e) => {
  //     isChecked && setIsChecked(true);
  //   };

  const handleControlledInputChange = (e) => {
    const newTaskList = { ...taskList };
    newTaskList[e.target.name] = e.target.value;
    setTaskList(newTaskList);
  };

  useEffect(() => {
    if (taskListId) {
      getUserListsById(taskListId).then(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const constructTaskListObject = () => {
    setIsLoading(true);
    if (taskListId) {
      updateUserList({
        id: taskList.id,
        title: taskList.title,
        dateCreated: taskList.dateCreated,
        deadline: taskList.deadline,
        active: taskList.active,
        public: taskList.public,
        userProfileId: activeUser,
        listKindId: 1,
      }).then((res) => {
        if (!res) {
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });
    } else {
      addTaskList({
        id: taskList.id,
        title: taskList.title,
        dateCreated: new Date(),
        deadline: taskList.deadline,
        active: true,
        public: true,
        userProfileId: activeUser,
        listKindId: 1,
      }).then(() => {
        setIsLoading(false);
        setTaskList();
      });
    }
  };
  console.log(taskList);

  return (
    <>
      <Form
        className="detailsFormContainer"
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoading(true);
          constructTaskListObject();
        }}
      >
        <FormGroup className="detailsFormChild">
          <Input
            type="text"
            id="title"
            name="title"
            label="title"
            placeholder="List Title"
            onChange={handleControlledInputChange}
            defaultValue={taskList.title}
          />
        </FormGroup>
        <FormGroup className="detailsFormChild">
          <CustomInput
            type="switch"
            id="grocerySwitch"
            name="grocerySwitch"
            label="Grocery List"
          />
        </FormGroup>
        {/* <FormGroup className="detailsFormChild">
          <Label for="dateCreated" hidden>
            Today's Date
          </Label>
          <input
            type="date"
            onChange={handleControlledInputChange}
            name="dateCreated"
            id="dateCreated"
            placeholder="Today's Date"
            required
          />
        </FormGroup> */}

        <FormGroup className="detailsFormChild">
          <Label for="deadline" hidden>
            Due Date
          </Label>
          <input
            type="date"
            value={taskList.deadline}
            onChange={handleControlledInputChange}
            name="deadline"
            id="deadline"
            placeholder="Due Date"
          />
        </FormGroup>

        <FormGroup check className="detailsFormChild">
          <Input type="checkbox" name="public" id="public" />
          <Label for="public" check>
            Public
          </Label>
        </FormGroup>
      </Form>
      <Button disabled={isLoading} type="submit">
        {taskListId ? "Save" : "Add"}
      </Button>
    </>
  );
};
export default UserListDetailsForm;
