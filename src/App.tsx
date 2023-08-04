/** @format */

import Button from "./components/Button";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      {visibility && (
        <Alert onClose={() => setVisibility(false)}>My Button</Alert>
      )}
      <Button onClick={() => setVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
