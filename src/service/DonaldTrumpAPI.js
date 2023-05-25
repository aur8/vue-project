import axios from "axios";

export default async function getDonaldTrumpQuote() {
  const response = await axios.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random");
  return response.data.message;

}
