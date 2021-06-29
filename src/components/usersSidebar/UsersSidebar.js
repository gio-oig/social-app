import Loader from "react-loader-spinner";
import MiniUser from "../mini-user";
import { userApi } from "../../services/user";

import { useEffect, useState } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./UsersSidebar.scss";

const UsersSidebar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await userApi.getAllUsers();
      console.log(data);
      setUsers(data);
    })();
  }, []);

  return (
    <>
      {users.map((user) => (
        <MiniUser user={user} key={user.id} />
      ))}
      {!users.length && (
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      )}
    </>
  );
};

export default UsersSidebar;
