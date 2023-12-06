import catCard from "./catCard"

const dataCard = () => {
  const dataCat = [{
    names: 'Catinho',
    images: "/catinho.jpg",
  },
  {
    names: 'Gatito',
    images: "/gatito.jpg",
  },
  {
    names: 'Tomtito',
    images: "/tontinto.jpg",
  }
  ]
  return (
    <>
      <div className={"flex"}>
        --
        {
          dataCat.map(cardCat => {
            return <catCard names={cardCat.names} images={cardCat.images} />
          })
        }
      </div>
    </>
  )
}

export default dataCard;