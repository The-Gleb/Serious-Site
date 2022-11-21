import './LandingBlock.css'

function LandingBlock(props) {

const show = `landing-block__main_left`
const hide = `hide_landing-block__main_left`

	return (
		<div className="landing-block">
			<div className="landing-block__main">
				<div className={props.catalogFilters ? hide : show}>
					<div className="main_left__image">
						<img src="./images/landing_block/Rectangle22.jpg"/>
					</div>
					<div className="main_left__title">
						Добро пожаловать в <span>Cocteil</span>
					</div>
					<div className="main_left__text">
						Экономим Ваше время! <br />
						Предлагаем лучшие цены! <br />
						Доставляем в кратчайшие сроки!
					</div>
				</div>
				<div className="landing-block__main_right">
					<div className="main_right-image">
						<img src="./images\landing_block\Rectangle21.jpg"/>
					</div>
				</div>
			</div>
			<div className="catalog-btn"
				 onClick={props.showCatalogFilters}
				 >
				<div className="catalog-btn__text">
					Каталог
				</div>
				<div className="catalog-btn__arrow">
				</div>
			</div>
		</div>
	)
}

export default LandingBlock