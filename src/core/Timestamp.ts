import firebase from 'firebase/app';

type Timestamp = firebase.firestore.Timestamp;
export default firebase.firestore.Timestamp;

export interface Timestamps {
  createTime: Timestamp;
  updateTime: Timestamp;
}
