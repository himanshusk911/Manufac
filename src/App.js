import { MantineProvider } from "@mantine/core";
import CropProduction from "./components/CropProduction";
import AverageYieldCultivation from "./components/AverageYieldCultivation";
import styles from "./styles/tableStyle.module.css";

function App() {
  /*We have to wrap our componets inside MantineComponent  ,if we want to use Mantine features*/
  //CropProduction component shows min and max crop per year
  //AverageYieldCultivation components show average yield and cultivation
  return (
    <div className={styles.App}>
      <MantineProvider>
        <CropProduction />
        <AverageYieldCultivation />
      </MantineProvider>
    </div>
  );
}

export default App;
