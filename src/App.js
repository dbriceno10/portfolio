import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
// import Layout from "./components/layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contactus from "./components/Contactus";
import Error404 from "./components/Error404";
import "./global.css";

const App = () => {
  return (
    <HashRouter>
      {/* <Layout> */}
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/resume" component={Resume} /> */}
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/testimonials" component={Testimonials} /> */}
        <Route exact path="/contact" component={Contactus} />
        <Route path="*" component={Error404} />
      </Switch>
      {/* </Layout> */}
    </HashRouter>
  );
};

export default App;
