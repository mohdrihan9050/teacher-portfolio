import Img1 from '../../img/class1.jpg'
import Img2 from '../../img/class2.jpg'
import { useState } from 'react';
function Class(){
  const [classReadMore,setClassReadMore] = useState(false);
    return(
        <div className='container-fluid mb-4 ' id='class'>
                <h1 className=" text-center text-color mb-4 ">Classroom  Gallery</h1>
            <div className='row gy-4'>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 " data-aos="fade-right">
                <p className='text-justify m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit perferendis necessitatibus facilis modi quos expedita. Dolor quasi voluptatibus voluptatem dolore officiis, mollitia architecto! Deserunt dignissimos consectetur dicta voluptatibus voluptatem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure temporibus illo a dolor incidunt reprehenderit nam sint ullam voluptatum. Consectetur at sunt veniam ipsa, minus blanditiis quia dolorem impedit amet. </p>
                
              {classReadMore?
                <div id="class-read-more">
                  <p className='text-justify m-2'>apple Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolore, atque natus magni a ad ipsum adipisci dolor molestias asperiores distinctio ea, consequuntur praesentium vero. Sunt soluta modi porro ab.</p>
                  <p className='text-justify m-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quaerat officiis magni consequatur nam. Facilis consequuntur voluptate non provident eum ea doloremque ullam sunt quidem, adipisci, fugit labore et facere!</p>
                </div>
                :''
              }
               {classReadMore?
                <span className='btn' onClick={()=>setClassReadMore(false)}>Read less</span>
              :
              <span className='btn ' onClick={()=>setClassReadMore(true)}>Read more</span>
            }
              </div>
               <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                <div className='d-flex justify-content-center align-items-center flex-column ' data-aos="fade-left">
                    <img src={Img1} className='img-fluid img-corner mt-4 '/>

                    <img src={Img2} className='img-fluid img-corner mt-4'/>
                </div>
                </div>
            </div>
            </div>
        
    )
}
export default Class;