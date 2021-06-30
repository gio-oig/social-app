import { useContext } from "react";
import { useEffect, useState } from "react";
import { Context } from "../../context/context";
import { postApi } from "../../services/post";
import { socket } from "../../services/socket";

import Post from "../post/index";

import "./UsersPosts.scss";

const UsersPosts = () => {
  const { posts, setPosts } = useContext(Context);

  useEffect(() => {
    (async () => {
      const { data } = await postApi.getAllPosts();
      setPosts(data);
    })();

    const prependCommentToPost = (newComment) => {
      return posts.map((post) => {
        if (post.id === newComment.post) {
          post.comments.unshift(newComment);
        }
        return post;
      });
    };

    socket.on("newComment", (newComment) => {
      setPosts((posts) => prependCommentToPost(newComment));
    });

    return () => socket.off("newComment");
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
