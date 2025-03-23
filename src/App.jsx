import MatrixGrid from "./components/MatrixGrid/MatrixGrid";
import Heading from "./components/Heading/Heading";
import AllEvents from "./components/Events/AllEvents";
import DetailsCard from "./components/Details/DetailsCard";
// import QRWithLogo from "./components/QR/QRCodeGenerator";
import CursorParticles from "./components/CursorPaticles";

function App() {
  return (
    <MatrixGrid>
      <CursorParticles />
      <Heading />
      <AllEvents />
      <DetailsCard />
      {/* <QRWithLogo /> */}
    </MatrixGrid>
  );
}

export default App;
