import Api from "./api";

export const postApi = {
  getAllPosts() {
    return Api.get("post/posts");
  },
};
