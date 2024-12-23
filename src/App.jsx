import "./App.css";
import Charts from "./components/Charts/Charts";
import CustomizedNavBar from "./components/CustomizedNavBar/CustomizedNavBar";
import PriceOption from "./components/priceOption/priceOption";



function App() {
  return (
    <>

  <CustomizedNavBar></CustomizedNavBar>
  <PriceOption></PriceOption>
 <Charts></Charts>
      
    </>
  );
}

export default App;
