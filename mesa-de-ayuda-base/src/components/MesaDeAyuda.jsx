import { useState, useEffect } from 'react'
import Ticket from './Ticket'
import { TICKETS_INICIALES } from '../data/tickets'

function MesaDeAyuda() {
  const [tickets, setTickets] = useState(TICKETS_INICIALES)

  // R2 · Estado del formulario: título, prioridad y mensaje de error.
  // R4 · Estado del filtro: prioridad seleccionada ('Todas' al inicio).

  // R6 · useEffect con arreglo de dependencias [tickets].

  // R2 · function agregar() — valida el título y añade el ticket nuevo.

  // R3 · function avanzar(id) — recorre Abierto → En proceso → Cerrado sin mutar.

  // R4 · const visibles = ... tickets filtrados por prioridad.
  // R5 · const abiertos / enProceso / cerrados — calculados, NO guardados en estado.

  return (
    <div>
      <h1 className="h3 mb-1">Mesa de ayuda</h1>
      <p className="text-muted small mb-4">Soporte Técnico · Universidad Técnica Latinoamericana</p>

      {/* R2 · Formulario: input de título, select de prioridad, botón Agregar y mensaje de error */}

      {/* R4 · Filtro: select de prioridad con la opción «Todas» */}

      <ul className="list-group mb-3">
        {/* R1 · Recorra la lista visible con .map() y dibuje un <Ticket /> por cada elemento.
            Recuerde la prop key y la prop onAvanzar. */}
      </ul>

      {/* R5 · Resumen con los tres contadores */}
    </div>
  )
}

export default MesaDeAyuda
