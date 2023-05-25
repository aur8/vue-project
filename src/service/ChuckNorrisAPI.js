

import axios from "axios";

export default async function getChuckNorrisQuote() {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    return response.data.value;
  
}


