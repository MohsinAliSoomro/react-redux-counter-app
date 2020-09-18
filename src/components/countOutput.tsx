import React from "react";
import  {useSelector} from 'react-redux'
export default function countOutput(): JSX.Element {
 const {count}:any = useSelector<number>(state=>state)
 console.log(count)
  return (
    <div>
      <h1></h1>
    </div>
  );
}
