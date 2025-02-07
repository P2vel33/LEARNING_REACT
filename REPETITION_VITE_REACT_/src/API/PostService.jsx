import React from "react";
import axios from "axios";

export default class PostService {
  static async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // console.log(response.data);
    return response;
  }
}
