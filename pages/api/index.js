import axios from "axios";
import { statusMessage } from "pages/hooks";

export const allPost = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return res;
};
export const detailPost = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res;
};
export const createPost = async (createData) => {
  try {
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      createData
    );
    statusMessage("success", "Post created successfully");

    return res;
  } catch (error) {
    statusMessage("error", "An error occurred while creating the post");
  }
};
export const updatePost = async (id, updateData) => {
  try {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      updateData
    );
    statusMessage("success", "Post updated successfully");
    return res;
  } catch (error) {
    statusMessage("error", "An error occurred while updating the post");
  }
};
export const deletePost = async (id) => {
  try {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    statusMessage("success", "Post deleted successfully");
    return res;
  } catch (error) {
    statusMessage("error", "An error occurred while deleting the post");
  }
};
