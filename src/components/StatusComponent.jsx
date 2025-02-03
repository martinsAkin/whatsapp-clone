/* eslint-disable react/prop-types */
import '../styling/interface.css'
import userImage from '../assets/images/UserIcon (1).png'
import userImage2 from '../assets/images/UserIcon (2).png'
import userImage3 from '../assets/images/UserIcon (3).png'
import userImage4 from '../assets/images/UserIcon (4).png'
import userImage5 from '../assets/images/UserIcon (5).png'
import searchIcon from '../assets/images/search.svg'
import menuIcon from '../assets/images/ellipsis-v (1).svg'
import { useState } from 'react'
import newStatus from '../assets/images/camera-plus.svg'



export function HeadbarStatus({section}){
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
         <img src={searchIcon} className='svg' alt="search" />
         <div onClick={toggleMenu}>
          <img src={menuIcon} className='svg' alt="menu" />

                <div style={{display: MenuBtn ? 'block' : 'none'}} className='menu-popUp'>
                <ul>
                  <li>Create channel</li>
                  <li>Status privacy</li>
                  <li>Settings</li>
                </ul>
              </div>
         </div>
         {/* <MenuBar icon={iconn}/> */}
      </div>

  </div>
 )
}

export function ChannelList({channelPP, channelName, time = '9:40am', unread, children}){
  return(
    <section id='channels'>
        <div className="channel-List">
            <img src={channelPP} id='profilePic' alt="user" />
            <div>
              <div style={{display: 'flex', paddingBottom: '0.5rem', width: '18.5rem', justifyContent: 'space-between'}}>
                <div>{channelName}</div>
                <div>{time}</div>
                </div>

              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <div>{children}</div>
                  <div className="unread">{unread}</div>
                </div>


            </div>
    </div>

    </section>
  )
}

export function StatusList(){
 return(
  <div id='statusList'>
   <div className='statusRing'><img src={userImage} alt='user'/></div>
   <div className='statusRing'><img src={userImage2} alt='user'/></div>
   <div className='statusRing'><img src={userImage3} alt='user'/></div>
   <div className='statusRing'><img src={userImage4} alt='user'/></div>
   <div><img src={userImage5} alt='user'/></div>
   <div><img src={userImage} alt='user'/></div>
   <div><img src={userImage2} alt='user'/></div>
   <div><img src={userImage3} alt='user'/></div>
   <div><img src={userImage4} alt='user'/></div>
   <div><img src={userImage5} alt='user'/></div>
  </div>
 )
}

export default function Status() {


 return(
  <div id='statusPage'>
    {/* <StatusHeaderBar /> */}
    <HeadbarStatus section={'Status'}  Headericon1={'search'} Headericon2={'menu'}/>
    <StatusList/>

    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem'}}>
      <div style={{fontSize: '25px'}}>Channel</div>
      <button className='button explore'>Explore</button>
    </div>

    <ChannelList channelName={'Tech Psyche'} channelPP={userImage} unread={29}>
      <span>Top 50 AI applications</span>
    </ChannelList>
    <ChannelList channelName={'TechCrunch'} channelPP={userImage5} unread={40}>
      <span>DOGE to MARS?</span>
    </ChannelList>
    <ChannelList channelName={'Learn at your pace'} channelPP={userImage2}>
      <span>Worried about Imposter Syndrome?</span>
    </ChannelList>
    <ChannelList channelName={'Cooking with Kya'} channelPP={userImage3}>
      <span>20 food recipies you should try in 2025</span>
    </ChannelList>
    <ChannelList channelName={'90min | Liverpool'} channelPP={userImage2}>
      <span>Bournemouth 0: 2 Liverpool</span>
    </ChannelList>
    <ChannelList channelName={'Aproko Doctor'} channelPP={userImage5}>
      <span>Why you should drink water everyday</span>
    </ChannelList>
    <ChannelList channelName={'Naija News'} channelPP={userImage3}>
      <span>Which Way Forward Nigeria?</span>
    </ChannelList>

     <div className='addNewIcon status'>
          <label htmlFor="camera-input">
            <img src={newStatus} className='FooterSvg' alt="new" />
          </label>
          <input id='camera-input' type="file" accept='image/*' capture='camera' style={{display: 'none'}}/>
      </div>
  </div>
 )
}