import { Route, Routes } from "react-router";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Users from "./Components/Users";
const App = () => {


  return (<>

    <NavBar />
    <br />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/users" element={<Users />} />
    </Routes>

    <br />
    <Footer />


  </>);
}

export default App;