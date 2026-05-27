import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

// Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/backtotop/BackToTop";
import WhatsAppButton from "./components/Whatsapp/WhatsAppButton";

// ✅ ADD DEFAULT SEO FALLBACK
const DefaultSEO = () => (
  <Helmet>
    <title>Elixir Biotech | Clean Bioethanol Fuel in Kenya</title>
    <meta name="description" content="Elixir Biotech transforms organic waste into affordable bioethanol gel fuel. A safe, sustainable alternative to charcoal and kerosene for households in Nairobi." />
  </Helmet>
);

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Products = lazy(() => import("./pages/Products/Products"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound")); // ✅ Import 404

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
      {/* ✅ Default SEO that shows while lazy pages load */}
      <DefaultSEO />
      
      <Navbar />
      
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* ✅ Catch-all route for 404 */}
        </Routes>
      </Suspense>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}

export default App;