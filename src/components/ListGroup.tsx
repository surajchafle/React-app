import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let devs: string[]  = ["Santosh", "Ketan", "Rahul", "Sushant", "Suraj", "Amit", "Harsh", "Ravi", "Vikram"];
  let testers: string[] = ["Manoj"];
  const getDeveloperMessage = () => { return devs.length === 0 ? <p>No developer found</p> : null}; 
  const getTesterMessage = () => { return testers.length === 0 ? <p>No tester found</p> : null}; 
  return (
    <Fragment>
      <h3>List of Developers</h3>
      {getDeveloperMessage()}
      <ul className="list-group">
        {devs.map((devs) => (
          <li className="list-group-item" key={devs} onClick={()=> "click"}>{devs}</li>
        ))}
      </ul>
      <br/>
      <h3>List of Testers</h3>
      {getTesterMessage()}
      <ul className="list-group">
        {testers.map((testers) => (
          <li className="list-group-item" key={testers} onClick={()=> "click"}>{testers}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
