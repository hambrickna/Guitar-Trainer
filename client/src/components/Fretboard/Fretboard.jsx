import styles from './Fretboard.module.scss'
import * as PropTypes from "prop-types";
import {Component} from "react";

export class Fretboard extends Component {
    render() {
        let {tuning, selectedString, handleClick} = this.props;

        switch (selectedString) {
            case 'String0':
                document.documentElement.style.setProperty('--string1', "#fcba03");
                break;

            case 'String1':
                document.documentElement.style.setProperty('--string2', "#fcba03");
                break;

            case 'String2':
                document.documentElement.style.setProperty('--string3', "#fcba03");
                break;

            case 'String3':
                document.documentElement.style.setProperty('--string4', "#fcba03");
                break;

            case 'String4':
                document.documentElement.style.setProperty('--string5', "#fcba03");
                break;

            case 'String5':
                document.documentElement.style.setProperty('--string6', "#fcba03");
                break;

            default:
                break;
        }


        let strings = [];
        for (let i = 0; i < tuning.length; i++) {
            strings[i] = generateString(tuning[i]).map((note, index) =>
                <th key={`String${i+1}_Fret${index+1}`}
                    className={`Fret${i + 1}${index + 1}`}
                    style={{paddingRight: `${fretPadding.at(index)}`}}
                    onClick={(evt) => handleClick(evt, note, i)}>
                    {<span
                        className={`Circle ${((i === 1 || i === 5) && index === 11) || (i === 3 && (index === 2 || index === 4 || index === 6 || index === 8)) ? styles.Circle : null}`}
                        style={{top: "-5px", left: `${circlePadding.at(index)}`}}
                    ></span>}
                </th>);
        }

        return (
            <>
                <div className='FretboardBody'>
                    <table>
                        <tbody>
                        <tr className={styles.String1}>
                            {strings[0]}
                        </tr>
                        <tr className={styles.String2}>
                            {strings[1]}
                        </tr>
                        <tr className={styles.String3}>
                            {strings[2]}
                        </tr>
                        <tr className={styles.String4}>
                            {strings[3]}
                        </tr>
                        <tr className={styles.String5}>
                            {strings[4]}
                        </tr>
                        <tr className={styles.String6}>
                            {strings[5]}
                        </tr>
                        </tbody>
                    </table>
                    <ul className={styles.StringTuning}>
                        <li style={(selectedString === "String0") ? {color: "#fcba03"} : null}
                            id="String1">{tuning[0]}</li>
                        <li style={(selectedString === "String1") ? {color: "#fcba03"} : null}
                            id="String2">{tuning[1]}</li>
                        <li style={(selectedString === "String2") ? {color: "#fcba03"} : null}
                            id="String3">{tuning[2]}</li>
                        <li style={(selectedString === "String3") ? {color: "#fcba03"} : null}
                            id="String4">{tuning[3]}</li>
                        <li style={(selectedString === "String4") ? {color: "#fcba03"} : null}
                            id="String5">{tuning[4]}</li>
                        <li style={(selectedString === "String5") ? {color: "#fcba03"} : null}
                            id="String6">{tuning[5]}</li>
                    </ul>
                </div>

                <ul key="id" className={styles.FretNumbers}>
                    <li id="fret1">1</li>
                    <li id="fret2" style={{paddingLeft: "97px"}}>2</li>
                    <li id="fret3" style={{paddingLeft: "96px"}}>3</li>
                    <li id="fret4" style={{paddingLeft: "88px"}}>4</li>
                    <li id="fret5" style={{paddingLeft: "85px"}}>5</li>
                    <li id="fret6" style={{paddingLeft: "80px"}}>6</li>
                    <li id="fret7" style={{paddingLeft: "75px"}}>7</li>
                    <li id="fret8" style={{paddingLeft: "74px"}}>8</li>
                    <li id="fret9" style={{paddingLeft: "68px"}}>9</li>
                    <li id="fret10" style={{paddingLeft: "55px"}}>10</li>
                    <li id="fret11" style={{paddingLeft: "47px"}}>11</li>
                    <li id="fret12" style={{paddingLeft: "40px"}}>12</li>
                </ul>
            </>
        )
    }
}

Fretboard.propTypes = {
    tuning: PropTypes.any,
    selectedString: PropTypes.any,
    handleClick: PropTypes.any
}

function generateString(note) {
    return notes.slice(notes.indexOf(note) + 1).concat(notes.slice(0, notes.indexOf(note) + 1));
}

const circlePadding = ["","","46px","","43px","","39px", "", "35px", "","", "30px"]
const fretPadding = ["95px", "90px", "85px", "80px", "76px", "72px", "67px", "64px", "60px", "57px", "53px", "51px"]
const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
