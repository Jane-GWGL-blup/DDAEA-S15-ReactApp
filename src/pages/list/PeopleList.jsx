import { useEffect, useState } from "react";
import { Row, Container, Col, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const PeopleList = ({ getPeople }) => {
  const { token } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPeople(token)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  return (
    <>
      {error ? (
        <h1>Error de autenticación</h1>
      ) : (
        <Container style={{ padding: 80 }}>
          <h1 className="text-center">Lista de personas</h1><hr/>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((person, idx) => (
                <tr key={idx}>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};

export default PeopleList;