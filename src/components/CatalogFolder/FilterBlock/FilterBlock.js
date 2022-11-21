import './FilterBlock.css'
import {useState} from "react"

function FilterBlock() {

	const minmax = {
		minValue: 0,
		maxValue: 10000
	  };
	
	  const [price, setPrice] = useState(0);
	 
	function handleChangeRange(e) {
	const numbers = e.target.value;
	setPrice(numbers);
	//console.log("price " + numbers);
	};


	return (
		<div className="filter-block">
			<div>Ценаб б.р</div>
			<div className="slidecontainer">
				<input
					className='slider'
					type="range"
					min={minmax.minValue}
					max={minmax.maxValue}
					onChange={handleChangeRange}
					value={price}
				/>			
			</div>
			<div className="size-flter">
				Размер
			</div>
			<div className="color-filter">
				Цвета
			</div>
		</div>
	)
}

export default FilterBlock