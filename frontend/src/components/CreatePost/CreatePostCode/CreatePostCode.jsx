import React from 'react';
import AceEditor from 'react-ace';

// import 'brace/mode/java';
import 'brace/mode/javascript';
// import 'brace/mode/markdown';
import 'brace/theme/github';
// import 'brace/theme/monokai';
import 'brace/ext/language_tools';


const Code = ({ onChange, ...props }) => (
  <AceEditor
    mode='javascript'
    theme='github'
    focus
    fontSize={18}
    width='100%'
    height='100%'
    enableBasicAutocompletion
    enableLiveAutocompletion
    highlightActiveLine={false}
    showGutter={true}
    setOptions={{
      printMargin: false,
      showLineNumbers: true,
      scrollPastEnd: true,
      showInvisibles: false,
      showPrintMargin: false,
      // enableEmmet: true,
      // enableBasicAutocompletion: true,
      // enableLiveAutocompletion: true,
    }}
    editorProps={{ $blockScrolling: Infinity }}
    onChange={value => {
      onChange(value);
    }}
    {...props}
  />
);

export default Code;
