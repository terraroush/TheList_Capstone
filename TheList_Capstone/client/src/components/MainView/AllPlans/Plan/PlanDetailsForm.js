import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Input, Label, CustomInput, Button } from "reactstrap";
import { PlanContext } from "../../../../providers/PlanProvider";
import { useParams, useHistory } from "react-router-dom";
import "./DetailsForm.css";

const PlanDetailsForm = () => {
  const { addPlan, getPlansById, getAllPlans, updatePlan } = useContext(
    PlanContext
  );
  const activeUser = +localStorage.getItem("userProfileId");
  const { planId } = useParams();
  const history = useHistory();

  const [plan, setPlan] = useState({});
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
    const newPlan = { ...plan };
    newPlan[e.target.name] = e.target.value;
    setPlan(newPlan);
  };

  useEffect(() => {
    if (planId) {
      getPlansById(planId).then(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const constructPlanObject = () => {
    setIsLoading(true);
    if (planId) {
      updatePlan({
        id: plan.id,
        title: plan.title,
        dateCreated: plan.dateCreated,
        deadline: plan.deadline,
        active: plan.active,
        public: plan.public,
        userProfileId: activeUser,
        planTypeId: 1,
      }).then((res) => {
        if (!res) {
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });
    } else {
      addPlan({
        id: plan.id,
        title: plan.title,
        dateCreated: new Date(),
        deadline: plan.deadline,
        active: true,
        public: true,
        userProfileId: activeUser,
        planTypeId: 1,
      }).then(() => {
        setIsLoading(false);
        setPlan();
        // history.push("/listcenter/createlist");
      });
    }
  };
  if (!plan) return null;
  // console.log(plan);

  return (
    <>
      <Form
        className="detailsFormContainer"
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoading(true);
          constructPlanObject();
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
            defaultValue={plan.title}
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

        <FormGroup className="detailsFormChild">
          <Label for="deadline" hidden>
            Due Date
          </Label>
          <input
            type="date"
            value={plan.deadline}
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
        <Button disabled={isLoading} type="submit">
          {planId ? "Save" : "Add"}
        </Button>
      </Form>
    </>
  );
};
export default PlanDetailsForm;
