import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
import SliderServices from '../../../services/SliderServices';

function Slider() {
    const [sliders, setSliders] = useState([]);
    useEffect(function(){
      (async function(){
        await SliderServices.getByPosition("slidershow")
        .then(function(result){
            setSliders(result.data.sliders)
        });
      })();
    },[])
  return (
    <div className='slider'>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          {sliders.map(function (slider, index) {
            if (index === 0) {
              return (
                <div class="carousel-item active">
                  <img src={urlImage + "slider/" + slider.image} class="d-block w-100" alt={slider.image} />
                </div>
              );
            }
            else {
              return (
                <div class="carousel-item">
                  <img src={urlImage + "slider/" + slider.image} class="d-block w-100" alt={slider.image} />
                </div>
              );
            }
          })}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;