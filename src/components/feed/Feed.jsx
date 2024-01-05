import Share from "../share/Share.jsx"
import Post from "../post/Post.jsx"
import "./feed.css"

export default function feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
