
import { Data } from "./context/Contex";
import Languages from "./components/Languages"
import Pages from "./components/Pages"
function App() {
  return (
    <>
      <Data>
        <div className="Flags">
        <Languages/>
        </div>
    <div className="contents">
    <Pages/>
    </div>
      </Data>
    </>
  );
}

export default App;
