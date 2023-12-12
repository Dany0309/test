import "./global.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Auction from "../components/Auction/Auction";
import AnotherAuction from "../components/AnotherAuction/AnotherAuction";
import NewStickers from "../components/NewStickers/NewStickers";
import Mailing from "../components/Mailing/Mailing";
import BeAuthor from "../components/BeAuthor/BeAuthor";
import TopSales from "../components/TopSales/TopSales";
import GettingIntoTop from "../components/GettingIntoTop/GettingIntoTop";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <Auction />
        <AnotherAuction />
        <NewStickers />
        <Mailing />
        <BeAuthor />
        <TopSales />
        <GettingIntoTop />
        <Footer />
        <Contact />
      </main>
    </div>
  );
}

export default App;
