import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { PlanContext } from "../../../providers/PlanProvider";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./DetailsForm.css";
import Switch from "./Switch";

const PlanDetailsForm = () => {
  const { addPlan, getPlanById, updatePlan } = useContext(PlanContext);
  const activeUser = +localStorage.getItem("userProfileId");
  const { planId } = useParams();
  const history = useHistory();

  const [plan, setPlan] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isGrocery, setIsGrocery] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [groceryId, setGroceryId] = useState("grocery");
  const [publicId, setPublicId] = useState("public");

  const handleControlledInputChange = (e) => {
    const newPlan = { ...plan };
    newPlan[e.target.name] = e.target.value;
    setPlan(newPlan);
  };

  useEffect(() => {
    if (planId) {
      getPlanById(+planId).then((res) => {
        setPlan(res);
        res.planTypeId === 1 ? setIsGrocery(true) : setIsGrocery(false);
        res.public && setIsPublic(true);
        setIsLoading(false);
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
        dateUpdated: plan.dateUpdated,
        deadline: plan.deadline,
        active: plan.active,
        public: isPublic,
        userProfileId: plan.userProfileId,
        planTypeId: isGrocery ? 1 : 2,
      })
        .then(() => toast.success("Nice change!"))
        .then(() => history.push(`/listcenter/createList/${+planId}`))
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
        deadline: plan.deadline,
        active: true,
        public: isPublic,
        userProfileId: activeUser,
        planTypeId: isGrocery ? 1 : 2,
      }).then((planObj) => {
        setIsLoading(false);
        setPlan();
        {
          history.push(`/listcenter/createlist/${planObj.id}`);
        }
      });
    }
  };
  if (!plan) return null;

  return (
    <article>
      <h4>{planId ? "Edit Details" : "List Details"}</h4>
      <br />
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
            required
            autoFocus
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
          <Switch
            isOn={isGrocery}
            id={groceryId}
            value={plan.grocery}
            name="grocery"
            handleToggle={() => setIsGrocery(!isGrocery)}
          />
          <Label for="grocery" check>
            Grocery List
          </Label>
        </FormGroup>

        <FormGroup className="public">
          <Switch
            isOn={isPublic}
            id={publicId}
            value={plan.public}
            name="public"
            handleToggle={() => setIsPublic(!isPublic)}
          />
          <Label for="public" check>
            Public
          </Label>
        </FormGroup>

        <Button className="details-button" disabled={isLoading} type="submit">
          {planId ? "Save" : "Add"}
        </Button>
      </Form>
    </article>
  );
};
export default PlanDetailsForm;
