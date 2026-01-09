import { redirect } from "react-router-dom";
import { isAuthenticated } from "./isAuthenticated";

export async function requireAuth() {
  const auth = await isAuthenticated();
  if (!auth) return redirect("/login"); 
  return null;
}

export async function requireNoAuth() {
  const auth = await isAuthenticated();
  if (auth) return redirect("/"); 
  return null;
}
