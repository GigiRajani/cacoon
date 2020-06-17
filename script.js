// Document ready

$(document).ready(function() {
	console.log('document ready');
	quizApp.init();
});
// name spacing 
const quizApp = {};
//const quizApp1 = {};
let correctQuestions = [];
let wrongQuestions = [];






// App function here //
  
quizApp.acceptChange = function() {

  // ****** Event Listener for Question 1 begins here ***** //
// add event listener for checked or click of input
    //listen for for a radio button and when submit is clicked prevent from refreshing


$("button[type='submit']").on('click', function(value) {
      value.preventDefault(); 


// take value from radio button and store it in a variable
        const radVal = $("input[name='question-1']:checked").val();

// if statement for if answer is correct
        if (radVal === 'q1-ans-d') {

// disable question correct
          $('#q1').prop('disabled', true);

// pop up for correct question
          alert("Correct Answer, now move to question 2!")

//update array for correctQuestions
          correctQuestions.push('Question 1')
// disable question wrong
        } else {
          $('#q1').prop('disabled', true);
//pop up for wrong question
          alert("Wrong Answer, Answer is D, review Chapter 1, now move to question 2!")

//update array for wrongQuestions
          wrongQuestions.push('Question 1')
        }

//correct questions insert converted array item as string to p
        $('.correctQuestions').text(`Correct Questions: ${correctQuestions.toString()}` );

// wrong questions insert converted array item as string to p

        $('.wrongQuestions').text(`Wrong Questions: ${wrongQuestions.toString()}` );

        $('.tally').text(`Total ${correctQuestions.length.toString()} /10` );


  })

  // ****** Event Listener for Question 1 ENDS here ***** //

  // ****** Event Listener for Question 2 begins here ***** //

  $("button[type='submit2']").on('click', function(value) {
    value.preventDefault(); 


// take value from radio button and store it in a variable
      const radVal = $("input[name='question-2']:checked").val();


// if statement for if answer is correct
      if (radVal === 'q2-ans-b') {

// disable question correct
        $('#q2').prop('disabled', true);

// pop up for correct question
        alert("Correct Answer, now move to question 3!")

//update array for correctQuestions
        correctQuestions.push(' Question 2')
// disable question wrong
      } else {
        $('#q2').prop('disabled', true);
//pop up for wrong question
        alert("Wrong Answer, Answer is B, review Chapter 2, now move to question 3!")

//update array for wrongQuestions
        wrongQuestions.push(' Question 2')
      }

//correct questions insert converted array item as string to p
      $('.correctQuestions').text(`Correct Questions: ${correctQuestions.toString()}` );

// wrong questions insert converted array item as string to p

      $('.wrongQuestions').text(`Wrong Questions: ${wrongQuestions.toString()}` );


      $('.tally').text(`Total ${correctQuestions.length.toString()} /10` );
})

// Event Listener for Question 2 Ends Here //

// **** Event listener for Question 3 *** //
$("button[type='submit3']").on('click', function(value) {
  value.preventDefault(); 


// take value from radio button and store it in a variable
    const radVal = $("input[name='question-3']:checked").val();


// if statement for if answer is correct
    if (radVal === 'q3-ans-c') {

// disable question correct
      $('#q3').prop('disabled', true);

// pop up for correct question
      alert("Correct Answer, now move to question 4!")

//update array for correctQuestions
      correctQuestions.push(' Question 3')
// disable question wrong
    } else {
      $('#q3').prop('disabled', true);
//pop up for wrong question
      alert("Wrong Answer, Answer is B, review Chapter 3, now move to question 4!")

//update array for wrongQuestions
      wrongQuestions.push(' Question 3')
    }

//correct questions insert converted array item as string to p
    $('.correctQuestions').text(`Correct Questions: ${correctQuestions.toString()}` );

// wrong questions insert converted array item as string to p

    $('.wrongQuestions').text(`Wrong Questions: ${wrongQuestions.toString()}` );


    $('.tally').text(`Total ${correctQuestions.length.toString()} /10` );
})

}

// new line


 
//5th listener great Work, change allert for end of quiz






quizApp.init = function() {
  console.log('init');
  quizApp.acceptChange();
  
}


