import Img from '../../img/tech1.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Home.css'
function Home(){
    return(
        <div className="container-fluid mt-5" id='home' >
            <div className="row" >
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-5">
                   <div className='d-block justify-content-center' >
                   <h2 className='name-font ms-3 mt-5' data-aos="fade-right" >Hi.. <span className='text-color' data-aos="fade-right">I am </span></h2>
                    <h2 className='font ms-3 mt-5' data-aos="fade-left">Kylie <span className='text-color'> Petrakis</span></h2> 
                    <div className='mt-4 ms-1' data-aos="fade-right">
                    <FacebookIcon className='icon'/>
                    <InstagramIcon className='icon'/>
                    <LinkedInIcon className='icon'/>
                    <TwitterIcon className='icon'/>
                    </div>
                    <p className='text-end mt-5 ' data-aos="fade-left">Teacher Portfolio</p>
                    <hr className='line mt-5' style={{opacity:'1'}}/>
                    <p className='text-end text-color mt-1' data-aos="fade-right">Since 2015</p>

                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4 d-flex justify-content-center align-items-center">
                    <img src={Img} className="img-fluid img-corner img-size " data-aos="zoom-in-up"
/>
                </div>
            </div>

        </div>
    )
}
export default Home;