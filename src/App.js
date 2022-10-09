import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/projects" component={ProjectsPage}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
