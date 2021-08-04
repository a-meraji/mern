import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useGlobalContext } from "../context";
//pages
import Home from "../pages/home";
import Courses from "../pages/courses";
import Log from "../pages/log";
import Download_Course from "../pages/Download-Course";
import About from "../pages/about";
import Contact from "../pages/contact";
import NotFound from "../pages/404";

export default function Router() {
  const { isAuth } = useGlobalContext();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/courses/:cat" component={Courses} />
      <Route path="/auth" component={Log} />
      <PrivateRoute
        path="/:cat/download/:id"
        component={Download_Course}
        isAuth={isAuth}
      />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? (
        <Component />
      ) : (
        <Redirect to={{pathname: "/auth",state: { from: props.location }}}/>
      )
    }
  />
);

