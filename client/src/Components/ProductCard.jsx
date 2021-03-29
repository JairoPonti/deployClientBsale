import React from 'react';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PropTypes from 'prop-types'


function ProductCard({img, title, price, discount}) {

	return (
		<div className="card z-depth-2">
			<div >
				<div className="card-image waves-block waves-light center-align" >
					<img src={img} alt="" className="activator center-align" />
				</div>
			</div>
			<div style={{display:"flex", marginRigth: 300, flexWrap:"nowrap"}}>
			<div className="card-content grey-text">
				<p className="card-title truncate">{title}</p>
			</div>
			</div>
			
			
			<br/>
			<div style={{ display: "flex", justifyContent: "flex-end", paddingRight:25, marginTop:-170}}>
			<AddShoppingCartIcon fontSize="large" color="inherit"/>
			</div>
			<div>
				<h6 style={{textAlign:"center", marginTop: 170}}>${price} </h6>
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