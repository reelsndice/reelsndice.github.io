var firebaseConfig = {
    apiKey: "AIzaSyDG3tARnIpwSsGaKVLC6yNwPdm8ZRWV6YU",
    authDomain: "reelsndice-main.firebaseapp.com",
    projectId: "reelsndice-main",
    storageBucket: "reelsndice-main.appspot.com",
    messagingSenderId: "805611676345",
    appId: "1:805611676345:web:fd361a740182afc99d3168",
    measurementId: "G-S48T2EZKK3",
    databaseURL: "https://reelsndice-main.firebaseio.com",
};


jQuery(document).ready(function() {
    firebase.initializeApp(firebaseConfig);
  
    var messagesRef = firebase.database().ref('contact-messages');
  
    // Listen for form submit
    document.getElementById('contactForm').addEventListener('submit', submitForm);
    
    // Submit form
    function submitForm(e){
        e.preventDefault();
    
        //Get value
        var name = getInputVal('name');
        var company = getInputVal('company');
        var email = getInputVal('email');
        var phone = getInputVal('phone');
        var message = getInputVal('message');
    
        // Save message
        saveMessage(name, company, email, phone, message);
    
        // Show alert
        document.querySelector('.formMsg').style.display = 'block';
    
        // Hide alert after 3 seconds
        setTimeout(function(){
        document.querySelector('.formMsg').style.display = 'none';
        },3000);
    
        // Clear form
        document.getElementById('contactForm').reset();
    }
    
    // Function to get form value
    function getInputVal(id){
        return document.getElementById(id)?.value || 'undefined';
    }
    
    // Save message to firebase
    function saveMessage(name, company, email, phone, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
        });
    }
});