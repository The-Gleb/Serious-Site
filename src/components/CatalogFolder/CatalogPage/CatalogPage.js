import './CatalogPage.css'
import {useState} from "react"
import Header from '../../MainPageFolder/Header/Header'
import WayToPage from '../WayToPage/WayToPage'
import PageName from '../PageName/PageName'
import SortBlock from '../SortBlock/SortBlock'
import FilterBlock from '../FilterBlock/FilterBlock'
import ProductContainer from '../ProductsContainer/ProductContainer'
import ProductInfo from '../../ProductsInfo/ProductsInfo'

function CatalogPage(props) {




	return (
		<div className="catalog-page">
			<Header/>
			<WayToPage section={props.section}
					   subsection={props.subsection}
					   />
			<PageName section={props.section}
					  subsection={props.subsection}
					  />
			<SortBlock/>
			<div className="filter-products_container">
			<FilterBlock/>
			<ProductContainer section={props.section}
							  subsection={props.subsection}
							  />
			</div>
		</div>
	)
}
export default CatalogPage