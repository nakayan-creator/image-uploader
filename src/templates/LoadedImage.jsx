import React, {useEffect} from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
    box: {
        maxWidth: 600,
        margin: ' 0 auto',
        border: '1px solid black',
        borderRadius: 5,
        // margin: 20,
        boxShadow: 20,
        padding: 40,
    },
})

const LoadedImage = (props) => {
    const classes = useStyles()
    console.log(props.image[0].path);


    return (
        <div className='inner'>
            <Box className={classes.box}>
                <h1>Uploaded Successfully</h1>
                <img src={props.image[0].path} alt=""/>
                <p>{props.image[0].path}</p>
            </Box>
        </div>
    )
}

export default LoadedImage;