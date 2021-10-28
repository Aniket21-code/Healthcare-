import React from 'react'

export default function Todos() {
    return (
        <div>
    <div id="carouselExampleCaptions " class="carousel slide cycle height:600px  width:3oopx mx-3 my-3" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style={{height:"100%" ,width:"100%",alignContent:'center',color:'black'}}>
    <div class="carousel-item active" style={{width:"100%",height:"500px"}}>
      <img src="https://images.unsplash.com/photo-1612277795259-607df5c06e6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGhlYWx0aGNhcmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="d-block w-100"  style={{ height:"500px",
    width:"100%"}}alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2 style={{color:'White'}}> Consult to our doctor </h2>
        <p></p>
      </div>
    </div>
    <div class="carousel-item"style={{ width:"100%",height: "500px"}}>
      <img src="https://images.unsplash.com/photo-1612277795163-49a1a64e8f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2 style={{color:'black'}}>Your care Our Priority</h2>
        <p></p>
      </div>
    </div>
    <div class="carousel-item" style={{width:"100%",height: "500px"}}   >
      <img src="https://images.unsplash.com/photo-1563213126-a4273aed2016?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljaW5lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2 style={{color:'White'}}>Medicines at Your finger-tips</h2>
        <p></p>
      </div>
    </div>
    <div class="carousel-item" style={{width:"100%",height: "500px"}}>
      <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2 style={{color:'black'}}>Get Body checkups</h2>
        <p></p>
      </div>
    </div>
    <div class="carousel-item"style={{width:"100%",height: "500px"}}>
      <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yJTIwY29uc3VsdGF0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2 style={{color:'black'}}>Third slide label</h2>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>
    )
}
