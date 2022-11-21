import './ProductItem.css'

function ProductItem(props) {


	
	return (
		<div className="product-item">
			<div className="photo">
				<img src={props.image} alt=""/>
			</div>

			<div className="price">{props.price}</div>
			<div className="name">{props.name}</div>
			<div className="btns">
				<div className="like-btn">
					<img src="./images/header/clarity_heart-line.svg" alt="" srcset="" />
				</div>
				<div className="shopping-bag-btn">
					<img src="./images/header/clarity_shopping-bag-line.svg" alt="" srcset="" />
				</div>
			</div>
			<div className="more-btn">Подробнее</div>
			<div className="rating">
				<div className="star">
					<img src="./images/ProductItem/clarity_favorite-solid.svg"  />
				</div>
				<div className="star">
					<img src="./images/ProductItem/clarity_favorite-solid.svg"  />
				</div>
				<div className="star">
					<img src="./images/ProductItem/clarity_favorite-solid.svg"  />
				</div>
				<div className="star">
					<img src="./images/ProductItem/clarity_favorite-solid.svg"  />
				</div>
				<div className="star">
					<img src="./images/ProductItem/clarity_favorite-solid.svg"  />
				</div>
			</div>
		</div>
	)
}

export default ProductItem