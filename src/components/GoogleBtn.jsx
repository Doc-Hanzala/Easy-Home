import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { db } from "../firebase";
import { toast } from "react-toastify";

const GoogleBtn = () => {
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
    } catch (error) {
      toast.error("Something went fishy with google authentication");
    }
  };

  return (
    <button
      onClick={onClick}
      className="bg-slate-500 w-full rounded text-xl text-white uppercase py-2  hover:bg-slate-600 active:bg-green:700 transition-all my-3 shadow-md hover:shadow-lg flex justify-center items-center "
      type="button"
    >
      <FcGoogle className="text-2xl mx-3 bg-white rounded-full" /> continue with
      google
    </button>
  );
};

export default GoogleBtn;
