const firebaseConfig = {
    apiKey: "AIzaSyDSsxZRVsnz01CNXCd5LuoE8aDPfXldvRg",
    authDomain: "project-kwitter-4fd2f.firebaseapp.com",
    databaseURL: "https://project-kwitter-4fd2f-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-4fd2f",
    storageBucket: "project-kwitter-4fd2f.appspot.com",
    messagingSenderId: "185626113287",
    appId: "1:185626113287:web:bf9b41ea88f36d871101a2"
  };
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 } });  }); }
getData();


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push(
        {
              name: user_name,
              message: msg,
              like: 0
        }
  );
  document.getElementById("msg").value = "";
}