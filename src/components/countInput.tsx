import React from "react";

export default function countInput(props: { count: number; setCount: any }) {
  return (
    <div>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          props.setCount(props.count + 1)
        }
      >
        +
      </button>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          props.setCount(props.count - 1)
        }
      >
        -
      </button>
    </div>
  );
}
