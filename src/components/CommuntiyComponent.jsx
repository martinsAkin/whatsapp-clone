/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import '../styling/interface.css'
import userImage from '../assets/images/UserIcon (1).png'
import userImage2 from '../assets/images/UserIcon (2).png'
import userImage3 from '../assets/images/UserIcon (3).png'
import userImage4 from '../assets/images/UserIcon (4).png'
import userImage5 from '../assets/images/UserIcon (5).png'
import community from '../assets/images/users-alt.svg'
import menuIcon from '../assets/images/ellipsis-v (1).svg'
import { useState } from 'react'


export function HeadbarChannels({section}){
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
         {/* <img src={camera} className='svg' alt="camera" /> */}
         <div onClick={toggleMenu}>
          <img src={menuIcon} className='svg' alt="menu" />

                <div style={{display: MenuBtn ? 'block' : 'none'}} className='menu-popUp'>
                <ul>
                  <li>Settings</li>
                </ul>
              </div>
         </div>
         {/* <MenuBar icon={iconn}/> */}
      </div>

  </div>
 )
}


export function IndividualCommunity({communityDp, communityName, general = 'Announcements', time = '10:56pm', unread, group1, group2, children}){
 return(
  <section id='communitySection'>
       <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem 0.5rem 0.6rem'}}>
        <div style={{fontSize: '25px'}}>{communityName}</div>
        <button className='button viewAll'>View all</button>
       </div>
        <div className="community-List">
            <img src={communityDp} id='profilePic' alt="user" />
            <div>
              <div style={{display: 'flex', paddingBottom: '0.5rem', width: '18.5rem', justifyContent: 'space-between'}}>
                <div>{general}</div>
                <div>{time}</div>
                </div>

              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <div>{children}</div>
                  <div className="unread">{unread}</div>
                </div>
            </div>
          
    </div>

        <div className="community-List">
            <img src={communityDp} id='profilePic' alt="user" />
            <div>
              <div style={{display: 'flex', paddingBottom: '0.5rem', width: '18.5rem', justifyContent: 'space-between'}}>
                <div>{group1}</div>
                <div>{time}</div>
                </div>

              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <div>{children}</div>
                  <div className="unread">{unread}</div>
                </div>
            </div>        
     </div>

     <div className="community-List">
            <img src={communityDp} id='profilePic' alt="user" />
            <div>
              <div style={{display: 'flex', paddingBottom: '0.5rem', width: '18.5rem', justifyContent: 'space-between'}}>
                <div>{group2}</div>
                <div>{time}</div>
                </div>

              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <div>{children}</div>
                  {/* <div className="unread">{unread}</div> */}
                </div>
            </div>          
     </div>
    

   </section>
 )
}

export default function Community(){
 return(
  <div id='community' style={{paddingBottom: '5rem'}}>
   <HeadbarChannels section={'Communities'} />

   <div id='addNewCommunity'>
     <img src={community} className='svg' alt="icon" />
     <div>New Community</div>
    
    </div>

    <IndividualCommunity communityDp={userImage} communityName={'JavaScript Only'} group1={'Memes.js'} group2={'JAVASCRIPT'} unread={'28'}>
       <span>Lorem ipsum dolor sit</span>
    </IndividualCommunity>
    <IndividualCommunity communityDp={userImage} communityName={'TENNET TEAM'} group1={'Discussion Group'} group2={'FrontEnd Devs'} unread={'17'} time='2:20am'>
       <span>Lorem ipsum dolor sit</span>
    </IndividualCommunity>

    <IndividualCommunity communityDp={userImage} communityName={'4Krativr'} group1={'General Group'} group2={'Front-End devs'} unread={'1'} time='10:40am'>
       <span>Lorem ipsum dolor sit</span>
    </IndividualCommunity>

  </div>
 )
}