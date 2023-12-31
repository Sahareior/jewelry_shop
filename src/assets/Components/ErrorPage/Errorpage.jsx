import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.tenor.com/FVFycM1Nq8kAAAAS/shushi-shusha.gif")` }}>
  <div className="hero-overlay bg-opacity-0"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-96 text-warning text-5xl font-bold">Opps page not found</h1>
      <Link to='/'><button className='btn btn-secondary text-center'>Back to Home</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Errorpage;