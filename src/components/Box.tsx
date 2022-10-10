import { useRef } from "react";

function Box() {
  const elementRef = useRef(null);

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button>Measure</button>
    </div>
  );
}

export default Box;
