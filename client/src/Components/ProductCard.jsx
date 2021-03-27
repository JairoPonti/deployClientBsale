import React from 'react';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PropTypes from 'prop-types'


function ProductCard({img, title, price, discount}) {

	return (
		<div className="card z-depth-2">
			<div className="row" >
				<div className="card-image waves-block waves-light center-align" >
					<img src={img} alt="" className="activator center-align" />
				</div>
			</div>
			<div className="card-content grey-text">
				<p className="card-title truncate">{title}</p>
			</div>
			{/* <AddShoppingCartIcon style={{display:"flex", justifyContent: "end"}}/> */}
			<br/>
			<div>
				<h6 style={{textAlign:"center"}}>${price} </h6>
				<h6 style={{textAlign:"center", color:"red"}}>Discount: {discount} </h6>
				</div>
		</div>
	)
}

ProductCard.propTypes= {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	discount: PropTypes.number.isRequired,
}

export default ProductCard