import { NoteTool } from '../../Tools/NoteTool/NoteTool.jsx';
import { IntervalTool } from '../../Tools/IntervalTool/IntervalTool.jsx'
import { v4 as uuidv4 } from 'uuid';
import styles from './ToolsPage.module.scss'

export function ToolsPage() {
    return (
        <div className={styles.Tools}>
            <NoteTool className={styles.Tool} key={uuidv4()}></NoteTool>
            <IntervalTool className={styles.Tool} key={uuidv4()}></IntervalTool>
        </div>
    )
}