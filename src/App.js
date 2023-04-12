import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import SubscribeSection from './components/SubscribeSection/SubscribeSection';
import { Route, Routes } from "react-router-dom";
import CountriesSection from "./components/Main/CountriesSection/CountriesSection";
import TurkeyHotelsSection from './components/Main/CountriesSection/TurkeyHotelsPage/TurkeyHotelsPage';
import EgyptHotelsSection from "./components/Main/CountriesSection/EgyptHotelsPage/EgyptHotelsPage";
import OAEHotelsSection from "./components/Main/CountriesSection/OAEHotelsPage/OAEHotelsPage";
import FeedbackSectionContainer from "./components/FeedbackSection/FeedbackSectionContainer";
import MainSection from './components/MainSection/MainSection';
import CountryDirectionSection from "./components/MainSection/ToursTemplateSection/CountryDirectionSectionContainer/CountryDirectionSection";
import ExactHotelComponent from './components/Main/CountriesSection/HotelsTemplateElements/ExactHotelComponent';
import Preloader from './components/Preloader/Preloader';
import Portal from './components/Portal/Portal';
import { useSelector } from 'react-redux';

function App() {
  const modal = useSelector(state => state.modalVar)

  return (
    <div className='app'>
      <Portal>
        <div className=''>{modal.name === "openImageModal" && modal.children}</div>
        <Preloader />
      </Portal>
      {/* <Preloader /> */}
      <Header />
      <Routes>
        <Route path="/react-single-page/" element={
          <>
            <Main />
            <MainSection />
            <FeedbackSectionContainer />
          </>
        } />
        <Route path="/" element={
          <>
            <Main />
            <MainSection />
            <FeedbackSectionContainer />
          </>
        } />
        <Route path="/react-single-page/:direction" element=
          {<CountryDirectionSection />} />
        <Route exact path="countries/" element={<CountriesSection />}>
          <Route path="turkey/" element={<TurkeyHotelsSection />} />
          <Route path="egypt/" element={<EgyptHotelsSection />} />
          <Route path="OAE/" element={<OAEHotelsSection />} />
        </Route>
        <Route path="countries/:countryName/:id" element={<ExactHotelComponent />} />
      </Routes>
      <SubscribeSection />
      <Footer />
    </div>
  )
}

export default App;






