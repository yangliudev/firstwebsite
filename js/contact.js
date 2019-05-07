// Initialize Firebase
var firebaseConfig = {
apiKey: "AIzaSyAZSfpbxPzi6eCFdvXItZUenmpFVUtLzrU",
authDomain: "mywebsite-273f3.firebaseapp.com",
databaseURL: "https://mywebsite-273f3.firebaseio.com",
projectId: "mywebsite-273f3",
storageBucket: "mywebsite-273f3.appspot.com",
messagingSenderId: "160757682581",
appId: "1:160757682581:web:2c60ce29d3dab71c"
};
firebase.initializeApp(firebaseConfig);

var feedbackRef = firebase.database().ref('feedbacks');

document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var email_address = getInputVal('email');
  var question = getInputVal('question');

  savefeedback(email_address, question);

  //document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('contactform').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function savefeedback(email_address, question){
  var newfeedbackRef = feedbackRef.push();
  newfeedbackRef.set({
    email_address: email_address,
    question: question
  });
}