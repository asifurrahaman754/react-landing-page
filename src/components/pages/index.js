import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroSection from "../Hero";
import Navbar from "../Navbar";
import Sidebar from "../Navbar/Sidebar";
import InfoSection from "../InfoSection";
import Discover from "../Discover";
import SignUp from "../signup";
import Services from "../Services";
import Footer from "../footer";
import SignIn from "../Sign In";
import ScrolltoTop from "../ScrolltoTop";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <ScrolltoTop />
        <Switch>
          <Route exact path="/">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection />
            <Discover />
            <Services />
            <SignUp />
          </Route>
          <Route exact path="/sign in">
            <SignIn />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
