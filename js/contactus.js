var firebaseConfig = {
    apiKey: "AIzaSyDG3tARnIpwSsGaKVLC6yNwPdm8ZRWV6YU",
    authDomain: "reelsndice-main.firebaseapp.com",
    projectId: "reelsndice-main",
    storageBucket: "reelsndice-main.appspot.com",
    messagingSenderId: "805611676345",
    appId: "1:805611676345:web:fd361a740182afc99d3168",
    measurementId: "G-S48T2EZKK3"
};

jQuery(document).ready(function() {
    firebase.initializeApp(firebaseConfig);
  
    //var messagesRef = firebase.database().ref('contact-messages');
    var db = firebase.firestore();
  
    // Listen for form submit
    //document.getElementById('contactForm').addEventListener('submit', submitForm);
    
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
        document.querySelector('.formMsgSubmit').disabled = true;
        document.querySelector('.formMsgSubmit').innerHTML = '<sapn>Please wait.....</sapn>';
    
        setTimeout(function(){
            document.querySelector('.formMsgSubmit').innerHTML = '<sapn>Thank you! We will get back to you soon.</sapn>';
        },1500);        

        setTimeout(function(){
            document.querySelector('.formMsgSubmit').innerHTML = '<sapn>Submit</sapn>';
            document.querySelector('.formMsgSubmit').disabled = false;
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
        // var newMessageRef = messagesRef.push();
        // newMessageRef.set({
        // name: name,
        // company: company,
        // email: email,
        // phone: phone,
        // message: message
        // });
        db.collection('contact-messages').add(
            {
                name: name,
                company: company,
                email: email,
                phone: phone,
                message: message
            }
        ).then((docRef) => {
            console.log(docRef.id)
        }).catch((error) => {
                console.log(error)
        }).finally(() => {
                console.log(`Finishing`)
        });
    }
});