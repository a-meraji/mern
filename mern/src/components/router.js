import React, { useEffect, useState } from "react";
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
  const { homePath, checkAuth } = useGlobalContext();
  return (
    <Switch>
      <Route exact path={homePath} component={Home} />
      <Route path="/courses/:cat" component={Courses} />
      <Route path="/auth" component={Log} />
      <PrivateRoute
        path="/:cat/download/:id"
        component={Download_Course}
      />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {isAuth, checkAuth} = useGlobalContext();
  const [stay, setStay] = useState(true);
  const authHandler = async () => {
    const con = await checkAuth();
    if(!con){
      setStay(false);
    }
  };
  useEffect(() => {
    authHandler()
    }, [])
  return (
    <Route
      {...rest}
      render={(props) =>
        stay ? (
          isAuth?
          <Component />
          :
          ''
        ) : (
          <Redirect
            to={{ pathname: "/auth", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
