import "./ProductsPreview.css";

import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import fuelImage from "../../assets/images/hero-image.jpg";
import insertImage from "../../assets/images/hero-image.jpg";
import refillImage from "../../assets/images/hero-image.jpg";

const products = [
  {
    image: fuelImage,
    title: "Elixir Bioethanol Gel Fuel",
    description:
      "A clean-burning gel fuel produced from organic waste, designed for affordable everyday cooking with lower emissions and reduced indoor smoke.",
  },
  {
    image: insertImage,
    title: "Adaptive Stove Insert",
    description:
      "An efficient stove insert engineered to work with existing household setups, eliminating the need to purchase expensive new equipment.",
  },
  {
    image: refillImage,
    title: "Smart Refill Ecosystem",
    description:
      "Refillable packaging and community refill points designed to make clean fuel access affordable, practical, and environmentally responsible.",
  },
];

const ProductsPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`products-preview ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="products-heading">
          <span className="products-subtitle">Our Products</span>
          <h2 className="products-title">
            Sustainable Solutions for <br />
            Cleaner Cooking
          </h2>
          <p className="products-description">
            Elixir Biotech combines clean fuel innovation, refill systems, and
            adaptive cooking solutions into a scalable ecosystem tailored for
            households and communities.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              className="product-card" 
              key={index}
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className="product-card-image">
                <img src={product.image} alt={product.title} />
                <div className="product-card-overlay"></div>
              </div>
              <div className="product-card-content">
                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-description">{product.description}</p>
                <a href="/products" className="product-card-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;