import React from 'react';
// import  "./FontAwesome.css";



const FontAwesome = ({ icon , family = 'fab'}) => <i className={family +  ' fa-' + icon}/>;


export default FontAwesome;