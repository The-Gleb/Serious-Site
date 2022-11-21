import './App.css'
import MainPage from '../MainPageFolder/MainPage/MainPage';
import { useState } from 'react';
import CatalogPage from '../CatalogFolder/CatalogPage/CatalogPage';

function App() {


  const mainPage = (
    <MainPage openCatalogPage={openCatalogPage}/>
  )


const [showPage, setShowPage] = useState(mainPage)

function openCatalogPage(section, subsection) {
  setShowPage(
    <CatalogPage section={section}
                 subsection={subsection}/>
  )

  // setSection(section)
  // setSubsection(subsection)
  // console.log(section)
  // console.log(subsection)
}

  return (
    <div className="App">
      {showPage}
    </div>
  );
}

export default App;
