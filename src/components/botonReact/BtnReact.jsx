import estilos from './BtnReact.module.css'

const Menu = {
  items: [
    { id: 1, nombre: 'Inicio', url: '/' },
    { id: 2, nombre: 'Acerca', url: '/acerca' },
    { id: 3, nombre: 'Servicios', url: '/servicios' },
    { id: 4, nombre: 'Contacto', url: '/contacto' }
  ]
}

export default function BtnReact() {

  return (
    <main className={estilos.main}>
      {
        Menu.items.map(item => (
          <a
            className={estilos.a}
            key={item.id}
            href={item.url}
          >
            {item.nombre}
          </a>
        ))
      }
    </main>
  )
}