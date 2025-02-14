import React from "react";
import axios from "axios";

export default class PostService {
  static async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response;
  }

  static async getOnePage(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?id=${id}`
    );
    return response;
  }
}
