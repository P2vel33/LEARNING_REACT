// import React from "react";

import axios from "axios";

// const PostService = () => {};

// export default PostService;
export default class PostService {
  static async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
}
