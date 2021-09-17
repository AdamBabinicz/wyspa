import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Summary from "./components/Summary";
import Genesis from "./components/Genesis";
import Symbol from "./components/Symbol";
import Keys from "./components/Keys";
import Functionality from "./components/Functionality";
import Answers from "./components/Answers";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route name="Home" path="/" exact component={Home} />
          <Route name="Contact" path="/wypr" exact component={Contact} />
          <Route name="Projects" path="/opracowania" component={Projects} />
          <Route name="Characters" path="/postacie" component={Characters} />
          <Route name="Summary" path="/streszczenie" component={Summary} />
          <Route name="Genesis" path="/geneza" component={Genesis} />
          <Route name="Symbol" path="/symbol" component={Symbol} />
          <Route name="Keys" path="/klucze" component={Keys} />
          <Route
            name="Functionality"
            path="/fragment"
            component={Functionality}
          />
          <Route name="Answers" path="/odpowiedzi" component={Answers} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
