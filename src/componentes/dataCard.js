"use client"
import AliceCarousel from "react-alice-carousel";
import CatCard from "./catCard";
import { useEffect, useState } from "react";

const DataCard = () => {

  const handleDragStart = (e) => e.preventDefault();
  const [items, setItems] = useState([])
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  const dataCat = [{
    names: 'Catinho',
    images: "/cato.jpg",
  },
  {
    names: 'Gatito',
    images: "/catinho.jpg",
  },
  {
    names: 'Tontito',
    images: "/gatito.jpg",
  },
  {
    names: 'Cato',
    images: "/tontito.jpg",
  },
  {
    names: 'Cato',
    images: "/gatito.jpg",
  }
  ]
  

  useEffect(() => {

    setItems([])
  }, [])

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  return (
    <>

      <AliceCarousel responsive={responsive}
        mouseTracking items={dataCat.map(x => {
          return <div class="max-w-sm rounded overflow-hidden shadow-lg m-5">
            <CatCard images={x.images} onDragStart={handleDragStart} role="presentation" />
          </div>
        })} controlsStrategy="alternate"
      />

      {/* {
        dataCat.map(cardCat => {
          return <CatCard names={cardCat.names} images={cardCat.images} />
        })
      } */}

    </>
  )
}

export default DataCard;