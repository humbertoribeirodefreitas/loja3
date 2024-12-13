import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './img/logo.jpg';
import banner from './img/banner2.png';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import products from './Products/products';
 
export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h3 className="titulo">red-flower</h3>
        </div>
        <nav>
          <ul className="nav-links">
            <li><HiOutlineShoppingBag className="icon" /></li>
            <li><FaRegHeart className="icon" /></li>
          </ul>
        </nav>
      </header>
 
      <section className="banner">
        <img
          src={banner}
          alt="Banner"
          className="banner-img"
        />
        <div className="banner-text">
          <h2>Bem-vindo ao Nosso Site!</h2>
          <p>Explore nossos produtos e serviços.</p>
        </div>
      </section>
 
      <section className="links">
        <div className="container">
          <div className="link-buttons">
            <a href="#promoção" className="btn">promoção</a>
            <a href="#Hardwere" className="btn">Hardwere</a>
            <a href="#notebooks" className="btn">notebooks</a>
            <a href="#atendimento" className="btn">atendimento</a>
          </div>
          <hr className="divider" />
        </div>
      </section>

      <section className="product-cards">
        <div className="cards-container">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="card">
              <img src={product.image} alt={product.name} className="card-img" />
              <h4 className="card-title">{product.name}</h4>
              <p className="card-price">{product.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}