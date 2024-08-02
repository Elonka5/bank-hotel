import { Link } from "react-router-dom"
import Header from "../components/Header/Header"


const NotFoundPage = () => {
  return (
    <>
    <Header/>
    <div className="notfound__container">
      <div className="notfound__container--content">
          <h1 className="title">404</h1>
     <p className="text">Looks like you got lost in hotel</p>
      </div>
      <video autoPlay muted loop className="notfound__video">
        <source src="/animation_not_found.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <Link to={'/'} className="link404">
          COME BACK TO HOTEL?
        </Link>
    </div>
    </>
  )
}

export default NotFoundPage