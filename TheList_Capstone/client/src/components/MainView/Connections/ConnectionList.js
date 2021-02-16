import React, { useContext, useEffect } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import { ConnectionCard } from "./ConnectionCard";
import { useParams, useHistory } from "react-router-dom";

export const ConnectionList = () => {
  const { getAllConnections } = useContext(ConnectionContext);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    getAllConnections().then((res) => {
      setConnections(res);
    });
  }, []);

  return (
    <article>
      <h1>Your Connections</h1>

      <div className="visitList--clientCard">
        {clients.map((client) => {
          if (client.id === +clientId) {
            return <ClientDetail key={client.id} clientId={client.id} />;
          }
        })}
      </div>

      <Button
        className="cursive addVisitBtn"
        fitted="true"
        size="large"
        icon="add"
        title="add new visit"
        onClick={() => history.push("/client-history/create")}
      ></Button>

      <div className="visitList--list">
        {visits
          .sort(
            (a, b) =>
              moment(b.date).format("YYYYMMDD") -
              moment(a.date).format("YYYYMMDD")
          )
          .map((visit) => {
            if (visit.userId === activeUser) {
              return (
                <VisitCard
                  key={visit.id}
                  visit={visit}
                  clientId={visit.clientId}
                />
              );
            }
          })}
      </div>
    </article>
  );
};
