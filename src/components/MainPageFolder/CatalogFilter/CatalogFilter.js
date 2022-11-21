import './CatalogFilter.css'
import ProductInfo from '../../ProductsInfo/ProductsInfo';
import { useState } from 'react';



function CatalogFilter(props) {
	const show = `catalog-filter`;
	const hide = `hide_catalog-filter`
	
	const DATA = ProductInfo.catalog.filters.map(item => {
		function NewElem(props)  {
			return (
				<li className="catalog-filter__list_item"
					name={props.name}
					onClick={() => openSection(props.name)}
					pressed='false'
				>
				{props.name}
				</li>
			)
		}
		return (
			<NewElem name={item.name}
					 key={item.name}/>
		)
	})
	const [nameList, setNameList] = useState(DATA)
	const [chosenSections, setChosenSections] = useState()
	const [subsection, setSubsection] = useState()

	function openCatalogPage(section, subsection) {
		props.openCatalogPage(section, subsection)
	}

	function openSection(id) {
		const section = id
		
		setChosenSections('')
		const biggerName = ProductInfo.catalog.filters.map(item => {
			function NewElem(props)  {
				const big = 'bigger_font';
				const regular = 'catalog-filter__list_item';
				const name1 = item.name;

				

				function Section(props) {
					return (
						<li className={name1===id ? big : regular}
							name={props.name}
							onClick={() => openSection(props.name)}
						>
						{item.name}
						</li>
					)
				}

				return (
					<Section key={item.name}/>
				)
				
			}
			return (
				<NewElem name={item.name}
						 key={item.name}/>
			)
		})

		setNameList(biggerName);


		const subSectionNames = ProductInfo.catalog.filters.filter(item => id == item.name)
		[0].sections.map(item => {

		function Subsection() {
			return (
				<li className="catalog-filter__sub-list_item"
					name={item.name}
					onClick={() => openCatalogPage(section, item.name)}
					key={item.name}
				>
				{item.name}
				</li>
			)
		}
		
		return (
			<Subsection key={item.name}/>
		)
		
	})
setChosenSections(subSectionNames)	// const namesArr = section.sections.forEach(item => {
	

	}

	return (
		<div 
			 style={{top: 0}}
			 className={props.catalogFilters ? show : hide}>
			<div className="catalog-filter__icon">
				<img src="./images/CatalogFilter/catalogMenuIcon.svg" alt="" />
			</div>
			{/* <ul className="catalog-filter__list">
				{nameList}
			</ul> */}
			
			<div className='catalog-filter__list-container'>
			<ul className="catalog-filter__list">
				{nameList}
			</ul>
			<ul className="catalog-filter__sub-list">
				{chosenSections}
			</ul>
			</div>
		</div>
	)
}

export default CatalogFilter