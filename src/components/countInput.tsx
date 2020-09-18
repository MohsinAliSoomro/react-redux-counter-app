import React from "react";

export default function countInput(props: {
  count: number;
  setCount: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}) {
  return (
    <div>
        <div>{props.count}</div>
      <button>+</button>
      <button>-</button>
    </div>
  );
}
