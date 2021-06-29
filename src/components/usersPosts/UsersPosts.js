import { useEffect, useState } from "react";
import { postApi } from "../../services/post";

import Post from "../post/index";

import "./UsersPosts.scss";

const UsersPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await postApi.getAllPosts();
      setPosts(data);
    })();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default UsersPosts;
