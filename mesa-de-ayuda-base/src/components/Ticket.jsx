// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE ENTREGADO RESUELTO. NO lo modifique.
//
// Recibe cuatro props: los tres datos del ticket y una función, onAvanzar,
// que ejecuta cuando se pulsa su botón. Es la misma idea de callback de la
// sesión 5: el componente no decide qué pasa al pulsar, solo avisa.
//
// Los tickets cerrados se muestran atenuados con la clase .cerrado (index.css).
// Su tarea es USARLO desde MesaDeAyuda.jsx (requisito R1).
// ─────────────────────────────────────────────────────────────────────────────

function Ticket({ titulo, prioridad, estado, onAvanzar }) {
  return (
    <li
      className={
        'list-group-item d-flex justify-content-between align-items-center ' +
        (estado === 'Cerrado' ? 'cerrado' : '')
      }
    >
      <span>
        <strong>{titulo}</strong>{' '}
        <span className="badge text-bg-secondary">{prioridad}</span>{' '}
        <span className="text-muted small">{estado}</span>
      </span>

      <button
        className="btn btn-sm btn-outline-primary"
        onClick={onAvanzar}
        disabled={estado === 'Cerrado'}
      >
        Avanzar
      </button>
    </li>
  )
}

export default Ticket
