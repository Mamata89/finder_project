import React from 'react'
import abt from '../Images/abt1.jpg'
import Footer from '../layout/footer'

const AboutUs = () => {
    
        return(
          <div>
          <section>
            <div>
      
               
  <div className="image-aboutus-banner">
   <div class="container">
    <div class="row">
        <div class="col-md-12">
         <h1 class="lg-text">About Us</h1>
          <p class="image-aboutus-para">Get instant access to reliable and affordable services</p>
         
       </div>
    </div>
</div>
</div>

<section className="about-us">

    <h2>How Does Finder Works?</h2> 
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card">
 <center> <img src={abt} className="card-img-top" alt="..."/></center>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card">
 <center> <img src={abt} className="card-img-top" alt="..."/></center>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card">
 <center> <img src={abt} className="card-img-top" alt="..."/></center>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>
    </div>
  </div>
</div>


            </section>



              
              

        </div>
        </section>
        <section>
          <Footer/>
        </section>
        </div>
        )
  
}


export default AboutUs
