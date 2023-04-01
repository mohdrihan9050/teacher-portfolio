import './About.css'
function About(){
    return(
        <div className="container-fluid vh-100 set-mobile-h  mt-5" id='about'>
            <h1 className="text-color text-center mb-5 ">About</h1>
            <h2 className="text-color text-start ms-2 mt-5" data-aos="fade-right">Hi my name is Kylie</h2>
            <hr className="line  mt-5" style={{opacity:'1'}}/>
            <p className="mt-5 line-height text-justify m-3" data-aos="fade-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione repellat quaerat repudiandae quod magnam incidunt, perferendis eum nulla, praesentium voluptatem quia recusandae sequi libero reiciendis tenetur molestias numquam saepe iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti vel qui ipsum, non nisi doloribus voluptatibus corrupti corporis aliquid et. Eveniet optio corrupti unde assumenda laudantium expedita. Rem, officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias qui corporis, neque sed asperiores quidem consequuntur nesciunt modi delectus error iusto officiis non iste laudantium vero sequi. Perferendis, necessitatibus.</p>
        </div>
    )
}
export default About;