import "./style.css"
import { createFooter } from "./components/Footer/Footer";
import { createHeader } from "./components/Header/Header";
import { createDashboard } from "./pages/Dashboard/Dashboard";
import { createLogin } from "./pages/Login/Login";
import { createPokeApi } from "./pages/PokeApi/PokeApi";
import { whakaTopo } from "./pages/Whak-a-Topo/WhakaTopo";

export const createContent = (element) => {
  switch (element) {
    case undefined:
      localStorage.getItem("user") ? createDashboard() : createLogin();
      break;
    case "dashboard":
      createDashboard();
      break;
    case "PokeAPI":
      createPokeApi();
      break;
    case "Whaka-a-Topo":
      whakaTopo();
      break;
  }
};

createHeader();
createContent(undefined);
