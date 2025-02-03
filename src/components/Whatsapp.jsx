/* eslint-disable react/prop-types */
import '../styling/interface.css'
import userImage from '../assets/images/UserIcon (1).png'
import userImage2 from '../assets/images/UserIcon (2).png'
import userImage3 from '../assets/images/UserIcon (3).png'
import userImage4 from '../assets/images/UserIcon (4).png'
import userImage5 from '../assets/images/UserIcon (5).png'
import { useState } from 'react'
import camera from '../assets/images/camera (1).svg'
import menuIcon from '../assets/images/ellipsis-v (1).svg'
import archive from '../assets/images/archive.svg'
import newChatIcon from '../assets/images/comment-add.svg'



export function Headbar({section}){
  const header = document.getElementById('headbar-nav')
  window.addEventListener('scroll', ()=>{
    if (window.scrollY > 0) {
      header.style.boxShadow = '0 4px 6px rgba(8, 8, 8, 0.89)';
    } else{
      header.style.boxShadow = 'none'
    }
  })
  
  const [MenuBtn, setMenuBtn] = useState(false)

  const toggleMenu = () =>{
    setMenuBtn(!MenuBtn)
  }


 return(
  <div id='headbar-nav'>
      <div style={{fontSize: '35px'}}>{section}</div>
      <div id="headbarIcons">
            <label htmlFor="camera-input">
                      <img src={camera} className='svg' alt="new" />
                    </label>
                    <input id='camera-input' type="file" accept='image/*' capture='camera' style={{display: 'none'}}/>
         <div onClick={toggleMenu}>
          <img src={menuIcon} className='svg' alt="camera" />

                <div style={{display: MenuBtn ? 'block' : 'none'}} className='menu-popUp'>
                <ul>
                  <li>New group</li>
                  <li>New broadcast</li>
                  <li>Linked devices</li>
                  <li>Starred messages</li>
                  <li>Settings</li>
                </ul>
              </div>
         </div>
         {/* <MenuBar icon={iconn}/> */}
      </div>

  </div>
 )
}

export function Chats({profileUrl, contactName, time = "7:00am", unread = '2', children}){
 return(
  <div className='directMessages'>
    
    <div className="messages">
       <img src={profileUrl} id='profilePic' alt="user" />
       <div className='details'>
         <div className='nameTimeFlexContainer'>
          <div>{contactName}</div>
          <div>{time}</div>
          </div>

         <div className='nameTimeFlexContainer'>
            <div>{children}</div>
            <div className="unread">{unread}</div>
          </div>


       </div>
    </div>

  </div>
 )
}

export default function Whatsapp(){

 return(
  <div id='userInterface'>

    <Headbar section={'Whatsapp'}/>
    <input type="text" placeholder='Ask Meta AI or Search' id='searchChat'/>
    <div id='archive'><img src={archive} className='svg' alt="archive" />Archived</div>
    <Chats  profileUrl={userImage} contactName={'Querida'} unread='5'>
     <span>Are you home yet?</span>
    </Chats>
    <Chats  profileUrl={userImage2} contactName={'David Adeleke'}>
     <span>We Rise By Lifting Others</span>
    </Chats>
    <Chats  profileUrl={userImage3} contactName={'Ayo Balogun'} unread='1'>
     <span>A piece of my heart</span>
    </Chats>
    <Chats  profileUrl={userImage4} contactName={'Damini Ogulu'} unread='10'>
     <span>Make men taste this cake nah.</span>
    </Chats>
    <Chats  profileUrl={userImage5} contactName={'Daniel Anidugbe'}>
     <span>This is Kiss Daniel</span>
    </Chats>
    <Chats  profileUrl={userImage} contactName={'Steve Curry'} unread='4'>
     <span>Close to being the Greatest Of All TImes</span>
    </Chats>
    <Chats  profileUrl={userImage2} contactName={'Divine Ikubo'}>
     <span>Heyyo, Remmy Boy</span>
    </Chats>
    <Chats  profileUrl={userImage3} contactName={'Teniola Apata'} unread='3'>
     <span>I just wanna be a Billionaire</span>
    </Chats>
    <Chats  profileUrl={userImage4} contactName={'Tiwatola Savage'} unread='4'>
     <span>Life is Good</span>
    </Chats>
    <Chats  profileUrl={userImage5} contactName={'Olamide Adedeji'}>
     <span>Carpe Diem, Eyan Mayweather</span>
    </Chats>
    <Chats  profileUrl={userImage} contactName={'Folarin Falana'} unread='24'>
     <span>Musician with AMVCA award</span>
    </Chats>
    <Chats  profileUrl={userImage2} contactName={'Daniel Benson'} unread='1'>
     <span>The name is BUJU BNXN</span>
    </Chats>

    <div className='addNewIcon text'>
      <img src={newChatIcon} className='FooterSvg' alt="new" />
    </div>

  </div>
 )

}