/* eslint-disable react/prop-types */
import '../styling/interface.css'
import userImage from '../assets/images/UserIcon (1).png'
import userImage2 from '../assets/images/UserIcon (2).png'
import userImage3 from '../assets/images/UserIcon (3).png'
import userImage4 from '../assets/images/UserIcon (4).png'
import userImage5 from '../assets/images/UserIcon (5).png'
import searchIcon from '../assets/images/search.svg'
import menuIcon from '../assets/images/ellipsis-v (1).svg'
import video from '../assets/images/video.svg'
import phonecall from '../assets/images/phone-alt.svg'
import incomingGreen from '../assets/images/arrow-down-left.svg'
import outgoingGreen from '../assets/images/arrow-up-right.svg'
import missedCall from '../assets/images/arrow-down-left (1).svg'
import { useState } from 'react'
import addCall from '../assets/images/calling.svg'

// export function MenuBar({icon}){

//   const [MenuBtn, setMenuBtn] = useState(false)

//   const toggleMenu = () =>{
//     setMenuBtn(!MenuBtn)
//   }

//   return(
//     <>
//         <div onClick={toggleMenu}>{icon}</div>

//          <div style={{display: MenuBtn ? 'block' : 'none'}} className='menu-popUp'>
//       <ul>
//         <li>Clear call log</li>
//         <li>Settings</li>
//       </ul>
//     </div> 


//     </>
//   )
// }

// export function HeadbarCalls({section, Headericon1}){
//   const header = document.getElementById('headbar-nav')
//   window.addEventListener('scroll', ()=>{
//     if (window.scrollY > 0) {
//       header.style.boxShadow = '0 4px 6px rgba(8, 8, 8, 0.89)';
//     } else{
//       header.style.boxShadow = 'none'
//     }
//   })
  

//  return(
//   <div id='headbar-nav'>
//       <div style={{fontSize: '35px'}}>{section}</div>
//       <div id="headbarIcons">
//          <div>{Headericon1}</div>
//          <MenuBar icon={'menu'} />
//       </div>

//   </div>
//  )
// }


export function HeadbarCalls({section}){
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
         <img src={searchIcon} className='svg' alt="camera" />
         <div onClick={toggleMenu}>
          <img src={menuIcon} className='svg' alt="menu" />

                <div style={{display: MenuBtn ? 'block' : 'none'}} className='menu-popUp'>
                <ul>
                  <li>Clear call log</li>
                  <li>Settings</li>
                </ul>
              </div>
         </div>
         {/* <MenuBar icon={iconn}/> */}
      </div>

  </div>
 )
}

export function RecentCallers({callerDp, callerName, time, callType, condition = missedCall }){
 return(
  <>
    <div id='call-list'>
      <div style={{display: 'flex', justifyContent: "space-between", gap: '1rem', alignItems: 'center'}}>
       <img src={callerDp} id='profilePic' alt="image" />
       <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        {callerName}
          <div style={{display: 'flex', gap: '0.3rem'}}>
            <img src={condition} className='svg' alt='con' />
            <div>{time}</div>
          </div>
        </div>
      </div>
      <img src={callType} alt="image" className='svg'/>
      
    </div>

  </>
 )
}

export default function CallHistory(){
 return(
  <div id='calls'>
   <HeadbarCalls section={'Calls'} Headericon1={'search'} Headericon2={'menu'}/>

   {/* <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem'}}> */}
      <div style={{fontSize: '25px', paddingLeft: '1em'}}>Recent</div>
      {/* <button className='button more'>More</button> */}
    {/* </div> */}

    <RecentCallers callerDp={userImage2} callType={video} callerName={'Elon Musk'} condition={incomingGreen} time={'Today, 4:00pm'}/>
    <RecentCallers callerDp={userImage} callType={video} callerName={'Paul Scholes'} condition={outgoingGreen} time={'Yesterday, 9:00pm'}/>
    <RecentCallers callerDp={userImage3} callType={phonecall} callerName={'Leo Messi'} condition={outgoingGreen} time={'Yesterday ,2:00am'}/>
    <RecentCallers callerDp={userImage5} callType={phonecall} callerName={'Mohammed Salah'} time={'incoming 4:00pm'}/>
    <RecentCallers callerDp={userImage4} callType={video}callerName={'Burna Boy'} time={'January 29, 4:00pm'}/>
    <RecentCallers callerDp={userImage} callType={video}callerName={'Trent Alexander Arnold'} condition={outgoingGreen} time={'January 28, 10:00pm'}/>
    <RecentCallers callerDp={userImage5} callType={phonecall} callerName={'Virgil Van Dijk'} time={'Janury 27, 2:34pm'}/>
    <RecentCallers callerDp={userImage2} callType={phonecall}  callerName={'Cristiano Ronaldo'} condition={incomingGreen} time={'January 27, 12:36am'}/>

          <div className='addNewIcon call'>
            <img src={addCall} className='FooterSvg' alt="new" />
          </div>

  </div>
 )
}