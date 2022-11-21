import './Header.css'

function Header() {



	return (
		<div className="header">
			<div className="header__burger_icon">
				<img src="./images/header/clarity_menu-line.svg" alt=""/>
			</div>
			<div className="header__right-part">
				<form className="header__search">
					<div className="search_icon"><img src="./images/header/clarity_search-line.svg" alt=""/></div>
					<div className="input_container">
						<input className="search_input" placeholder='Поиск'></input>
					</div>
				</form>
				<div className="header__btn_box">
					<div><img src="./images/header/clarity_avatar-line.svg" alt=""/></div>
					<div><img src="./images/header/clarity_heart-line.svg" alt=""/></div>
					<div><img src="./images/header/clarity_shopping-bag-line.svg" alt=""/></div>
				</div>
			</div>
		</div>
	)
}

export default Header