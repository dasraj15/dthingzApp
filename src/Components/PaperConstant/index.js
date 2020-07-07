import React from 'react';
import { Paper, makeStyles, Typography } from '@material-ui/core';
import LeftImage from '../../Images/leftscreen.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: 'auto auto',
            width: '50%',
            height: theme.spacing(60),
        },
    },
}));

const styles = {
    paperContainer: {
        backgroundImage: "url(https://www.udacity.com/assets/iridium/images/shared/school-of/programming.jpg)"
    }
};

const leftStyle = {
    paperContainer: {
        backgroundImage: "url(https://www.wallcover.com/media/catalog/product/cache/5/image/b070ed80d8313f2b57d9bcdf5b3c986c/1/2/125228a_1.jpg)"
    }
}

const PaperConstant = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper style={leftStyle.paperContainer} variant="outlined" square>
                <div style={{ margin: '15%' }}>
                    <Typography color='inherit' variant="h2" style={{ textAlign: 'center' }}>
                        dthingz Labs!
                    </Typography>
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center', textJustify: 'inter-word', width: '50%', margin: 'auto auto' }}>
                        Spend your time learning new technologies during this period.
                        Explore courses down here!
                    </Typography>
                </div>
            </Paper>
            <Paper style={styles.paperContainer} variant="outlined" square />
        </div>
    )

}

export default PaperConstant;