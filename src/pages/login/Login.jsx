import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Login = ({ loginUserApiRequest }) => {
  const [validated, setValidated] = useState(false);
  const [loginUserResponseState, setLoginUserResponseState] = useState({
    success: "",
    error: "",
    loading: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget.elements;

    const UserName = form.UserName.value;
    const Password = form.Password.value;

    if (event.currentTarget.checkValidity() === true && UserName && Password) {
      setLoginUserResponseState({ loading: true });
      loginUserApiRequest(UserName, Password)
        .then((res) => {
          setLoginUserResponseState({
            success: res.success,
            loading: false,
            error: "",
          });

          if (res) navigate(`/${res}`);
        })
        .catch((er) => {
          er.message = "Error de autenticación";
          navigate(`/${er}`);
        });
    }

    setValidated(true);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
        <div className="row m-5 p-5 ">
            <div className="col p-5 m-5 shadow-lg p-3 mb-5 bg-body rounded">
                <h1 className="text-center">Login</h1>
                <form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input 
                            name="UserName"
                            type="text" 
                            class="form-control" 
                            placeholder="Ingresa tu username"
                            required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input 
                        name="Password"
                        type="password" 
                        class="form-control"
                        placeholder="Contraseña"
                        required/>
                    </div>
                    <button type="submit" class="btn btn-success d-grid mx-auto col-6">
                        {loginUserResponseState &&
                        loginUserResponseState.loading === true ? (
                            <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            />
                        ) : (
                            ""
                        )}
                        Login
                    </button>
                </form>
                <Alert
                        show={
                            loginUserResponseState &&
                            loginUserResponseState.error === "wrong credentials"
                        }
                        variant="danger"
                        >
                        Wrong credentials
                    </Alert>
            </div>
        </div>
    </div>
  );
};
/** 
 *     <Container>
      <Row className="mt-5 justify-content-center">
        <Col md={12}>
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                name="UserName"
                required
                type="text"
                placeholder="Ingresa tu nombre de usuario"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="Password"
                required
                type="password"
                placeholder="Contraseña"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {loginUserResponseState &&
              loginUserResponseState.loading === true ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                ""
              )}
              Login
            </Button>
            <Alert
              show={
                loginUserResponseState &&
                loginUserResponseState.error === "wrong credentials"
              }
              variant="danger"
            >
              Wrong credentials
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
*/
export default Login;
