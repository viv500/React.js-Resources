import React, { useContext } from 'react';
import ComponentC from './ComponentC';
// import { UserContext } from './ComponentA'; // ✅ Correct import

const ComponentB = () => {
  // const user = useContext(UserContext); // ✅ Correct usage of useContext

  return (
    <div className="box">
      <h1>Component B</h1>
      {/* COMMENTED THESE THINGS OUT cuz of file naming clashes*/}
      <h2> Hello {/*{user}*/} from Component B</h2> {/* ✅ Use the context value */}
      <ComponentC />
    </div>
  );
};

export default ComponentB;
