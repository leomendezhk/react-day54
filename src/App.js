// import logo from "./logo.svg";s
import "./App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Profile from "./Components/Profile";

import { Link, Routes, Route } from "react-router-dom";

// pages
import Welcome from "./Pages/Welcome.js";
import UseEffect from "./Pages/UseEffect.js";
import CounterBoard from "./Pages/CounterBoard";
import Products from "./Pages/Products";
import ProfilePage from "./Pages/ProfilePage.js";
import CovidList from "./Pages/CovidList.js";

function App() {
  return (
    <>
      {/* Navigation Bar  */}
      <div>
        <Link className="link" to="/">
          Welcome
        </Link>
        <Link className="link" to="/useEffect">
          UseEffect
        </Link>
        <Link className="link" to="/bootstrapCard">
          BootstrapCard
        </Link>
        <Link className="link" to="/counterBoard">
          CounterBoard
        </Link>
        <Link className="link" to="/products">
          Products
        </Link>
        <Link className="link" to="/covidList">
          CovidList
        </Link>
        <Link className="link" to="/profile">
          Profile
        </Link>
      </div>

      {/* pages */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/bootstrapCard" element={<Card />} />
        <Route path="/counterBoard" element={<CounterBoard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/covidList" element={<CovidList />} />
        <Route path="profile" element={<ProfilePage />}>
          <Route path="get" element={<Profile />} />
          <Route path="edit" element={<Form />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
