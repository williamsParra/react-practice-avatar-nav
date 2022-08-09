import React from 'react'
import Avatar from '../avatar/Avatar'

//dataUsers
//lista de objetos con datos de usuario (avatar y nombre)
//active == indice de usuario activo (para aplicar css)
//changeActive = funcion para los botones de desplazamiento. se utiliza para cambiar el avatar activo

const AvatarSlicer = ({ dataUsers, active, changeActive }) => {
  //rango de avatares con css medio
  const viewRange = 1
  return (
    <div
      style={{
        display: 'flex',
        margin: '20px',
        padding:'20px',
        justifyContent: 'space-around',
        border:"1px solid black"
      }}
    >
      <button
        onClick={() => {
          changeActive(active - 1)
        }}
        style={{borderRadius:40,marginTop:"80px",marginBottom:"80px",backgroundColor:"#43b8f9",color:"#fff"}}
      >
        atras
      </button>
      {
        // mapear lista de usuario
      }
      {dataUsers.map((user, index, arr) => {
        //aplicar css a avatar activo
        if (index === active) {
          return (
            <Avatar
              key={`keyN${index}`}
              AvatarUrl={user.url}
              name={user.name}
              active={true}
              scale={1.5}
            />
          )
        }
        // compobar si el item esta fuera de rango. de ser asi , no se dibujara
        if (
          index < active - (viewRange + 1) ||
          index > viewRange + 1 + active
        ) {
          return null
        }
        //si el item esta por debajo del rango . dibujarlo pero mas pequeño
        if (index < active - viewRange || index > viewRange + active) {
          return (
            <Avatar
              key={`keyN${index}`}
              AvatarUrl={user.url}
              name={user.name}
              scale={0.5}
            />
          )
        }

        return (
          <Avatar
            key={`keyN${index}`}
            AvatarUrl={user.url}
            name={user.name}
            scale={1}
          />
        )
      })}
      <button
      style={{borderRadius:40,marginTop:"80px",marginBottom:"80px",backgroundColor:"#43b8f9",color:"#fff"}}
        onClick={() => {
          changeActive(active + 1)
        }}
      >
        siguiente
      </button>
    </div>
  )
}

export default AvatarSlicer
