import React from "react";
import Router from "react-router";
import AppRouter from "./router";

Router.run(AppRouter, Router.HistoryLocation, function (Application) {
  React.render(<Application/>, document.body);
});