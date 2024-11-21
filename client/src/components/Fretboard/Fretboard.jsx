import styles from './Fretboard.module.scss'
import * as PropTypes from "prop-types";
import {Component} from "react";
import { v4 as uuidv4 } from 'uuid';

export class Fretboard extends Component {
    render() {
        let {tuning, selectedString, handleClick} = this.props;

        let strings = [];
        for (let i = 0; i < tuning.length; i++) {
            strings[i] = generateString(tuning[i]).map((note, index) =>
                <th
                    key={uuidv4()}
                    onClick={(evt) => handleClick(evt, note, i)}
                    className={`${styles.th}`}
                    style={{paddingRight: `${fretPadding.at(index)}`}}>
                    {<span
                        className={`Circle ${((i === 1 || i === 5) && index === 11) || (i === 3 && (index === 2 || index === 4 || index === 6 || index === 8)) ? styles.Circle : null}`}
                        style={{top: "-5px", left: `${circlePadding.at(index)}`}}
                    ></span>}
                </th>);
        }

        let lines = [];
        console.log(selectedString)
        for (let i = 0; i < tuning.length; i++) {
            lines[i] = [0,1,2,3,4,5,6,7,8,9,10,11].map(() =>
                <th key={uuidv4()}
                    className={`${styles.linebg}`}
                    style={{borderBottomColor: `${(selectedString && selectedString.slice(-1) == i) ? "#fcba03" : stringColors.at(i)}`,
                            borderBottomWidth: `${lineBorders.at(i)}`}}>
                </th>);
        }

        return (
            <>
                <div className='FretboardBody'>
                    <table className = {styles.table}>
                        <tbody>
                        <tr className={styles.String1}>
                            {strings[0]}
                        </tr>
                        <tr className={styles.line} style={{top: `${stringPositions.at(0)}`}}>
                            {lines[0]}
                        </tr>
                        <tr className={styles.String2}>
                            {strings[1]}
                        </tr>
                        <tr className={styles.line} style={{top: `${stringPositions.at(1)}`}}>
                            {lines[1]}
                        </tr>
                        <tr className={styles.String3}>
                            {strings[2]}
                        </tr>
                        <tr className={styles.line} style={{top: `${stringPositions.at(2)}`}}>
                            {lines[2]}
                        </tr>
                        <tr className={styles.String4}>
                            {strings[3]}
                        </tr>
                        <tr className={styles.line} style={{top: `${stringPositions.at(3)}`}}>
                            {lines[3]}
                        </tr>
                        <tr className={styles.String5}>
                            {strings[4]}
                        </tr>
                        <tr className={styles.line} style={{top: `${stringPositions.at(4)}`}}>
                            {lines[4]}
                        </tr>
                        <tr className={styles.String6}>
                            {strings[5]}
                        </tr>
                        <tr className={styles.line} style={{top: `${stringPositions.at(5)}`}}>
                            {lines[5]}
                        </tr>
                        </tbody>
                    </table>
                    <ul className={styles.StringTuning}>
                    <li style={(selectedString === "String0") ? {color: "#fcba03"} : null}
                        className={styles.stringNotes}
                            id="String1">{tuning[0]}</li>
                        <li className={styles.stringNotes}
                            style={(selectedString === "String1") ? {color: "#fcba03"} : null}
                            id="String2">{tuning[1]}</li>
                        <li className={styles.stringNotes}
                            style={(selectedString === "String2") ? {color: "#fcba03"} : null}
                            id="String3">{tuning[2]}</li>
                        <li  className={styles.stringNotes}
                             style={(selectedString === "String3") ? {color: "#fcba03"} : null}
                            id="String4">{tuning[3]}</li>
                        <li  className={styles.stringNotes}
                             style={(selectedString === "String4") ? {color: "#fcba03"} : null}
                            id="String5">{tuning[4]}</li>
                        <li  className={styles.stringNotes}
                             style={(selectedString === "String5") ? {color: "#fcba03"} : null}
                            id="String6">{tuning[5]}</li>
                    </ul>
                </div>

                <ul key="id" className={styles.FretNumbers}>
                    <li id="fret1">1</li>
                    <li id="fret2" style={{paddingLeft: "96px"}}>2</li>
                    <li id="fret3" style={{paddingLeft: "94px"}}>3</li>
                    <li id="fret4" style={{paddingLeft: "85px"}}>4</li>
                    <li id="fret5" style={{paddingLeft: "82px"}}>5</li>
                    <li id="fret6" style={{paddingLeft: "79px"}}>6</li>
                    <li id="fret7" style={{paddingLeft: "74px"}}>7</li>
                    <li id="fret8" style={{paddingLeft: "71px"}}>8</li>
                    <li id="fret9" style={{paddingLeft: "66px"}}>9</li>
                    <li id="fret10" style={{paddingLeft: "53px"}}>10</li>
                    <li id="fret11" style={{paddingLeft: "43px"}}>11</li>
                    <li id="fret12" style={{paddingLeft: "39px"}}>12</li>
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
const stringColors = ['#dad1d1', '#b6afaf', '#b6afaf', '#8d8989', '#928e8e', '#6b6868']
const stringPositions = ["18px", "54px", "90px", "126px", "162px", "198px"]
const lineBorders= ["3px", "3px", "4px", "4px", "5px", "5px"]