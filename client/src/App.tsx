import { type } from "os";
import React, { useEffect, useState } from "react";

interface BackEndData {
  users: string[];
}

function App() {
  const [backEndData, setBackEndData] = useState<BackEndData>({ users: [] });

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setBackEndData(data));
  }, []);

  return (
    <div>
      {typeof backEndData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backEndData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
