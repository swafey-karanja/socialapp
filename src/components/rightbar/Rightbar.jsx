import "./rightbar.css"
import { Users } from "../../Data";
import Online from "../online/Online";

export default function Rightbar({Profile}) {

  const HomeRightbar = () => {
    return(
        <>
            <div className="birthdayContainer">
              <img src="assets/posts/gift.png" alt="" className="birthdayImg" />
              <span className="birthdayText">
                <b>Shirleen Joy</b> and <b>1 other friend</b> have a birthday today.
              </span>
            </div>
            <img src="assets/posts/coke.jpg" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {Users.map(u => (
                <Online key={u.id} user={u} />
              ))}
            </ul>
        </>
    );
  };

  const ProfileRightbar = () => {
    return (
        <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Tokyo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Nairobi, Kenya</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship status:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/people/Img3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Vinsmoke Sanji</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/people/Img4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Vinsmoke Sanji</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/people/Img5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Vinsmoke Sanji</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/people/Img6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Vinsmoke Sanji</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/people/Img7.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Vinsmoke Sanji</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/people/Img8.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Vinsmoke Sanji</span>
          </div>
        </div>
        </>
    );
  };

  return (
    
    <div className="rightbar">
      <div className="rightbarWrapper">
      <ProfileRightbar/>
     
      </div>
    </div>
  )
}
