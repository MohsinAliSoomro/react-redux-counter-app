import React from "react";

interface ICount {
  value: number
}

export default function countOutput(props :{count:number}): JSX.Element {
  return (
    <div>
      <h1>{props.count}</h1>
    </div>
  );
}
