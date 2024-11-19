import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss'

export function NavBar() {
    return (
        <div className={styles.nav}>
            <NavLink className={styles.active} style={{fontSize: 35, paddingTop: 15}} to="/">GuitarTheory</NavLink>
            <NavLink to="/scales">Scales</NavLink>
            <NavLink to="/chords">Chords</NavLink>
            <NavLink to="/fretboard-trainer">Fretboard Trainer</NavLink>
        </div>
    )
}