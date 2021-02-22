import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, CardBody } from "reactstrap";
import "./NewUser.css";

const NewUser = () => {
  const history = useHistory();
  return (
    <article className="welcome-Container">
      <h4 className="welcome-title">Welcome to TheList!</h4>
      <Card>
        <CardBody>
          {" "}
          You may start a new list, make connections with available users, and
          keep your lists for further review.
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          Your lists can be kept to yourself, or you may share them with
          friends. If you do not want other users to affect your lists, simply
          mark them as private.
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          If you're making a grocery list, switch on the grocery button for
          useful autocomplete functionality.
        </CardBody>
      </Card>
      <br />
      <Card>
        <CardBody>
          {" "}
          Make your first list{" "}
          <Button
            size="small"
            outline
            color="info"
            onClick={() => history.push("/listcenter/createlist")}
          >
            New List
          </Button>
        </CardBody>
      </Card>
    </article>
  );
};
export default NewUser;
