import User  from "../../screens/types/User";
import { supabase } from "./config";

export async function signInWithEmail(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return error;
}

export async function signUpWithEmail(user: User) {
  const {
    data: { session },
    error,
  } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
  });

  return { session, error };
}
