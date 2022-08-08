import React from 'react'

const Avatar = ({AvatarUrl,name,active=false,scale}) => {
  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
      <img src={AvatarUrl} alt="#" style={active ? {borderRadius:40,width:`${100*scale}px`,height:`${100*scale}px`}: {borderRadius:40,width:`${100*scale}px`,height:`${100*scale}px`}}/>
      <p>{name}</p>
    </div>
  )
}

export default Avatar
