import React from 'react'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

// import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import {LoadingLine} from './index'

const useStyles = makeStyles({
    box: {
        maxWidth: 600,
        margin: ' 0 auto',
        borderRadius: 5,
        boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, 0.2)',
        padding: 40,
        textAlign: 'center'
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
            <Card className={classes.box}>
                <h1 style={{color: '#4f4f4f'}} > Uploading </h1>
                <LoadingLine />
            </Card>
        </div>
    )
}

export default IsLoadingImage