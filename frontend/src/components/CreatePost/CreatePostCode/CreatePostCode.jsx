import React from 'react';
// import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';
import 'brace/theme/monokai';



const Code = ({ ...props }) => (
    <AceEditor
    mode='javascript'
    theme='monokai'
    focus
    fontSize={18}
    width='100%'
    height='100%'
    setOptions={{
        enableEmmet:true,
        printMargin:true,
        scrollPastEnd:true,
        showInvisibles:false,
         showPrintMargin:false,
        showLineNumbers:true,
         enableBasicAutocompletion:true,
        enableLiveAutocompletion:true
    }}
    editorProps={{ $blockScrolling: true }}
    {...props} />
);

export default Code;
