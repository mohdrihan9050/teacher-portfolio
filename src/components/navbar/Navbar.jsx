import './Navbar.css'
import {Link} from 'react-scroll';
function Navbar(){
    return(
        <div className="container-fluid">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light bg-custom">
  <div className="container-fluid">
    <a className="navbar-brand btn p-2" href="#">Teacher Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto  ">
        <li className="nav-item">
        <Link activeClass="active " to="home" spy={true} smooth={true} offset={-60} className="nav-link cursor-pointer">Home</Link>
        </li>

        <li className="nav-item">
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-60} className="nav-link cursor-pointer">About</Link>
        </li>        
        <li className="nav-item">
        <Link activeClass="active" to="work" spy={true} smooth={true} offset={-60} className="nav-link cursor-pointer">Work Experince</Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-60} className="nav-link cursor-pointer">Skills</Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" to="volunteer" spy={true} smooth={true} offset={-60} className="nav-link cursor-pointer">Volunteer Work</Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" to="teacher" spy={true} smooth={true} offset={-60} className="nav-link cursor-pointer">Teacher Gallery</Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" to="class" spy={true} smooth={true} offset={-60}  className="nav-link cursor-pointer">Classroom Gallery</Link>
        </li>

        <li className="nav-item">
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-60} className="nav-link cursor-pointer">Contact me!</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        </div>
    )
}
export default Navbar;