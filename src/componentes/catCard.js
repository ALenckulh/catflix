const catCard = ({names, images}) => {
    return <>
    <div id="animation-carousel" class="relative w-full" data-carousel="static">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src={images} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={names}/>
        </div>
    </div>
    </div>
    </>
}

export default catCard