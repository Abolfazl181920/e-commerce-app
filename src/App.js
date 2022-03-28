import GlobalStyles from "GlobalStyles"
// import Formwrapper from './Auth/Formwrapper'
import Signup from 'Auth/Signup'
import Signin from 'Auth/Signin'
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <GlobalStyles />

      <Router>
        <Routes>
          {/* <Route path="/form" element={ <Formwrapper /> } /> */}
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/Signin" element={ <Signin /> } />
        </Routes>
      </Router>
    </>
  );
};

export default App;
