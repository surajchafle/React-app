import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import ListGroup from "./ListGroup";

function counts() {
  const [dev, setDev] = useState(1)
  const [testers, setTester] = useState(1)
  return (
    <Fragment>
     <div className="card">
        <button onClick={() => setDev((dev) => dev + 1)}>
          count is {dev}
        </button>
        <button onClick={() => setTester((testers) => testers + 1)}>
          count is {testers}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </Fragment>
  );
}

export default counts;
