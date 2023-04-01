import './Teacher.css'
import Img1 from '../../img/t-g-1.jpg'
import Img2 from '../../img/t-g-2.jpg'
import Img3 from '../../img/t-g-3.jpg'
function Teacher(){
    return(
        <div className='container-fluid' id='teacher'>
            <h1 className="text-center text-color mt-5">Teacher Gallery</h1>
            <div className=" row g-3 mb-5 mt-4">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 ">
                    <div className='card  shadow p-3 work-container' data-aos="zoom-out">
                        <h3 className='card-title text-center text-color'>Naptune</h3>
                        <p className='card-text text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos velit cupiditate tenetur odio? Quia ut vel, nulla voluptates necessitatibus nobis, laborum quam sit optio a rerum, perspiciatis saepe ducimus.</p>
                     <div>
                         <img src={Img1} className='card-img-top img-corner'/>
                     </div>
                    </div>
                </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className='card  shadow p-3 work-container' data-aos="zoom-out">
                    <div>
                         <img src={Img2} className='card-img-top img-corner'/>
                    </div>
                        <h3 className='card-title text-center text-color '>Murcury</h3>
                        <p className='card-text text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos velit cupiditate tenetur odio? Quia ut vel, nulla voluptates necessitatibus nobis, laborum quam sit optio a rerum, perspiciatis saepe ducimus.</p>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className='card  shadow p-3 work-container' data-aos="zoom-in">
                        <h3 className='card-title text-center text-color'>Saturn</h3>
                        <p className='card-text text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos velit cupiditate tenetur odio? Quia ut vel, nulla voluptates necessitatibus nobis, laborum quam sit optio a rerum, perspiciatis saepe ducimus.</p>
                     <div>
                         <img src={Img3} className='card-img-top img-corner'/>
                     </div>    
                </div>

                   
            </div>

                
            </div>
        </div>
    )
}
export default Teacher;