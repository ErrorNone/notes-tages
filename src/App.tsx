import axios from "axios";
import React, { useEffect } from "react";

function App() {
  
  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get(
        "https://github.com/ErrorNone/notes-tages/blob/master/src/store/dataBase.json"
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return <div>fg</div>;
}

export default App;
