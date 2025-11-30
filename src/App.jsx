import { Route, Routes } from "react-router";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Products from "./Components/Products";
const App = () => {


  return (<>

    <NavBar />
    <br />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/users" element={<h2>Users</h2>} />
    </Routes>

    <br />
    <Footer />


  </>);
}

export default App;