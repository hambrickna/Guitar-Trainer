import { useNavigate } from 'react-router-dom';
import styles from './Card.module.scss'

export function Card(x) {
    const navigate = useNavigate();

    function handleClick() {
        switch(x.title) {
            case 'Scales':
                navigate('/scales');
                break;
            case 'Chords':
                navigate('/chords');
                break
            case 'Interactive Fret Board':
                navigate('/fretboard-trainer');
                break;
            default:
                break;
        }
    }

    return (
        <div onClick={handleClick} className={styles.card}>
            <img
                src={x.img}
                alt={x.alt}
                width={x.width}
                height={x.height}>
            </img>
            <div className='cardText'>
                <h4><b>{x.title}</b></h4>
                <p>Information</p>
            </div>
        </div>
    )
}