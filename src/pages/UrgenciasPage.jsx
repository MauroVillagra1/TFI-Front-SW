import UrgenciasForm from "../components/UrgenciasForm";
import UrgenciasTable from "../components/UrgenciasTable";
import { useState } from "react";

export default function UrgenciasPage() {
  const [pacientes, setPacientes] = useState([]);

  const agregarPaciente = (data) => {
    setPacientes([...pacientes, data]);
  };

  return (
    <div className="p-6 w-full flex flex-col gap-6">
      <UrgenciasForm onSubmit={agregarPaciente} />
      <UrgenciasTable data={pacientes} />
    </div>
  );
}
