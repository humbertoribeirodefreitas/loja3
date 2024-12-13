import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './products';
import './product-detail.css';


function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="product-detail-container">
      <Link to="/home" className="back-button">← Voltar</Link>
      <div className="product-detail">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">{product.price}</p>
          <p className="description">{product.description}</p>
          <div className="details">
            <h3>Especificações:</h3>
            <ul>
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="actions">
            <button className="add-to-cart">Adicionar ao Carrinho</button>
            <button className="buy-now">Comprar Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
