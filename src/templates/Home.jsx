import React, {useCallback, useState} from 'react'
import {PrimaryButton} from './index'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
// import {bcimage} from '../../public/static/images/cards/image.svg'
// import {storage} from '../firebase/index'
import {IsLoadingImage} from './index'
import logo from '../assets/image/image.svg'

const useStyles = makeStyles((theme) => ({
    box: {
        maxWidth: 600,
        margin: ' 0 auto',
        borderRadius: 10,
        boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, 0.2)',
        padding: 40,
    },
    container: {
        maxWidth: 400,
        maxHeight: 400,
        border: '2px dotted #97bef4',
        borderRadius: 10,
        margin: '0 auto',
        padding: 0,
    },
    img: {
        marginTop: 40,
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#2f80ed',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#2fa2ed',
            boxShadow: '0 8px 10px -2px rgba(0, 0, 0, 0.5)',
        }
    },
    title: {
        [theme.breakpoints.up('sm')]: {
            fontSize: '2rem'
        },
        color: '#4f4f4f',
    }
}))

const Home = (props) => {
    const classes = useStyles()
    
    return (
        <div className='inner'>
            <Card className={classes.box}>
                <h1 className={classes.title}>Upload Image</h1>
                <p style={{color: '#828282'}}>File shoud be Jpeg, Peg...</p>
                <form>
                    <Box className={classes.container} onClick={props.uploadImage} onDrop={props.uploadImageDrop} >
                        <img src={logo} className={classes.img} />
                        <input 
                            className='image_upload_display' 
                            type="file" required id='image' 
                        />
                        <p style={{color: '#828282'}}>drag & drop file here</p>
                    </Box>
                    <p style={{color: '#828282'}}>or</p>
                    <Button className={classes.btn} component='label'>
                        choose a file
                        <input 
                            className='image_upload_display' 
                            type="file" required id='image' 
                            onChange={props.uploadImageInput}
                        />
                    </Button>
                </form>
            </Card>   
        </div>
    )
}

export default Home;