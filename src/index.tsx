import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import App from "./App";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={Backend}>
      <App />
    </DndProvider>
  </Provider>,
  document.getElementById("root")
);
