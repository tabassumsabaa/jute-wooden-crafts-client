

const Banner = () => {
    return (
        <div>
           <div className="carousel max-h-96 w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.ibb.co/x8gRLVL/bthree.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ibb.co/HGKBDpW/bfour.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.ibb.co/Bj496DV/btweo.jpg" className="w-full" />
  </div> 
          </div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
        </div>
    );
};

export default Banner;