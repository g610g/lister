import { createClient } from "@supabase/supabase-js";
import { Database } from "../../database.types";
const supabase_url = import.meta.env.VITE_SUPABASE_URL;
const supabase_anon = import.meta.env.VITE_SUPABASE_KEY;
export const supaBaseClient = createClient<Database>(
  supabase_url,
  supabase_anon
);

export const db = {
  todos: () => {
    return supaBaseClient.from("todos");
  },
};
