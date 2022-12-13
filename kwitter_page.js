const firebaseConfig = {
    apiKey: "AIzaSyDHPH-wzm6LfLClPCJKm-olcFQJXb80s1o",
    authDomain: "project-94-67e08.firebaseapp.com",
    databaseURL: "https://project-94-67e08-default-rtdb.firebaseio.com",
    projectId: "project-94-67e08",
    storageBucket: "project-94-67e08.appspot.com",
    messagingSenderId: "1006079455352",
    appId: "1:1006079455352:web:85d8718124e2fe349cbd8d",
}

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
msg1 = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
   name:user_name,
   message:msg1,
   like:0
});
document.getElementById("msg").value="";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
   } });  }); }
getData();
