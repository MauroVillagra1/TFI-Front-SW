export default function UrgenciasTable({ data }) {
  if (data.length === 0)
    return <p className="empty">No hay pacientes registrados.</p>;

  return (
    <table className="table-modern">
      <thead>
        <tr>
          <th>Informe</th>
          <th>Nivel</th>
          <th>Temp</th>
          <th>FC</th>
          <th>FR</th>
          <th>TA</th>
          <th>Enfermera</th>
        </tr>
      </thead>

      <tbody>
        {data.map((p, i) => (
          <tr key={i}>
            <td>{p.informe}</td>
            <td>{p.nivel}</td>
            <td>{p.temperatura}</td>
            <td>{p.frecuenciaCardiaca}</td>
            <td>{p.frecuenciaRespiratoria}</td>
            <td>{p.sistolica}/{p.diastolica}</td>
            <td>{p.enfermera}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
