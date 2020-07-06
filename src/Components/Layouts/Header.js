import React from 'react';
import { Toolbar, Typography, Button, AppBar } from '@material-ui/core';

export default props =>
    <AppBar position="static" style={{ background: '#2E3B55' }}>

        <Toolbar>
            <Typography variant="h4" color='inherit' style={{ flexGrow: 1 }}>dthingz Labs</Typography>
        </Toolbar>

    </AppBar>