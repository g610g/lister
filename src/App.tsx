import "./index.css";
import "./App.css";
import Body from "./components/Body";
import { useState } from "react";
import { supabase } from "./utils/supabase";
import { definitions } from "../generated-types.ts";
function App() {
  const [countries, setCountries] = useState<any>([]);
  async function getCountries() {
    const { data } = await supabase
      .from<definitions["countries"]>("countries")
      .select("*");
    setCountries(data);
  }
  return (
    <div>
      <Body />
    </div>
  );
}

export default App;
