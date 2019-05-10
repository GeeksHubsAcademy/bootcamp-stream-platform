import React from 'react';
// import  "./FontAwesome.css";



const FontAwesome = ({ icon , family = 'fas', ...rest}) => <i {...rest} className={family +  ' icon  fa-' + icon}/>;


export default FontAwesome;