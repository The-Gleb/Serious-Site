import './WayToPage.css'

function WayToPage(props) {

const wayToPage = `Главная/${props.section}/`

	return (
		<div className="way-to-page">
			{wayToPage}
			<span>{props.subsection}</span>
		</div>
	)
}

export default WayToPage