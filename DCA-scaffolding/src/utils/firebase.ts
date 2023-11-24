import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDocs } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const subiruserinfo =async (info:any) => {
    await setDoc(doc(db, "userinfo", info), {
        nombre: nombre,
        color: color,
        letra: letra,
      });
        return userinfo
}



const traeruserinfo =async (info:any) => {
const q = query(collection(db, "userinfo"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc: any) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}