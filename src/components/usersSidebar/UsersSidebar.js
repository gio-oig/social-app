import Loader from "react-loader-spinner";
import MiniUser from "../mini-user";
import { userApi } from "../../services/user";

import { useContext, useEffect, useState } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./UsersSidebar.scss";
import { socket } from "../../services/socket";
import { Context } from "../../context/context";

const UsersSidebar = () => {
  const [users, setUsers] = useState([]);
  const { activeUsers, setActiveUsers } = useContext(Context);

  useEffect(() => {
    (async () => {
      const { data } = await userApi.getAllUsers();
      console.log(data);
      setUsers(data);
    })();

    socket.on("onlineUsers", ({ onlineUsers }) => {
      console.log(onlineUsers);
      setActiveUsers(onlineUsers);
    });

    return () => socket.off("onlineUsers");
  }, [setActiveUsers]);

  return (
    <>
      {users.map((user) => (
        <MiniUser
          user={user}
          key={user.id}
          isActive={activeUsers.includes(user.id)}
        />
      ))}
      {!users.length && (
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      )}
    </>
  );
};

export default UsersSidebar;
