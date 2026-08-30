import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Homepage */}
          <Route index element={<Home />} />

          {/* Services Directory & Detail Pages */}
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />

          {/* Core Pages */}
          <Route path="about" element={<About />} />
          <Route path="why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resources" element={<Resources />} />

          {/* Legal Pages */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
