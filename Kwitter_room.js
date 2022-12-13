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

  user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome " + user_name;
    function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
             });
             localStorage.setItem("room_name",room_name);
             window.location= "kwitter_page.html";
    }

function getData() 
{firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) 
 {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;



      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
window.location= "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}