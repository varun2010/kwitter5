//YOUR FIREBASE LINKSvar firebaseConfig = {
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
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            likes : 0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         user_id=message_data["name"];
         message=message_data["message"];
         like=message_data["likes"];
         name_with_tag="<h4>"+user_id+"<img src='tick.png' class='user_tick'></h4>";
         message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button>";
         row=name_with_tag+message_with_tag+like_button+span_with_tag;
         document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("room");
      localStorage.removeItem("user_id");
      window.location="index.html";
}
function update_like(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            likes : updated_likes
      });   
}
