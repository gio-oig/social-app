import Api from "./api";

export const postApi = {
  getAllPosts() {
    return Api.get("post/posts");
  },
  create(content) {
    return Api.post("post/create", { content });
  },
};
