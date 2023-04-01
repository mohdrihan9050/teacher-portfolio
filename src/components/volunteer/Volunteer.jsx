import Img1 from '../../img/volun-work1.jpg'
import Img2 from '../../img/volun-work2.jpg'

import './Volunteer.css';
function Volunteer(){
    return(
            <div className="container-fluid" id='volunteer' >
            <h1 className="text-center text-color  mt-5 mb-5">Volunteer Work</h1>
                <div className='row gy-4'>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className='card p-3 volunteer-container shadow' data-aos="zoom-in">
                        <img src={Img1} className=' card-img-top img-height img-corner'/>
                        <div className='card-body'>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae mollitia accusamus facere aperiam in vero inventore pariatur.Molestiae mollitia accusamus facere aperiam in vero inventore pariatur. </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className='card p-3 volunteer-container shadow' data-aos="zoom-in">
                        <img src={Img2} className=' card-img-top img-height img-corner'/>
                        <div className='card-body'>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae mollitia accusamus facere aperiam in vero inventore pariatur.Molestiae mollitia accusamus facere aperiam in vero inventore pariatur. </p>
                        </div>
                    </div>
                    </div>
                </div>
               
            </div>
    );
}
export default Volunteer;