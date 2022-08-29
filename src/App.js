import Header from './Component/Header';
import TopNav from './Component/TopNav';
import './App.css'
import Minmax from './Component/Minmax';
import Banner1 from './Component/Banner1';
import Banner2 from './Component/Banner';
import Specification from './Component/Specification';
import Explore from './Component/Explore';
import Footer from './Component/Footer';

function App() {

  return (
    <>
      <TopNav />
      <Header />
       <Minmax />
      <Explore />
      <Specification />
      <Banner1 />
      <Banner2 />
      <Footer />

    </>
  );
}

export default App;
