import GlobalStyles from "GlobalStyles";
import Signup from "Auth/Signup";
import Signin from "Auth/Signin";
import { Routes, Route } from "react-router-dom";
import Navigation from "NavBar/Navigation";
import { ToastContainer } from "react-toastify";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";
import ProductItem from "Product/product-item/ProductItem";

export const supabase = createClient(
  process.env.REACT_APP_API_URL,
  process.env.REACT_APP_API_KEY
);

const App = () => {

  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </>
  );
};

export default App;
