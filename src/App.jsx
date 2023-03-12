import React from "react";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import AboutPage from "./pages/About/AboutPage";
import BlogDetailPage from "./pages/Blog/BlogDetailPage";
import BlogPage from "./pages/Blog/BlogPage";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog">
            <Route index element={<BlogPage />} />
            <Route path=":id" element={<BlogDetailPage />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;

// Link,NavLink
