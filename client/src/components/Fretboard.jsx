import { useEffect, useState } from 'react';
export function Fretboard({ tuning, selectedString, handleClick }) {

    switch(selectedString) {
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
    for (let i=0; i<tuning.length; i++) {
        strings[i] = generateString(tuning[i]).map((note, index) => 
            <>
                <th note={note}
                    className={`Fret${index + 1}`}
                    string={`String${i}`}
                    onClick={(evt) => handleClick(evt, note, i)}>
                    {<span className={"Circle"}></span>}</th>
            </>);
    }

    return (
        <>
            <div className='FretboardBody'>
                <table>
                    <tbody>
                    <tr className='String1'>
                        {strings[0]}
                    </tr>
                    <tr className='String2'>
                        {strings[1]}
                    </tr>
                    <tr className='String3'>
                        {strings[2]}
                    </tr>
                    <tr className='String4'>
                        {strings[3]}
                    </tr>
                    <tr className='String5'>
                        {strings[4]}
                    </tr>
                    <tr className='String6'>
                        {strings[5]}
                    </tr>
                    </tbody>
                </table>
                <ul className="StringTuning">
                    <li style={(selectedString === "String0") ? {color: "#fcba03"} : null} id="String1">{tuning[0]}</li>
                    <li style={(selectedString === "String1") ? {color: "#fcba03"} : null} id="String2">{tuning[1]}</li>
                    <li style={(selectedString === "String2") ? {color: "#fcba03"} : null} id="String3">{tuning[2]}</li>
                    <li style={(selectedString === "String3") ? {color: "#fcba03"} : null} id="String4">{tuning[3]}</li>
                    <li style={(selectedString === "String4") ? {color: "#fcba03"} : null} id="String5">{tuning[4]}</li>
                    <li style={(selectedString === "String5") ? {color: "#fcba03"} : null} id="String6">{tuning[5]}</li>
                </ul>
            </div>

            <ul key="id" className="FretNumbers">
              <li id="fret1">1</li>
              <li id="fret2">2</li>
              <li id="fret3">3</li>
              <li id="fret4">4</li>
              <li id="fret5">5</li>
              <li id="fret6">6</li>
              <li id="fret7">7</li>
              <li id="fret8">8</li>
              <li id="fret9">9</li>
              <li id="fret10">10</li>
              <li id="fret11">11</li>
              <li id="fret12">12</li>
            </ul>
        </>
    )
}

function generateString(note) {
    return notes.slice(notes.indexOf(note) + 1).concat(notes.slice(0, notes.indexOf(note) + 1));
}

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
