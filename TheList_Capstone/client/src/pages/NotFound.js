import React from "react";
import { Alert, Button } from "reactstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div placeholder>
      <Alert color="warning">
        <h4 className="alert-heading">Oh dang!</h4>
        <p>We can't find this anywhere...check back in at </p>
        <Button color="success" as={Link} to="/" primary>
          Home
        </Button>
      </Alert>
    </div>
  );
};

export default NotFound;