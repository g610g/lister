import "./index.css";
import "./App.css";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import { supaBaseClient } from "./utils/supabase";
import { Countries } from "./utils/data";
function App() {
  const [countries, setCountries] = useState<Array<Countries>>([]);

  // useEffect(() => {
  //   getCountries();
  // }, []);
  // async function getCountries() {
  //   const { data } = await supaBaseClient.from("countries").select("*");
  //   setCountries(data || []);
  // }
  console.log(countries);
  return (
    <div>
      <Body />
    </div>
  );
}

export default App;
