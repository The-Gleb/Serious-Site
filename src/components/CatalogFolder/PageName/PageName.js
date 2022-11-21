import './PageName.css'
import ProductInfo from '../../ProductsInfo/ProductsInfo'

function PageName(props) {

	const pageName = ProductInfo.catalog.filters.filter(filter => filter.name == props.section)
	[0].sections.filter(section => section.name == props.subsection)[0].page_title

	return (
		<div className="page-name">{pageName}</div>
	)
}

export default PageName