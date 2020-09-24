import firebase from 'firebase/app'
import 'firebase/storage'
import {firebaseConfig} from './config'

firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()
export default firebase;