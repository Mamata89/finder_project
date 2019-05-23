import React from 'react'
import banner from '../Images/one.jpg'
import banner1 from '../Images/two.jpg'
import banner3 from '../Images/three.jpg'
const Home = () => {
    
        return(
            // <div className="Home-banner">
          
            // <img src={banner} class="d-block w-100" alt="..."/>
            // <div className="banner-text">
    
            // <h2 className="text">The best person for the job isn't always who you think</h2>
            // <p className="para">Find the people with the skills you need on Airtask</p>
            // </div>


            // </div>
                
<main role="main">

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">

    <img src={banner} className="bd-placeholder-img" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"/> 
   
      <div class="container">
        <div class="carousel-caption text-left">
          <h1>Example headline.</h1>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <img src={banner1} className="bd-placeholder-img" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"/> 
      <div class="container">
        <div class="carousel-caption">
          <h1>Another example headline.</h1>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <img src={banner3} className="bd-placeholder-img" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"/> 
      <div class="container">
        <div class="carousel-caption text-right">
          <h1>One more for good measure.</h1>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</main>
          
        )
  
}


export default Home
