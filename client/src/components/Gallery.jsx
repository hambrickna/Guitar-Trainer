import { Card } from './Card';

export function Gallery({ cards }) {
    const galleryItems = cards.map(card =>
        <Card 
            img={card.img}
            width={card.width}
            height={card.height}
            alt={card.alt}
            title={card.title}/>)

    return (
        <div className='scrollContainer'>
            {galleryItems}
        </div>
    )
}