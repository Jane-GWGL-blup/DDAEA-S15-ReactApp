import axios from "axios";
import PeopleList from "../pages/list/PeopleList";

const getPeople = async (token) => {
  const { data } = await axios.get("https://localhost:7265/People/Get", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const ListPage = () => {
  return <PeopleList getPeople={getPeople} />;
};

export default ListPage;