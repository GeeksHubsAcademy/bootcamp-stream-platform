import React from 'react';
// import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';



const Code = ({...props}) => (
    <AceEditor
    mode='javascript'
    theme='github'
    editorProps={{ $blockScrolling: true }}
    {...props}
     />
);

export default Code;
