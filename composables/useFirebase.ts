//https://firebase.google.com/docs/auth/web/start
import { async } from "@firebase/util";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
  } from "firebase/auth";
  


  export const gmailSignin = async()=>{
    const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
         // this.$store.commit('ON_AUTH_STATE_CHANGED_MUTATION')
          const router = useRouter();
          router.push("/");
          return result;
        //  console.log(this.$store.state.userData)
        })
        .catch((error) => {
          console.log(error);
        });
  }

  export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    // const userFB = useUser()
    firebaseUser.value = auth.currentUser;
    
  
  
    
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
      
      } else {
        //if signed out
        console.log("Signed Out")
      }
  
      firebaseUser.value = user;
      const CookieUser = useCookie('CookieUser',{maxAge:24 * 7 * 60 * 31,sameSite:"none",secure:true})
      CookieUser.value = JSON.stringify(user);
      
      // @ts-ignore
    });
  };
  
  export const signOutUser = async () => {
    
    const auth = getAuth();
    const result = await auth.signOut();
    const router = useRouter();
    router.push("/");
    return result;
  };