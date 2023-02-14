import './post.css'


const Post = ({ name, date, img, text ,darkMode }) => (
    <div className={`post ${( darkMode ) ? "dark":""}`}>
      <div className="top">
        
        <div className="left">
          <img className="profilePicture" width={100} src={img} />
        </div>
        
        <div className="right">
          <h2>{name}</h2>
          <span>{date}</span>
        </div>
      
      </div>
      <br />
      <p>{text}</p>
      <img
        width="200px"
        src={img}
        alt=""
      />
      <br />
      <button>Like</button>
      <button>Comment</button>
      <button>Share</button>
    </div>
  )

  export default Post