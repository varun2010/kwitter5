function User_login(){
    user_id=document.getElementById("user_name").value;
    localStorage.setItem("user_id", user_id);
    window.location="kwitter_room.html";
}