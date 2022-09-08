// See redux documentation for more details how to write middleware
// https://redux.js.org/tutorials/fundamentals/part-4-store#middleware
const print1 = (storeAPI) => (next) => (action) => {
  // Do anything here: pass the action onwards with next(action),
  // or restart the pipeline with storeAPI.dispatch(action)
  // Can also use storeAPI.getState() here
  console.log("print 1");
  next(action);
};

export default print1;
