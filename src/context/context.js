import { useState } from "react";
import { createContext } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <Context.Provider
      value={{
        posts,
        setPosts,
        comments,
        setComments,
        activeUsers,
        setActiveUsers,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
