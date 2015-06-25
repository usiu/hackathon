import React from "react";
import Router from "react-router";
import analytics from "ga-react-router";
import AppRoutes from "./router";

Router.run(AppRoutes, Router.HistoryLocation, function (Application, state) {
  React.render(<Application/>, document.body);
  analytics(state); //Logs transitions in Google Analytics
});