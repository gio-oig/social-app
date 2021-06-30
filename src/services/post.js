import Api from "./api";

export const postApi = {
  getAllPosts() {
    return Api.get("post/posts");
  },
  create(content) {
    return Api.post("post/create", { content });
  },
  like(userId, postId) {
    return Api.post("post/like", { userId, postId });
  },
  delete(postId) {
    return Api.delete(`post/delete/${postId}`);
  },
};
