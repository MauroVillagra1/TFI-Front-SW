import { useState } from "react";

export default function UrgenciasForm({ onSubmit }) {
  const [form, setForm] = useState({
    informe: "",
    nivel: "",
    temperatura: "",
    frecuenciaCardiaca: "",
    frecuenciaRespiratoria: "",
    sistolica: "",
    diastolica: "",
    enfermera: "",
  });

  const niveles = [
    "Crítica - Rojo",
    "Emergencia - Naranja",
    "Urgencia - Amarillo",
    "Urgencia Menor - Verde",
    "Sin Urgencia - Azul",
  ];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={submit} className="form-modern">
      <input name="informe" placeholder="Informe" onChange={handleChange} required />

      <select name="nivel" onChange={handleChange} required>
        <option value="">Nivel de emergencia</option>
        {niveles.map((n) => (
          <option key={n}>{n}</option>
        ))}
      </select>

      <div className="grid-2">
        <input name="temperatura" type="number" placeholder="Temperatura °C" onChange={handleChange} />
        <input name="frecuenciaCardiaca" type="number" placeholder="Frecuencia cardíaca" onChange={handleChange} required />
      </div>

      <div className="grid-2">
        <input name="frecuenciaRespiratoria" type="number" placeholder="Respiración" onChange={handleChange} required />
        <input name="enfermera" placeholder="Enfermera" onChange={handleChange} required />
      </div>

      <div className="grid-2">
        <input name="sistolica" type="number" placeholder="Sistólica" onChange={handleChange} required />
        <input name="diastolica" type="number" placeholder="Diastólica" onChange={handleChange} required />
      </div>

      <button type="submit" className="btn-modern">Registrar paciente</button>
    </form>
  );
}
