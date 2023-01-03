import { createDashboard } from "../../pages/Dashboard/Dashboard";
import "./Footer.css";

export const createFooter = () => {
  const footer = document.querySelector("footer");
  footer.innerHTML = `
    <div class= "footer">
        <button id="back">Back</button>
        <h3>Andrea Perez</h3>
        <h4>Neoland- Part Time</h4>
    </div>
    `;
    addFooterEvents();
};

const addFooterEvents = () => {
    const btnBack = document.querySelector("#back");
    btnBack.addEventListener("click", () => createDashboard());
}

