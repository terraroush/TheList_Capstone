import React from "react";
import { Form, FormGroup, Input, Label, CustomInput } from "reactstrap";

const UserListDetailsForm = () => {
  return (
    <>
      <Form>
        <FormGroup>
          <CustomInput
            type="switch"
            id="grocerySwitch"
            name="grocerySwitch"
            label="Grocery List"
            value={""}
          />
        </FormGroup>
        <FormGroup>
          <Label for="dateCreated">Today's Date</Label>
          <Input
            type="datetime"
            name="dateCreated"
            id="dateCreated"
            placeholder="Today's date"
            value={""}
          />
        </FormGroup>
        <FormGroup>
          <Label for="deadline">Due Date</Label>
          <Input
            type="datetime"
            name="deadline"
            id="deadline"
            placeholder="due date"
            value={""}
          />
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" name="public" id="public" value={""} />
          <Label for="public" check>
            Public
          </Label>
        </FormGroup>
      </Form>
    </>
  );
};
export default UserListDetailsForm;
