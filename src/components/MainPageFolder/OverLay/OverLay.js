import './OverLay.css'

function OverLay(props) {

const showClass = 'over-lay'
const hideClass = 'none'

	return (
		<div className={props.overLay ? showClass : hideClass}
			 onClick={props.hideCatalogFilters}></div>
	)
}

export default OverLay