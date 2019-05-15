import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { Link } from '@reach/router';
import { closeNotification } from '../redux/actions';
// import FontAwesome from './FontAwesome';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function Notify({notifications = []}) {

    return notifications.map(notif => {
        const handleClose = (id) => closeNotification(id)
        return (
            <Snackbar
                key={notif.id}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={!!notif}
                autoHideDuration={6000}
                onClose={() => handleClose(notif.id)}
                ContentProps={{
                    'aria-describedby': `notify-${notif.id}`,
                }}
                message={<span id={`notify-${notif.id}`}>{notif.text}</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => handleClose(notif.id)}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        )
    })

}
export default connect(state => ({ notifications: state.notifications }))(Notify);
