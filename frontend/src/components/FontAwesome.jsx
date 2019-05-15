import React from 'react';
// import  "./FontAwesome.css";



const FontAwesome = ({ className = '', icon, family = 'fas', ...rest }) => <i {...rest} className={className +' '+ family + ' icon  fa-' + icon} />;


export default FontAwesome;