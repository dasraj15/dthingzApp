import React, { Component } from 'react';
import { Paper, CardMedia, Card, CardActionArea, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default class PaperConstant extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                {/* <Paper elevation={0} />
                <Paper /> */}

                <Card>
                    <CardActionArea>
                        <CardMedia
                            className={useStyles.media}
                            image="https://res.cloudinary.com/drox4mex4/image/upload/c_scale,e_art:athena,h_200,r_16,w_200/v1579166570/pythonlogo.png"
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                </Card>
            </div>
        )
    }
}