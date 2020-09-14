import axios from "axios";

export async function callGithubAPI(username) {
    return await axios.get(
      `https://api.github.com/users${username}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }