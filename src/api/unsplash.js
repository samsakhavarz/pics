import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 57f4110bfcb29e1add2c38472f7dd94b24f9246bf23c048221f2c017543561e5"
  }
});
