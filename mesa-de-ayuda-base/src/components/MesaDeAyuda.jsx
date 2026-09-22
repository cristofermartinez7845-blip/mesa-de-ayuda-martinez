import { useState, useEffect } from 'react'
import Ticket from './Ticket'
import { TICKETS_INICIALES } from '../data/tickets'

function MesaDeAyuda() {
  const [tickets, setTickets] = useState(TICKETS_INICIALES)

  // R2 · Estado del formulario: título, prioridad y mensaje de error.
  const [titulo, setTitulo] = useState('')
  const [prioridad, setPrioridad] = useState('Media')
  const [error, setError] = useState('')

  // R4 · Estado del filtro: prioridad seleccionada ('Todas' al inicio).
  const [filtro, setFiltro] = useState('Todas')

  // R6 · useEffect con arreglo de dependencias [tickets].
  useEffect(() => {
  console.log(`Hay ${tickets.length} tickets`)
}, [tickets])

  // R2 · function agregar() — valida el título y añade el ticket nuevo.
  function agregar() {
    if (titulo.length < 5) {
      setError('El título debe tener al menos cinco caracteres')
      return
    }
    setError('')
    const nuevo = {
      id: Date.now(),
      titulo,
      prioridad,
      estado: 'Abierto',
    }
    setTickets([...tickets, nuevo])
    setTitulo('')
  }

  // R3 · function avanzar(id) — recorre Abierto → En proceso → Cerrado sin mutar.
  function avanzar(id) {
  setTickets(
    tickets.map((t) => {
      if (t.id !== id) return t
      const siguiente =
        t.estado === 'Abierto' ? 'En proceso' : t.estado === 'En proceso' ? 'Cerrado' : 'Cerrado'
      return { ...t, estado: siguiente }
    })
  )
}

  // R4 · const visibles = ... tickets filtrados por prioridad.
  const visibles = filtro === 'Todas' ? tickets : tickets.filter((t) => t.prioridad === filtro)
  // R5 · const abiertos / enProceso / cerrados — calculados, NO guardados en estado.
  const abiertos = tickets.filter((t) => t.estado === 'Abierto').length
  const enProceso = tickets.filter((t) => t.estado === 'En proceso').length
  const cerrados = tickets.filter((t) => t.estado === 'Cerrado').length

  return (
    <div>
      <h1 className="h3 mb-1">Mesa de ayuda</h1>
      <p className="text-muted small mb-4">Soporte Técnico · Universidad Técnica Latinoamericana</p>

      {/* R2 · Formulario: input de título, select de prioridad, botón Agregar y mensaje de error */}
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Título del ticket"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <select
          className="form-select"
          style={{ maxWidth: 140 }}
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)}
        >
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
        <button className="btn btn-primary" onClick={agregar}>
          Agregar
        </button>
      </div>
      {error && <div className="text-danger small">{error}</div>}

      {/* R4 · Filtro: select de prioridad con la opción «Todas» */}
      <div className="d-flex align-items-center gap-2 mt-4 mb-2">
  <span>Filtrar por prioridad</span>
  <select
    className="form-select form-select-sm"
    style={{ maxWidth: 140 }}
    value={filtro}
    onChange={(e) => setFiltro(e.target.value)}
  >
    <option value="Todas">Todas</option>
    <option value="Alta">Alta</option>
    <option value="Media">Media</option>
    <option value="Baja">Baja</option>
  </select>
</div>

      <ul className="list-group mb-3">
        {visibles.map((t) => (
          <Ticket
            key={t.id}
            titulo={t.titulo}
            prioridad={t.prioridad}
            estado={t.estado}
            onAvanzar={() => avanzar(t.id)}
          />
        ))}
      </ul>

      {/* R5 · Resumen con los tres contadores */}
      <p className="text-muted small">Abiertos: <strong>{abiertos}</strong> · En proceso: <strong>{enProceso}</strong> · Cerrados: <strong>{cerrados}</strong></p>
    </div>
  )
}

export default MesaDeAyuda
