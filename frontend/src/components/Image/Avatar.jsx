import React from 'react';
import './Avatar.scss';
import ImageAvatar from './ImageAvatar'
import LetterAvatar from './LetterAvatar'

var apiImageUrl = 'http://localhost:3001/uploads/profilePics/';

const Avatar = ({ name, src, user }) => {
    const _src = src || (user && apiImageUrl + user.imagePath)
    const _name = name || (user && user.name) || 'Z'
    return (
        <>
            {user ?
                <ImageAvatar altFromParent={_name} srcFromParent={_src} />
                : <LetterAvatar userFromParent={_name} />}
        </>
    )
}


export default Avatar