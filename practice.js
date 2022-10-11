
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDX7NaiHWTR-NMOm1w2FtukicRR1fUZ03I",
  authDomain: "pruebaclase-6d869.firebaseapp.com",
  databaseURL: "https://pruebaclase-6d869-default-rtdb.firebaseio.com",
  projectId: "pruebaclase-6d869",
  storageBucket: "pruebaclase-6d869.appspot.com",
  messagingSenderId: "92381331115",
  appId: "1:92381331115:web:3ed75490568ff18d9881ee"
};

// Initialize Firebase
firebase= initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


