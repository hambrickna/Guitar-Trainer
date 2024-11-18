import { NoteTool } from '../NoteTool/NoteTool.jsx';
import { v4 as uuidv4 } from 'uuid';

export function ToolsPage() {
    return (
        <>
            <br />
            <br />
            <NoteTool key={uuidv4()}></NoteTool>
        </>
    )
}