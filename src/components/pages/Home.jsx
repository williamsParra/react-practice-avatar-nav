import React, { useState } from 'react'
import AvatarSlicer from '../avatarSlicer/AvatarSlicer'

const Home = () => {
    
    const ChangeActiveUser = (newValue)=>{
        if(newValue < 0){
            newValue = 0;
        }
        if(newValue > listUser.length-1){
           
            newValue = listUser.length-1;
        }
        setActiveIndex(newValue)
    }
  const [listUser, serListUser] = useState([
    {
      url: 'https://fakeinfo.net/static/userface_image/male/male1.png',
      name: 'userschool'
    },
    {
      url: 'https://fakeinfo.net/static/userface_image/male/male2.png',
      name: 'stentorianuser'
    },
    {
      url: 'https://fakeinfo.net/static/userface_image/male/male3.png',
      name: 'brustyuser'
    },
    {
      url: 'https://fakeinfo.net/static/userface_image/male/male4.png',
      name: 'usersteep'
    },
    {
      url: 'https://fakeinfo.net/static/userface_image/male/male5.png',
      name: 'blackHero'
    },
    {
      url: 'https://fakeinfo.net/static/userface_image/male/male7.png',
      name: 'whiteHero'
    },
    {
      url: 'https://fakeinfo.net/static/userface_image/male/male9.png',
      name: 'grayHero'
    },
    {
      url: 'https://fakeinfo.net/static/userface_image/male/male10.png',
      name: 'grayHero'
    },
    {
      url: 'https://fakeinfo.net/static/userface_image/male/male11.png',
      name: 'grayHero'
    },
    {
      url: 'https://fakeinfo.net/static/userface_image/male/male12.png',
      name: 'grayHero'
    }
    
  ]);

  const [activeIndex,setActiveIndex] = useState(Math.round((listUser.length / 2)-1));
  return (
    <div>
      <AvatarSlicer dataUsers={listUser} active={activeIndex} changeActive={ChangeActiveUser}/>
    </div>
  )
}

export default Home
