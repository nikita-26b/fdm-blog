import "./App.css";
import Slider from "./components/Slider";
import Category from "./components/Category";
import Header from "./components/Header";
import RecentPost from "./components/RecentPost";
import BestSelling from "./components/BestSelling";
import EditorsChoice from "./components/EditorsChoice";
import MensHealth from "./components/MensHealth";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Category />
      <RecentPost />
      {/* <BestSelling /> */}
      <EditorsChoice />
      <MensHealth />
      <Footer />
    </div>
  );
}

export default App;
