import "./post.css"
import {MoreVert} from "@material-ui/icons"

export default function post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/people/Img1.jpg" 
            alt="" 
            className="postProfileImg" 
            />
            <span className="postUsername">Uchiha Obito</span>
            <span className="postDate">10 hours ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Heyoo!</span>
          <img src="/assets/posts/1.jpg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/posts/thumbsup.png" alt="" className="likeIcon" />
            <img src="/assets/posts/heart.png" alt="" className="likeIcon" />
            <span className="likeCounter">50 likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">16 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
