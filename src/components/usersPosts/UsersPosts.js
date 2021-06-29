import { useContext } from "react";
import { useEffect, useState } from "react";
import { Context } from "../../context/context";
import { postApi } from "../../services/post";

import Post from "../post/index";

import "./UsersPosts.scss";

const UsersPosts = () => {
  const { posts, setPosts } = useContext(Context);

  useEffect(() => {
    (async () => {
      const { data } = await postApi.getAllPosts();
      setPosts(data);
    })();
  }, [setPosts]);

  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default UsersPosts;
