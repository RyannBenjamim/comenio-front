import { redirect } from "react-router-dom";
import { isAuthenticated } from "./isAuthenticated";

export const requireAuth = async () => {
  const auth = await isAuthenticated();
  if (!auth) return redirect("/login"); 
  return null;
}

export const requireNoAuth = async () => {
  const auth = await isAuthenticated();
  if (auth) return redirect("/"); 
  return null;
}
