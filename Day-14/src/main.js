import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./Stores1";
import Counting from "./Counting";
import CustomCounter from "./CustomCounter";
import CreateCoin from "./CreateCoin";
function App() {
  return (
    <Provider store={stores}>
      <CreateCoin/>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);