import React from 'react';
import './ProductCard.css';

const ProductCard = () => {
	return (
		<div className="product-card">
			<picture className="image">
				<source
					media="(max-width: 600px)"
					srcSet="imgs/image-product-mobile.jpg"
				/>
				<img src="imgs/image-product-desktop.jpg" alt="Flowers"></img>
			</picture>
			<div className="body-container">
				<div className="body">
					<p className="category">Perfume</p>
					<h5 className="title">Gabrielle Essence Eau De Parfum</h5>
					<p className="description">
						A floral, solar and voluptuous interpretation composed by Olivier
						Polge, Perfumer-Creator for the House of CHANEL
					</p>
					<div className="price-container">
						<span className="price">$149.99</span>
						<span className="discounted-price">$169.99</span>
					</div>
					<div className="button-container">
						<button className="button">
							<img src="svgs/icon-cart.svg" alt="Cart Icon" />
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
