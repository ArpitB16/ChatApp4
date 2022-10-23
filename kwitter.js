const firebaseConfig = {
    apiKey: "AIzaSyDSsxZRVsnz01CNXCd5LuoE8aDPfXldvRg",
    authDomain: "project-kwitter-4fd2f.firebaseapp.com",
    databaseURL: "https://project-kwitter-4fd2f-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-4fd2f",
    storageBucket: "project-kwitter-4fd2f.appspot.com",
    messagingSenderId: "185626113287",
    appId: "1:185626113287:web:bf9b41ea88f36d871101a2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}