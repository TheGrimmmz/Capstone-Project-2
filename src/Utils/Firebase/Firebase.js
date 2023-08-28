import {initializeApp} from 'firebase/app';
import {getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
    } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ43ZAo-Hl1QIpF_SqePsHING7J9cp_uM",
    authDomain: "capstone-db-d2878.firebaseapp.com",
    projectId: "capstone-db-d2878",
    storageBucket: "capstone-db-d2878.appspot.com",
    messagingSenderId: "314734173580",
    appId: "1:314734173580:web:2df5cf3047cbde142d8aa9"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const addCollection = async (collectionKey, addObjs) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    addObjs.forEach((obj) => {
        const docRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(docRef, obj)
    });
    await batch.commit();
    console.log('Done');
}

export const getCategories = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

export const createUserFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInformation
            })
        } catch(e){
            console.log('error', e.message)
        }

        return userDocRef
    }
}

export const createAuthUserEmailPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async() => await signOut(auth)

export const onStateChanged = (callback) => onAuthStateChanged(auth, callback)
