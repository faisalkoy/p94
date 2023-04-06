// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA0U2NkkUyC0esY2YoxaiNW-S0_C6krF1s",
      authDomain: "lets-chat-web-app-7c721.firebaseapp.com",
      projectId: "lets-chat-web-app-7c721",
      storageBucket: "lets-chat-web-app-7c721.appspot.com",
      messagingSenderId: "931009743896",
      appId: "1:931009743896:web:e421d7c2566089b90a076d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
