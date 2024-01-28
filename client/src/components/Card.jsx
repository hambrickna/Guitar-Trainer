import { useNavigate } from 'react-router-dom';

export function Card({ img, width, height, alt, title }) {
    const navigate = useNavigate();

    function handleClick() {
        switch(title) {
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
        <div onClick={handleClick} className="card">
            <img
                src={img}
                alt={alt}
                width={width}
                height={height}>
            </img>
            <div className='cardText'>
                <h4><b>{title}</b></h4>
                <p>Information</p>
            </div>
        </div>
    )
}