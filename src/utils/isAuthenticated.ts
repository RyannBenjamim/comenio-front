import axios from "axios";
import { getHeaders } from "./getHeaders";

export async function isAuthenticated(): Promise<boolean> {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/validate-token",
      { headers: getHeaders() }
    );
    return response.data.isAuthenticated;
  } catch {
    return false;
  }
}
