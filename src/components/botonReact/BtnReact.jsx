import estilos from './BtnReact.module.css'
import { useEffect, useState } from 'react'

const Menu = {
  items: [
    { id: 1, nombre: 'Inicio', url: '/' },
    { id: 2, nombre: 'Acerca', url: '/acerca' },
    { id: 3, nombre: 'Servicios', url: '/servicios' },
    { id: 4, nombre: 'Contacto', url: '/contacto' }
  ]
}

export default function BtnReact() {
  const [currentUrl, setCurrentUrl] = useState('/')
  let david = ''

  useEffect(() => {
    const url2 = window.location.pathname
    setCurrentUrl(url2)
  }, [currentUrl])

  david = currentUrl

  return (
    <main className={estilos.main} >
      {
        Menu.items.map(item => (
          <a
            className={estilos.a}
            style={{ color: david === item.url ? 'blue' : 'black', backgroundColor: david === item.url ? 'yellow' : 'white' }}
            key={item.id}
            href={item.url}
          >
            {item.nombre}
          </a>
        ))
      }
    </main >
  )
}