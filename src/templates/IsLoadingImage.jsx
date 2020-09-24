import React from 'react'
import Box from '@material-ui/core/Box';
// import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import {LoadingLine} from './index'

const useStyles = makeStyles({
    box: {
        maxWidth: 600,
        margin: ' 0 auto',
        border: '1px solid black',
        borderRadius: 5,
        // margin: 20,
        boxShadow: 20,
        padding: 40,
    },
    // root: {
    //     width: '100%',
    // },
})


const IsLoadingImage = (props) => {
    const classes = useStyles()

    setTimeout(() => {
        props.setIsLoading(false)
        props.setAfterLoading(true)
    }, 3000);


    return (
        <div className='inner'>
            <Box className={classes.box}>
                <h1>Uploading</h1>
                <LoadingLine/>
            </Box>
        </div>
    )
}

export default IsLoadingImage