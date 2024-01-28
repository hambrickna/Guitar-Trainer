import { Gallery } from '../Gallery';

export function Home() {
    return (
        <div className="homePage">
            <br></br>
            <body>
                <br></br>
                <Gallery cards={cards}/>
                <br></br>
                <h1 style={{fontSize: 60}}>Heading</h1>
                <p style={{fontSize: 35, marginLeft: 150, marginRight: 150}}>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </body>
        </div>
    )
}

const cards = [
    {img: '/images/brown-guitar.jpg', width: '400', height: '427', alt: 'Brown Guitar', title: 'Scales'},
    {img: '/images/brown-guitar.jpg', width: '400', height: '427', alt: 'Brown Guitar', title: 'Chords'},
    {img: '/images/brown-guitar.jpg', width: '400', height: '427', alt: 'Brown Guitar', title: 'Interactive Fret Board'},
];