import React from "react";
import { Button, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";

const UserListForm = () => {
  return (
    <Form inline>
      <FormGroup>
        <Label for="toDoInput" hidden>
          toDoInput
        </Label>
        <Input
          type="text"
          name="toDoInput"
          id="toDoInput"
          placeholder="add to your list"
        />
      </FormGroup>{" "}
      <Button>Submit</Button>
      <div>
        <CustomInput
          type="switch"
          id="exampleCustomSwitch"
          name="customSwitch"
          label="Grocery List"
        />
      </div>
    </Form>
  );
};

export default UserListForm;
