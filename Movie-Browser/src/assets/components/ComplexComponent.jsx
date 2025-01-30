import React, { useState, useEffect, useCallback, useRef } from "react";

// This is a simple React functional component
const ComplexComponent = () => {
  // useState Hook: Manage state in a functional component
  // It's an array with two elements: the current state value and the function to update it
  const [count, setCount] = useState(0);

  // useEffect Hook: Side-effects management (similar to lifecycle methods in class components)
  // Runs after every render unless specified otherwise (dependency array)
  useEffect(() => {
    console.log("Component mounted or count changed:", count);

    // Cleanup function (returns a function that is called on unmount or dependency change)
    return () => {
      console.log("Cleanup: count is being changed or component is unmounting.");
    };
  }, [count]); // Only run the effect when `count` changes

  // useCallback Hook: Memoizes the function so it doesn't get re-created on every render
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1); // Increment count with a function (to ensure accuracy)
  }, []); // The dependency array is empty, so the function will only be created once

  // useRef Hook: Stores a mutable value that doesn't trigger re-renders when updated
  const inputRef = useRef(null); // Initialize a ref object
  const focusInput = () => {
    inputRef.current.focus(); // Access the DOM node and focus the input field
  };

  // Memoized JSX rendering using React.memo (if the props don't change, the component won't re-render)
  const renderMessage = React.memo(() => {
    console.log("Rendering message");
    return <p>Current count is: {count}</p>;
  });

  return (
    <div>
      <h1>Complex React Component</h1>

      {/* Conditional Rendering */}
      {count >= 5 ? (
        <p>You've reached 5! You're awesome!</p>
      ) : (
        <p>Keep going!</p>
      )}

      {/* Event Handlers */}
      <button onClick={incrementCount}>Increment</button>
      <button onClick={() => setCount(0)}>Reset Count</button>

      {/* useRef Example: Accessing and focusing an input field */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me when you press the button"
      />
      <button onClick={focusInput}>Focus Input</button>

      {/* Memoized rendering for performance optimization */}
      {renderMessage()}

      {/* useEffect Hook Example: A button that logs to the console when clicked */}
      <button onClick={() => console.log("Button clicked!")}>Click me</button>

      {/* Using Context Example: Passing a prop from the parent to child */}
      <CounterDisplay count={count} />
    </div>
  );
};

// Child component receiving props
const CounterDisplay = React.memo(({ count }) => {
  console.log("Rendering CounterDisplay");
  return <div>Count from parent: {count}</div>;
});

export default ComplexComponent;
