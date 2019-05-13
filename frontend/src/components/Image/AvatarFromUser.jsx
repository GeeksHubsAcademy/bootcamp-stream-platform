import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

import './AvatarFromUser.scss';

var apiImageUrl = 'http://localhost:3001/uploads/profilePics/';

const AvatarFromUser = ({ user = {} }) => {

    return (
        <Avatar
            src={user.imagePath && (apiImageUrl + user.imagePath)}
            className="AvatarFromUser"
        >
            {user.name && user.name[0] + user.name[1]}
        </Avatar>

    )
}


export default AvatarFromUser
