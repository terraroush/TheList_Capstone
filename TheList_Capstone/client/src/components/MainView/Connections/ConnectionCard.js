import React, { useContext, useEffect, useState } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import { useHistory } from "react-router-dom";

const ConnectionCard = () => {
  const {} = useContext(ConnectionContext);
  const { getAllConnections } = useContext(ConnectionContext);
  //   const history = useHistory();
  const [connections, setConnections] = useState({});

  useEffect(() => {
    getAllConnections().then((response) => {
      setConnections(response);
    });
  }, []);
  console.log(response);

  return (
    <>
      {/* <section>
        <h4>{visit.date}</h4>
        <div>${visit.cost}</div>
        <div>{visit.note}</div>
        <div>rating: {visit.rating}</div>
      </section>
      <button
        className="cursive"
        onClick={() => {
          history.push(`/client-history/edit/${visit.id}`);
        }}
      >
        edit
      </button> */}

      <button
        className="cursive"
        onClick={(e) => {
          if (window.confirm("delete this visit?")) deleteVisit(visit);
        }}
      >
        delete
      </button>
    </>
  );
};
