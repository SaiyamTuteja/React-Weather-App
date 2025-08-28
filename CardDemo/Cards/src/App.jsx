import "./App.css";
import Card from "./components/Card";
import Saiyam from "./assets/Saiyam.jpg";
import Shikha from "./assets/shikha.jpg";
import Priyanshu from "./assets/Priyanshu.jpg";
function App() {
  return (
    <>
      <div className="cards-container">
        <Card name="Saiyam Tuteja" image={Saiyam} Desc="Devloper" />
        <Card name="Shikha Rajput" image={Shikha} Desc="Designer" />
        <Card
          name="Priyanshu Pundir"
          image={Priyanshu}
          Desc="Product Manager"
        />
      </div>
    </>
  );
}

export default App;
