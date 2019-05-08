import React from 'react';
import './Avatar.scss';
import ImageAvatar from './ImageAvatar'
import LetterAvatar from './LetterAvatar'

const Avatar = ({name, src}) => (
 <>
  { src ? 
            <ImageAvatar altFromParent={name} srcFromParent={src} />
            : <LetterAvatar userFromParent={name} /> }
 </>
)
export default Avatar