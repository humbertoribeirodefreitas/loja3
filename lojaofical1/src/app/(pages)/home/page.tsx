/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './Home.css';
import MongoDBproducts from '@/db/MongoDB/MongoDB';
export default function page() {
  return (
    <div>
      <header className="bg-[#222] p-4">
        <div className="logo-container"> 
          {/* <img src={logo} alt="Logo" className="logo" /> */}
          <h3 className="titulo text-2xl">Red Flower</h3>
        </div>
        <nav>
          <ul className="nav-links">
            {/* <li><HiOutlineShoppingBag className="icon" /></li>
            <li><FaRegHeart className="icon" /></li> */}
          </ul>
        </nav>
      </header>
 
      <section className='h-[400px]'> 
        <img
          src={"/img/banner.jpg"}
          alt="Banner"
          className="w-full border h-full object-cover"
          style={{
            objectPosition:"10% 35%",
          }}
        />
      </section>
 
      <section>
        <nav className="flex h-14 bg-[#222]">
            <a href="#Hardwere" className="underline flex items-center justify-center flex-grow">Hardwere</a>
            <a href="#promoção" className="underline flex items-center justify-center flex-grow">promoção</a>
            <a href="#notebooks" className="underline flex items-center justify-center flex-grow">notebooks</a>
            <a href="#atendimento" className="underline flex items-center justify-center flex-grow">atendimento</a>
        </nav>
      </section>

      <section className="product-cards">
        <ul className="cards-container flex items-center justify-around">
          <MongoDBproducts />
        </ul>
      </section>
    </div>
  );
}