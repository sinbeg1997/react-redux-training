import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HookCakeContainer() {
  // useSelector, useDispatch la cac hook co the thay the cho Higher order component (connect)
  // de truy cap vao store lay state va cac dispatch action ra de su dung
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HookCakeContainer;
