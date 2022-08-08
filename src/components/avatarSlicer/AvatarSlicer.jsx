import React from 'react'
import Avatar from '../avatar/Avatar'

const AvatarSlicer = ({ dataUsers, active, changeActive }) => {
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
      {dataUsers.map((user, index, arr) => {
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

        if (
          index < active - (viewRange + 1) ||
          index > viewRange + 1 + active
        ) {
          return null
        }

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
