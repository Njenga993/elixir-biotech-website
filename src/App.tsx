import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/backtotop/BackToTop";
import WhatsAppButton from "./components/Whatsapp/WhatsAppButton";
import SEO from "./components/SEO/SEO"; // 👈 ADDED for 404 page

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Products = lazy(() => import("./pages/Products/Products"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

// 404 Page Component
const NotFound = () => (
  <main style={{ 
    minHeight: "60vh", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    padding: "40px 20px",
    textAlign: "center"
  }}>
    <SEO 
      title="Page Not Found"
      description="The page you're looking for doesn't exist. Explore Elixir Biotech's clean bioethanol fuel solutions in Kenya."
      path="/404"
      // Don't index 404 pages
      keywords={[]}
    />
    <h1 style={{ fontSize: "72px", margin: "0", color: "#82AF24" }}>404</h1>
    <h2 style={{ marginTop: "10px" }}>Page Not Found</h2>
    <p style={{ maxWidth: "400px", marginTop: "10px", opacity: 0.8 }}>
      The page you're looking for doesn't exist. Let's get you back to clean energy solutions.
    </p>
    <a 
      href="/" 
      style={{
        marginTop: "20px",
        padding: "12px 24px",
        background: "#82AF24",
        color: "white",
        textDecoration: "none",
        borderRadius: "6px",
        fontWeight: "bold"
      }}
    >
      Back to Home
    </a>
  </main>
);

// Enhanced loading fallback
const PageLoader = () => (
  <div style={{
    padding: "80px 40px",
    textAlign: "center",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <div style={{
      width: "40px",
      height: "40px",
      border: "3px solid #e0e0e0",
      borderTop: "3px solid #82AF24",
      borderRadius: "50%",
      animation: "spin 1s linear infinite"
    }} />
    <p style={{ marginTop: "20px", opacity: 0.7 }}>Loading...</p>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 👇 ADDED: 404 catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}

export default App;