import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Browse from "../pages/Browse";
import EventDetails from "../pages/EventDetails";
import Clubs from "../pages/Clubs";
import ClubDetails from "../pages/ClubDetails";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import Credits from "../pages/Credits";



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/browse/:id" element={<EventDetails />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:id" element={<ClubDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
