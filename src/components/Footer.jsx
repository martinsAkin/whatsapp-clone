import '../styling/interface.css'
import ChatsIcon from '../assets/images/comments-alt.svg'
import statusLogo from '../assets/images/comment-heart.svg'
import communityLogo from '../assets/images/users-alt.svg'
import callSection from '../assets/images/phone-alt.svg'
import { NavLink } from 'react-router-dom'



export default function Footer(){
 return(
   <div id='footer'>
       <NavLink to='/chats' activeClassName='active'>
         <div className="footerIcon">
            <img src={ChatsIcon}  alt="" className='FooterSvg'/>
            <div>Chats</div>
                  
          </div>
       </NavLink>

       <NavLink to='/status'>
         <div className="footerIcon">
            <img src={statusLogo}  alt="" className='FooterSvg'/>
            <div>Status</div>
        </div>
       </NavLink> 
         
       <NavLink to='/communities'>
         <div className="footerIcon">
            <img src={communityLogo}  alt="" className='FooterSvg'/>
            <div>Communities</div>
        </div>
       </NavLink>

       <NavLink to='/calls'>
         <div className="footerIcon">
            <img src={callSection}  alt="" className='FooterSvg'/>
            <div>Calls</div>
        </div>
       </NavLink>

   </div>
 )
}