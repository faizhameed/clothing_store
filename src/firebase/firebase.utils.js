import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyAHZUQKKca6Nj9qQEuzjeN3JgE_GOOk3y4",
    authDomain: "clothingstore-db-74c09.firebaseapp.com",
    databaseURL: "https://clothingstore-db-74c09.firebaseio.com",
    projectId: "clothingstore-db-74c09",
    storageBucket: "",
    messagingSenderId: "121175846361",
    appId: "1:121175846361:web:abe6d8609026a0c1"
  };

export const createUserProfileDocument = async (userAuth,additionalData)=>{
if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();
if(!snapShot.exists){
  const {displayName,email}= userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  } catch (error) {
    console.log("error while setting user in dataBase:", error)
  }

}

return userRef;
}

  firebase.initializeApp(config); 
  export const addCollectionsAndDocuments =async (collectionKey,objectsToAdd)=>{
    const collectionRef =firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch = firestore.batch();

    objectsToAdd.forEach(obj=>{
      const newDocRef= collectionRef.doc();
      batch.set(newDocRef,obj);
    })
   return await batch.commit()
  }

  export const convertCollectionsSnapshotToMap=(collections)=>{
    const transformedCollection =collections.docs.map(doc=>{
      const {title,items}=doc.data();
      return {
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    })
   return transformedCollection.reduce((accum,collection)=>{
      accum[collection.title.toLowerCase()]=collection;
      return accum;
    },{})
  }
  export const auth = firebase.auth();
  export const firestore =  firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt:'select_account'});
  export const  signInWithGoogle =()=> auth.signInWithPopup(googleProvider);

  export default firebase;