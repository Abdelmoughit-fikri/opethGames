import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
      key :  "f6100fb24f364fe1aa6e77f851631c8b"
    }
})