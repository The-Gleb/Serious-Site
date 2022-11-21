import './ProductContainer.css'
import ProductItem from '../ProductItem/ProductItem'
import { useState } from 'react'
import ProductInfo from '../../ProductsInfo/ProductsInfo'

function ProductContainer(props) {
	
	// const [products, setProducts] = useState()

	const productsList = ProductInfo.catalog.filters.filter(filter => filter.name == props.section)
	[0].sections.filter(section => section.name == props.subsection)[0]

	const products = productsList.products.map(product => {
		return (
			<ProductItem key={product.name}
						 name={product.name}
						 image={product.imgSrc}
						 price={product.price}
						 description={product.description}
						 />
		)
	})

	console.log(products)

	return (
		<div className="product-container">
			{products}
		</div>
	)
}

export default ProductContainer