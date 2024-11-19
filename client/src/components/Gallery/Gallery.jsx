import { Card } from '../Card/Card.jsx';
import styles from './Gallery.module.scss'
import * as PropTypes from "prop-types";
import {Component} from "react";

export class Gallery extends Component {
    render() {
        let {cards} = this.props;
        const galleryItems = cards.map(card =>
            <Card
                key={`${card.title}`}
                img={card.img}
                width={card.width}
                height={card.height}
                alt={card.alt}
                title={card.title}/>)

        return (
            <div className={styles.scrollContainer}>
                {galleryItems}
            </div>
        )
    }
}

Gallery.propTypes = {cards: PropTypes.any}