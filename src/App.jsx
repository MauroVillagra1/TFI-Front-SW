import { useState } from "react";
import "./App.css";
import UrgenciasForm from "./components/UrgenciasForm";
import UrgenciasTable from "./components/UrgenciasTable";

function App() {
  const [tab, setTab] = useState("form");
  const [pacientes, setPacientes] = useState([]);

  const agregarPaciente = (data) => {
    setPacientes([...pacientes, data]);
  };

  return (
    <div className="container">
      <h1 className="title">Módulo de Urgencias</h1>

      {/* ---- Tabs ---- */}
      <div className="tabs">
        <button
          className={tab === "form" ? "tab active" : "tab"}
          onClick={() => setTab("form")}
        >
          ➕ Ingreso
        </button>

        <button
          className={tab === "list" ? "tab active" : "tab"}
          onClick={() => setTab("list")}
        >
          📋 Pacientes
        </button>
      </div>

      {/* ---- Contenido ---- */}
      <div className="card-modern">
        {tab === "form" && <UrgenciasForm onSubmit={agregarPaciente} />}
        {tab === "list" && <UrgenciasTable data={pacientes} />}
      </div>
    </div>
  );
}

export default App;
