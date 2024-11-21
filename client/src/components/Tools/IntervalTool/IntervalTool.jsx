import { Fretboard } from "../../Fretboard/Fretboard.jsx";
import { useState, useRef } from 'react';
import { Timer } from '../../Timer/Timer.jsx';
import { v4 as uuidv4 } from 'uuid';
import styles from './IntervalTool.module.scss';

export function IntervalTool() {
    const [tuning, setTuning] = useState(tunings[0].strings);
    const isPlayingRef = useRef(false);
    const [buttonText, setButtonText] = useState("Start");
    const [reset, setReset] = useState(false);
    const [selectedString, setSelectedString] = useState(null);
    const [selectedNote, setSelectedNote] = useState(null);
    const [score, setScore] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(1);
    const [timerKey, setTimerKey] = useState(uuidv4());

    let selectedTuning = [...tuning];

    function handleChange(e){
        let newTuning = tunings.filter((t) => t.name === e.target.value);
        setTuning(newTuning[0].strings);
        isPlayingRef.value = false;
        setButtonText("Start");

        if (isPlayingRef) {
            handleReset();
        }
    }

    function handleClick() {

        isPlayingRef.value = !isPlayingRef.value;
        setReset(false);
        (buttonText === "Start") ? setButtonText("Pause") : setButtonText("Start");

        if (isPlayingRef.value) {
            getRandomNote();
        }
    }

    function getRandomNote() {
        setSelectedString(strings[Math.floor(Math.random() * strings.length)]);
        setSelectedNote(notes[Math.floor(Math.random() * notes.length)]);
    }

    function handleFretClick(e, note, string) {
        if (isPlayingRef.value) {
            if (note === selectedNote && (selectedString.charAt(selectedString.length - 1)) == string) {
                document.documentElement.style.setProperty(`--string${string + 1}`, colors[string])
                getRandomNote();
                setScore(score + 1);
            }
        }
    }

    function handleReset() {
        setButtonText("Start");
        isPlayingRef.value = false;
        if (selectedString !== null) {
            let index = +selectedString.charAt(selectedString.length - 1);
            document.documentElement.style.setProperty(`--string${index + 1}`, colors[index])
        }
        setSelectedNote(null);
        setSelectedString(null);
        setScore(0);
        setTimerKey(uuidv4());

    }

    function handleTimerChange(e) {
        if (isPlayingRef) {
            handleReset();
        }
        setTimerMinutes(e.target.value);
    }

    return (
        <div className={styles.fretboardTool}>
            <p className={styles.Score}>Score: {score}</p>
            <p className={styles.Selection}>Select: {selectedNote}</p>
            <Timer key={timerKey} className="Timer" minutes={timerMinutes} seconds={0} reset={reset}
                   playing={isPlayingRef.value}/>
            <Fretboard
                tuning={selectedTuning.toReversed()}
                selectedString={selectedString}
                handleClick={handleFretClick}
            />
            <div className={styles.FretboardOptions}>
                <select name="tuning" onChange={handleChange} id="tuning">
                    <option value="E">E Standard</option>
                    <option value="Eb">E♭ Standard</option>
                    <option value="Drop D">Drop D</option>
                </select>
                <select name="time" onChange={handleTimerChange} id="time">
                    <option value="1">1 Minute</option>
                    <option value="2">2 Minutes</option>
                    <option value="3">3 Minutes</option>
                    <option value="4">4 Minutes</option>
                    <option value="5">5 Minutes</option>
                </select>
                <button className={styles.Fill}></button>
                <button className={styles.StartButton} onClick={handleClick}>{buttonText}</button>
                <button className={styles.ResetButton} onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

const tunings = [
    { name: "E", strings: ['E', 'A', 'D', 'G', 'B', 'E']},
    { name: "Eb", strings: ['D#', 'G#', 'C#', 'F#', 'A#', 'D#']},
    { name: "Drop D", strings: ['D', 'A', 'D', 'G', 'B', 'E']}
]

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const strings = ['String0', 'String1', 'String2', 'String3', 'String4', 'String5'];
const colors = ['#dad1d1', '#b6afaf', '#b6afaf', '#8d8989', '#928e8e', '#6b6868'];