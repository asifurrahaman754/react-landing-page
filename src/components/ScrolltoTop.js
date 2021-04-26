import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrolltoTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("path changes");
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}