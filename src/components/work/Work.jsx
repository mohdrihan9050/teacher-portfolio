import './Work.css'
function Work(){
    return(
        <div className='container-fluid set-mobile-h  vh-100' id='work' >
            <h1 className="text-center text-color mt-5 mb-5">Work Experience</h1>
            <div className="row gy-4">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
                <div className='work-container shadow p-3' data-aos="flip-right">
                <h2 className="text-center text-color">Neptune</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur provident ducimus molestias nobis deleniti quam, rerum ipsa, animi ipsam magni impedit non officiis esse. Blanditiis magni veritatis deleniti molestias rem.</p>
            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
            <div className='work-container shadow p-3' data-aos="flip-left">
            <h2 className="text-center text-color">Murcury</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur provident ducimus molestias nobis deleniti quam, rerum ipsa, animi ipsam magni impedit non officiis esse. Blanditiis magni veritatis deleniti molestias rem.</p>
            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
            <div className='work-container shadow p-3' data-aos="flip-right">
            <h2 className="text-center text-color">Saturn</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur provident ducimus molestias nobis deleniti quam, rerum ipsa, animi ipsam magni impedit non officiis esse. Blanditiis magni veritatis deleniti molestias rem.</p>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Work;