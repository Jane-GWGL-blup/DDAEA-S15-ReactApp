import axios from "axios";
import Login from "../pages/Login/login";

const loginUserApiRequest = async (UserName, Password) => {
  const { data } = await axios.post(
    "https://localhost:7265/security/createToken",
    {
      UserName,
      Password,
    }
  );
  return data;
};
const LoginPage = () => {
  return <Login loginUserApiRequest={loginUserApiRequest} />;
};

export default LoginPage;