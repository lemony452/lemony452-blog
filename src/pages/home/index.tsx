import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <header>
        <div>
          <Link to="/posts/new">글쓰기</Link>
          <Link to="/posts">게시글</Link>
          <Link to="/profile">프로필</Link>
        </div>
      </header>
      <div className="post-list">post list</div>
      <footer>
        <div>menu1</div>
        <div>menu2</div>
        <div>menu3</div>
      </footer>
    </div>
  )
}

export default Home