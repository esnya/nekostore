import firebase from 'firebase/app';

const FieldValue = firebase.firestore.FieldValue;
type FieldValue = firebase.firestore.FieldValue;

export function withUpdateTime<T>(
  data: T,
): T & {
  updateTime: FieldValue;
} {
  return {
    ...data,
    updateTime: FieldValue.serverTimestamp(),
  };
}

export function withTimestamps<T>(
  data: T,
): T & {
  createTime: FieldValue;
  updateTime: FieldValue;
} {
  return {
    ...withUpdateTime(data),
    createTime: FieldValue.serverTimestamp(),
  };
}
