/** @format */

import "./App.css";
import FootLand from "./components/FootLand";
import LandPage from "./components/LandPage";

import Header from "./components/Header";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

function App() {
  return (
    <div className='App'>
      <Header />
      <LandPage />
      <FootLand />
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
