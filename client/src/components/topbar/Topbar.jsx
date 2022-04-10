import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css"


export default function Topbar() {
  const {user,dispatch} = useContext(Context);
  const PF= "http://localhost:5000/images/"
  const handleLogout=()=>{
      dispatch({type: "LOGOUT"});
  }

  return (
    <div className='top'>
    <div className="topLeft">
       <i className="topIcons fab fa-facebook-square"></i>
        <i className="topIcons fab fa-twitter-square"></i>
        <i className="topIcons fab fa-pinterest-square"></i>
    </div>
    <div className="topCenter">
       <ul className="topList">

           <li className="topListItem">
             <Link className="link" to='/'>HOME</Link>
           </li>
            <li className="topListItem">
           <Link className="link" to='/'>ABOUT</Link>
           </li>
           {/*
             <li className="topListItem">
           <Link className="link" to='/'>CONTACT</Link>
           </li> */}
           <li className="topListItem">
              <Link className="link" to='/write'>WRITE</Link>
           </li>
           <li className="topListItem" onClick={handleLogout}>
           {user &&  "LOGOUT"}
           </li>
       </ul>
    </div>
    <div className="topRight">
      {user ? (
      <Link to="/settings">
      <img
          className="topImage"
          src= {PF+user.profilePic}
          alt="userPic"
          onError={event => {
            event.target.src = "https://w7.pngwing.com/pngs/676/273/png-transparent-computer-icons-avatar-avatar-heroes-black-silhouette-thumbnail.png"
            event.onerror = null
          }}
        />
        </Link> 
        ): (
          <ul className="topList">
              <li className="topListItem">
            <Link to="/login" className="link">
              LOGIN
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/register" className="link">
              REGISTER
            </Link>
            </li>
          </ul>
        )

      }
    

<i className="topSearchIcon fas fa-search"></i>
    </div>
    </div>
  )
}
