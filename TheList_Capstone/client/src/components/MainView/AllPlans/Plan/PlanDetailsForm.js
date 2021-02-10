import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Input, Label, CustomInput, Button } from "reactstrap";
import { PlanContext } from "../../../../providers/PlanProvider";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./DetailsForm.css";

const PlanDetailsForm = () => {
  const { addPlan, getPlanById, currentPlan, updatePlan } = useContext(
    PlanContext
  );
  const activeUser = +localStorage.getItem("userProfileId");
  const { planId } = useParams();
  const history = useHistory();

  const [plan, setPlan] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  const handleControlledInputChange = (e) => {
    const newPlan = { ...plan };
    newPlan[e.target.name] = e.target.value;
    setPlan(newPlan);
  };

  useEffect(() => {
    if (planId) {
      getPlanById(+planId).then((res) => {
        setIsLoading(false);
        setPlan(res);
      });
    } else {
      setIsLoading(false);
    }
  }, [planId]);

  const constructPlanObject = () => {
    setIsLoading(true);
    if (+planId) {
      updatePlan({
        id: +planId,
        title: plan.title,
        dateCreated: plan.dateCreated,
        deadline: plan.deadline,
        active: plan.active,
        public: plan.public,
        userProfileId: activeUser,
        planTypeId: 1,
      })
        .then(() => toast.success("good call on that edit"))
        .then(() => history.push(`/listcenter/createlist/${plan.id}`))
        .then((res) => {
          if (!res) {
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        });
    } else {
      addPlan({
        title: plan.title,
        dateCreated: new Date(),
        deadline: plan.deadline,
        active: true,
        public: plan.public,
        userProfileId: activeUser,
        planTypeId: 1,
      }).then((planObj) => {
        setIsLoading(false);
        setPlan();
        history.push(`/listcenter/createlist/${planObj.id}`);
      });
    }
  };
  if (!plan) return null;
  console.log(isChecked);

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
        <FormGroup className="title">
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

        <FormGroup className="due">
          <Label for="deadline" hidden>
            Due Date
          </Label>
          <input
            value={plan.deadline}
            onChange={handleControlledInputChange}
            name="deadline"
            id="deadline"
            type="text"
            onFocus={(e) => {
              e.currentTarget.type = "date";
              e.currentTarget.focus();
            }}
            placeholder="Due Date(optional)"
          />
        </FormGroup>

        <FormGroup className="grocery">
          <CustomInput
            type="switch"
            id="planTypeId"
            name="planTypeId"
            label="Grocery List"
            checked={plan.planTypeId}
            onChange={handleControlledInputChange}
          />
        </FormGroup>

        <FormGroup check className="public">
          <Input
            value={plan.public}
            type="checkbox"
            name="public"
            id="public"
            checked={isChecked}
            onChange={() => isChecked && setIsChecked(isChecked)}
          />
          <Label for="public" check>
            Public
          </Label>
        </FormGroup>

        <Button className="details-button" disabled={isLoading} type="submit">
          {planId ? "Save" : "Add"}
        </Button>
      </Form>
    </>
  );
};
export default PlanDetailsForm;
