import {useState} from "react"
import './MainPage.css';
import Header from '../Header/Header';
import LandingBlock from '../LandingBlock/LandingBock';
import CatalogFilter from '../CatalogFilter/CatalogFilter';
import OverLay from "../OverLay/OverLay";

function MainPage(props) {
	const emptyDiv = <div></div>
	const [catalogFilters, setCatalogFilters] = useState(false)
	const [overLay, setOverLay] = useState(false)


	function showCatalogFilters() {
		setCatalogFilters(true)
		setOverLay(true)
	}

	function hideCatalogFilters() {
		setCatalogFilters(false)
		setOverLay(false)
	}



  return (
    <div className="MainPage">
      <Header/>
      <LandingBlock showCatalogFilters={showCatalogFilters}
	  				// catalogFilters={catalogFilters}
					/>
	  <CatalogFilter catalogFilters={catalogFilters}
	  				 openCatalogPage={props.openCatalogPage}
					 />
	  <OverLay overLay={overLay}
	  		   hideCatalogFilters={hideCatalogFilters}/>
    </div>
  );
}

export default MainPage;