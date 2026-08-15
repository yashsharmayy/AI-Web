import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LenisProvider } from "./components/ui/LenisProvider";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { AuthProvider } from "./context/AuthContext";
import { LoaderProvider } from "./context/LoaderContext";
import { IntroLoader } from "./components/loading/IntroLoader";
import { AuthModal } from "./components/ui/AuthModal";
import AdminRoute from "./pages/adminRoute";
import ResetPassword from "./pages/ResetPassword";
const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then((m) => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage").then((m) => ({ default: m.ServiceDetailPage })));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage").then((m) => ({ default: m.PortfolioPage })));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage").then((m) => ({ default: m.ProjectDetailPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const BlogPage = lazy(() => import("./pages/BlogPage").then((m) => ({ default: m.BlogPage })));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage").then((m) => ({ default: m.BlogDetailPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const AdminPage = lazy(() => import("./pages/AdminPage").then((m) => ({ default: m.AdminPage })));
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function PageSkeleton() {
  return <div className="min-h-screen pt-32 pb-20 max-w-7xl mx-auto px-6 animate-pulse space-y-8">
    <div className="h-12 bg-black/5 rounded-2xl w-1/3" />
    <div className="h-64 bg-black/5 rounded-3xl w-full" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="h-48 bg-black/5 rounded-2xl" />
      <div className="h-48 bg-black/5 rounded-2xl" />
      <div className="h-48 bg-black/5 rounded-2xl" />
    </div>
  </div>;
}
export default function App() {
  return <Router>
    <AuthProvider>
      <LoaderProvider>
        <IntroLoader />
        <LenisProvider>
          <ScrollToTop />
          <CustomCursor />
          <AuthModal />
          <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans antialiased flex flex-col justify-between relative selection:bg-[#FF3B30] selection:text-white noise-overlay">
            <Navbar />
            <main className="grow">
              <Suspense fallback={<PageSkeleton />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:slug" element={<ServiceDetailPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogDetailPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route
                    path="/admin" element={
                      <AdminRoute>
                        <AdminPage />
                      </AdminRoute>
                    }
                  />
                  <Route path="/reset-password/:token" element={<ResetPassword />} />
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </LenisProvider>
      </LoaderProvider>
    </AuthProvider>
  </Router>;
}
