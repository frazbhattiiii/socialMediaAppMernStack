// import React from 'react'
import "./Rightbar.css";
import {Users} from '../../dummyData';
import Online from "../online/Online";
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>James Nicols </b> and <b> 3 other friends</b> have birthday today
          </span>
        </div>
        <img src="assets/ad.png" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
