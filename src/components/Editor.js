import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

import { Controlled } from 'react-codemirror2';



const Editor = ({ displayName,language,value,onChange }) => {

    const [open, setOpen] = useState(true)

    function handleChange(editor,data,value){
        onChange(value);
    }
    return (
        <div className={`editor-container ${open? '':'collapsed'}`}>
            <div className='editor-title'>
                {displayName}
                <button  className='expand-btn' onClick={()=>setOpen(prevOpen => !prevOpen)}>▬</button>
            </div>
            <Controlled
                value={value}
                onBeforeChange={handleChange}
                className='code-mirror-wrapper'
                options={{
                    lineNumbers:true,
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material'
                }}
            />
        </div>
    )
}

export default Editor