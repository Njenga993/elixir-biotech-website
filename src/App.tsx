import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react"; // 👈 Import for Lazy Loading

// Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/backtotop/BackToTop";
import WhatsAppButton from "./components/Whatsapp/WhatsAppButton";

// SEO Components
import SEO from "./components/SEO/SEO";
import StructuredData from "./components/SEO/StructuredData";

// 👇 LAZY LOADING (Layer 5: Performance)
// This ensures the browser only downloads code for the page the user is visiting
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Products = lazy(() => import("./pages/Products/Products"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

// Simple loading fallback while code fetches
const PageLoader = () => <div style={{padding: "40px", textAlign:"center"}}>Loading...</div>;

function App() {
  return (
    <>
      <Navbar />
      
      {/* Suspense wrapper is required for Lazy Loading */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <SEO 
  title="Bioethanol Gel Fuel in Nairobi | Elixir Biotech" 
  description="Discover affordable, clean bioethanol gel fuel in Nairobi. Elixir Biotech converts organic waste into safe cooking fuel for households." 
  path="/" 
/>
                <StructuredData />
                <Home />
              </>
            } 
          />
          
          <Route 
            path="/about" 
            element={
              <>
                <SEO 
  title="About Elixir Biotech | Our Mission & Story" 
  description="Learn how Elixir Biotech is revolutionizing clean energy in Kenya by converting organic waste into sustainable cooking fuel." 
  path="/about" 
/>
                <About />
              </>
            } 
          />

          <Route 
            path="/products" 
            element={
              <>
               <SEO 
  title="Shop Bioethanol Gel Fuel | Buy Online in Kenya" 
  description="Order our non-spill, clean-burning bioethanol gel fuel. A safer, cheaper alternative to charcoal and kerosene." 
  path="/products" 
/>
                <Products />
              </>
            } 
          />

          <Route 
            path="/contact" 
            element={
              <>
                <SEO 
  title="Contact Elixir Biotech | Nairobi, Kenya" 
  description="Get in touch with our Nairobi team for distribution inquiries or customer support. Find our contact details here." 
  path="/contact" 
/>
                <Contact />
              </>
            } 
          />
        </Routes>
      </Suspense>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}

export default App;