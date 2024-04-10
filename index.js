 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
 import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCkyE2PYsm-EUivpT_Bn8_G7oBjoQwXnwE",
   authDomain: "fir-http5214.firebaseapp.com",
   projectId: "fir-http5214",
   storageBucket: "fir-http5214.appspot.com",
   messagingSenderId: "239481290928",
   appId: "1:239481290928:web:89b49818964a161a29bb75",
   measurementId: "G-T3E6V6E9X6"
 };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

const messages = ref(database,'/messages');

onValue(messages, (snapshot) => {

    //console.log(snapshot);

    const ul = document.getElementById("messages");

    ul.replaceChildren();
    snapshot.forEach((childSnapShot)=>{

        const childKey = childSnapShot.key;
        const childData = childSnapShot.val();

        console.log(childKey);
        console.log(childData);

        const text = document.createTextNode(childData.message);
        const timeStamp = document.createTextNode(Date(childData.createdAt));
        
        const liText = document.createElement('li');
        const liTimeStamp = document.createElement('li');
        liText.appendChild(text);
        liTimeStamp.appendChild(timeStamp);
        ul.appendChild(liTimeStamp);
        ul.appendChild(liText);

    });

},{
    onlyOnce: false
});