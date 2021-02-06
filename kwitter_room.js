var firebaseConfig = {
    apiKey: "AIzaSyC5bbGKkbqsdWh12Iln7K4ophBF-BkKPEM",
    authDomain: "kwitter-project-3e24e.firebaseapp.com",
    databaseURL: "https://kwitter-project-3e24e-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-3e24e",
    storageBucket: "kwitter-project-3e24e.appspot.com",
    messagingSenderId: "674952562604",
    appId: "1:674952562604:web:8de17b39cca6629b039c09",
    measurementId: "G-2ERS3F2RV0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_id");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function add_room(){
        room_name=document.getElementById("new_room").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location="message_room.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log(Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        });});}
  getData();
  
  function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location="message_room.html";
  }
  function logout(){
        localStorage.removeItem("room");
        localStorage.removeItem("user_id");
        window.location="index.html";
  }