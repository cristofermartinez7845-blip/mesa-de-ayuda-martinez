# Mesa de ayuda — Proyecto base

Punto de partida del **examen parcial práctico** de la segunda calificación.
102HAD1 · Herramientas Avanzadas para el Desarrollo de Aplicaciones · Ciclo II-2026

## 1. Puesta en marcha

Abra la terminal **en la carpeta que contiene `package.json`**. Si al extraer el zip
quedó una carpeta dentro de otra con el mismo nombre, entre a la interior.

```bash
npm install
npm run dev
```

Abra la dirección que imprime la terminal (normalmente `http://localhost:5173`).
Debe ver el título «Mesa de ayuda» y una lista vacía.

## 2. Primer push — marca el inicio de sus 90 minutos

Inicie a más tardar a las 18:30. Su último push debe llegar dentro de los 90 minutos
siguientes y antes de las 20:00.

En **otra** terminal, dentro de la misma carpeta:

```bash
git init
git add .
git commit -m "feat: punto de partida del examen"
git branch -M main
```

Cree en GitHub un repositorio **público** y **vacío** llamado `mesa-de-ayuda-apellido`
(sin README, sin .gitignore y sin licencia) y publique:

```bash
git remote add origin https://github.com/<su-usuario>/mesa-de-ayuda-apellido.git
git push -u origin main
```

## 3. Qué trae ya resuelto

| Archivo | Estado |
|---|---|
| `src/data/tickets.js` | Los cuatro tickets iniciales. **No lo modifique.** |
| `src/components/Ticket.jsx` | Componente resuelto. **No lo modifique.** |
| `src/index.css` | Estilos listos. No necesita escribir CSS. |
| `index.html` | Bootstrap 5 ya enlazado. |
| `src/components/MesaDeAyuda.jsx` | **Aquí trabaja usted.** Los comentarios marcan dónde va cada requisito. |

## 4. Reglas de trabajo

- **Solo lo visto en clase:** `useState`, `useEffect`, `.map()`, `.filter()`, spread, `&&`,
  ternario y clases de Bootstrap. Lo que quede fuera deberá justificarlo en la verificación verbal.
- **Un commit por requisito**, con el número al inicio del mensaje (`R3: formulario controlado`),
  publicado con `git push`.
- **Todas las capturas del PDF deben mostrar la hora del sistema.**
