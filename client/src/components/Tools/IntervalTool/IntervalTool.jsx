import { Fretboard } from "../../Fretboard/Fretboard.jsx";
import { useState, useRef } from 'react';
import { Timer } from '../../Timer/Timer.jsx';
import { v4 as uuidv4 } from 'uuid';
import styles from './IntervalTool.module.scss';

export function IntervalTool() {
    const [tuning, setTuning] = useState(tunings[0].strings);
    const isPlayingRef = useRef(false);
    const [gameStateText, setGameStateText] = useState("Start");
    const [gameModeText, setGameModeText] = useState("Disabled")
    const [reset, setReset] = useState(false);
    const [selectedString, setSelectedString] = useState(null);
    const [selectedNote, setSelectedNote] = useState(null);
    const [score, setScore] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(1);
    const [timerKey, setTimerKey] = useState(uuidv4());
    const [highlightedNote, setHighlightedNote] = useState(null);
    const [selectedInterval, setSelectedInterval] = useState(null);
    const [learningMode, setLearningMode] = useState(false);

    let selectedTuning = [...tuning];

    let stringTunings = []
    for (let i = 0; i < selectedTuning.length; i++) {
        stringTunings[i] = generateString(i);
    }

    function handleChange(e){
        let newTuning = tunings.filter((t) => t.name === e.target.value);
        setTuning(newTuning[0].strings);
        isPlayingRef.value = false;
        setGameStateText("Start");

        if (isPlayingRef) {
            handleReset();
        }
    }

    function handleClick() {

        isPlayingRef.value = !isPlayingRef.value;
        setReset(false);
        (gameStateText === "Start") ? setGameStateText("Pause") : setGameStateText("Start");

        if (isPlayingRef.value) {
            getRandomNote();
        }
    }

    function getRandomNote() {
        let baseString = Math.floor(Math.random() * strings.length);
        let baseNote = Math.floor(Math.random() * notes.length);
        let baseInterval = Math.floor(Math.random() * notes.length);
        setSelectedString(strings[baseString]);
        setHighlightedNote(notes[baseNote]);
        setSelectedInterval(intervals[baseInterval]);
        setSelectedNote(stringTunings[baseString][((stringTunings[baseString].indexOf(notes[baseNote]) + intervals.indexOf(intervals[baseInterval]) + 1) % stringTunings[baseString].length)])
    }

    function handleFretClick(e, note, string) {
        let baseString = parseInt(selectedString.charAt(selectedString.length -1))
        if (isPlayingRef.value) {
            let correctNote = stringTunings[baseString][((stringTunings[baseString].indexOf(highlightedNote) + intervals.indexOf(selectedInterval) + 1) % stringTunings[baseString].length)]
            let validStrings = [baseString-2, baseString-1, baseString, baseString+1, baseString+2].map(num => num.toString())
            if ((note === correctNote) && validStrings.includes(string.toString())) {
                getRandomNote();
                setScore(score + 1);
            }
        }
    }

    function handleReset() {
        setGameStateText("Start");
        setGameModeText("Disabled");
        isPlayingRef.value = false;
        setHighlightedNote(null);
        setSelectedString(null);
        setSelectedNote(null);
        setLearningMode(false);
        setSelectedInterval(null);
        setScore(0);
        setTimerKey(uuidv4());

    }

    function handleLearningModeChange() {
        setLearningMode(!learningMode);
        if (gameModeText === "Disabled") {
            setGameModeText("Enabled")
        } else {
            setGameModeText("Disabled")
        }
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
            <p className={styles.Selection}>Interval: {(selectedInterval) || null} {/*Semitone: {(intervals.indexOf(selectedInterval) === -1 ? null : intervals.indexOf(selectedInterval) + 1)*/}</p>
            <Timer key={timerKey} className="Timer" minutes={timerMinutes} seconds={0} reset={reset}
                   playing={isPlayingRef.value}/>
            <Fretboard
                tuning={selectedTuning.toReversed()}
                highlightedNote={highlightedNote}
                selectedString={selectedString}
                selectedNote={selectedNote}
                handleClick={handleFretClick}
                learningMode={learningMode}
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
                <button className={styles.learningModeButton} onClick={handleLearningModeChange}>Learning Mode: {gameModeText}</button>
                <button className={styles.Fill}></button>
                <button className={styles.StartButton} onClick={handleClick}>{gameStateText}</button>
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
const intervals = ["Minor Second (m2)", "Major Second (M2)", "Minor Third (m3)", "Major Third (M3)", "Perfect Fourth (P4)", "Tritone (TT)",
                           "Perfect Fifth (P5)", "Minor Sixth (m6)", "Major Sixth (M6)", "Minor Seventh (m7)", "Major Seventh (M7)", "Octave (P8)"]

function generateString(note) {
    return notes.slice(notes.indexOf(note) + 1).concat(notes.slice(0, notes.indexOf(note) + 1));
}