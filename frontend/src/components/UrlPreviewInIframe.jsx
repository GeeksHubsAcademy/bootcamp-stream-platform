import React, { useState } from 'react';
import FontAwesome from './FontAwesome';
import './UrlPreviewInIframe.scss';
import ReactEmbedGist from 'react-embed-gist';

const UrlPreviewInIframe = ({ to, open = false }) => {
  const [opened, set] = useState(open);
  const [mode, setMode] = useState('');

  const isGist = to.match('https://gist.github.com') ? 'gist' : ''
  const isGithub = to.match('https://github.com/')
  function gist(url) {
    return url.replace('https://gist.github.com/', '')

  }
  return (
    <span className='UrlPreviewInIframe'>
      <FontAwesome icon='eye' onClick={() => set(!opened)} />
      {isGithub && <a href={to + '/fork'} target='_blank'><FontAwesome icon='code-branch' /></a> }
      {opened && <FontAwesome icon='expand' onClick={() => { !mode ? setMode('fullscreen') : setMode('') }} />}
      {opened && <FontAwesome icon='compress' onClick={() => { !mode ? setMode('pip') : setMode('') }} />}
      <div className={`embed ${isGist}  ${mode} ${opened && 'opened'}`}>

        {opened && <FontAwesome icon='times-circle' className='close' onClick={() => { set(!opened); setMode('') }} />}
        {
          isGist
            ? opened && <ReactEmbedGist className='gist' gist={gist(to)} />
            : opened && <iframe width='560' height='315' src={to} allowFullScreen />
        }

      </div>
    </span>
  );
};

export default UrlPreviewInIframe;
