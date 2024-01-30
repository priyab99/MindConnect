
const Banner = () => {
    return (

       <div>
        <div className="carousel w-full h-[650px] mb-5">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/mental-health-care-sketch-diagram_53876-121351.jpg?size=626&ext=jpg&ga=GA1.2.928138083.1680619194&semt=ais" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/family-therapy-psychologist-office_23-2149175222.jpg?size=626&ext=jpg&ga=GA1.2.928138083.1680619194&semt=ais" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/female-architect-having-conversation-with-her-colleague_23-2147839959.jpg?size=626&ext=jpg&ga=GA1.2.928138083.1680619194&semt=ais" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/female-architect-having-conversation-with-her-colleague_23-2147839959.jpg?size=626&ext=jpg&ga=GA1.2.928138083.1680619194&semt=ais" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
       </div>
    
    );
};

export default Banner;