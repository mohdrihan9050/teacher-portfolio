import './Skills.css'

function Skills() {
  return (
    <div className='container-fluid vh-100 mt-5 set-mobile-h set-tab-h ' id='skill' >
        <h1 className='text-center text-color'>Skills</h1>
        <div className='container' >
        <div className="row mt-4 gy-4" >
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 " data-aos="fade-right">
        <p className='skill'>Skill1</p>
        <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width:'50%'}}  aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <p className='skill mt-3'>Skill2</p>
        <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width:'70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <p className='skill mt-3'>Skill3</p>
        <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width:'90%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 " data-aos="fade-left">
        <p className='skill'>Skill4</p>
        <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <p className='skill mt-3'>Skill5</p>
        <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width:'60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        </div>
        </div>
        </div>
        </div>
        </div>
</div>
  );
}

export default Skills;