import React, { useState } from 'react';
import FontAwesome from './FontAwesome';
import './UrlPreviewInIframe.scss';

const UrlPreviewInIframe = ({ to, children, open = false }) => {
  const [opened, set] = useState(open);
  return (
    <span className='UrlPreviewInIframe'>
      <a href={to} target='_blank'>
        {children}
      </a>
      <FontAwesome icon='eye' onClick={() => set(!opened)} />
      <div  className={'embed-iframe '  + (opened && 'opened')}>
        {opened && <iframe width='560' height='315' src={to} frameborder='0' allowfullscreen />}
      </div>
    </span>
  );
};

export default UrlPreviewInIframe;
