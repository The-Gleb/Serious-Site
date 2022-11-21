import './SortBlock.css'

function SortBlock() {



	return (
		<div className="sort-block">
			<div>Сортировать по:</div>
			<div className="sort-criteria">Популярности</div>
			<div className="sort-criteria">Рейтингу</div>
			<div className="sort-criteria">Цене</div>
			<div className="sort-criteria">Скидке</div>
			<div className="sort-criteria">Обновлению</div>
		</div>
	)
}

export default SortBlock