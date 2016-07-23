var panel = $('#quiz-area');


$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#doneButton', function(e) {
  game.done();
});

$(document).on('click', '#restartButton', function(e) {
  game.restart();
});


//Question set
  var questions = [{
    question: "Who went back for more kisses in Snow White and the Seven Dwarfs?",
    choices: ["Grumpy", "Sleepy", "Dopey", "Happy"],
    correctAnswer: "Dopey"
  }, {
    question: "Who has large ears and flys?",
    choices: ["Goofy", "Tinkerbell", "Mickey", "Dumbo"],
    correctAnswer: "Dumbo"
  }, {
    question: "Who's real name is Eugene Fitzherbert?",
    choices: ["Genie", "Flynn", "Beast", "Prince Eric"],
    correctAnswer: "Flynn"
  }, {
    question: "Who has a lucky fin?",
    choices: ["Flounder", "Dory", "Ariel", "Nemo"],
    correctAnswer: "Nemo"
  }, {
    question: "Which princess lives with 7 small men?",
    choices: ["Snow White", "Aurora", "Belle", "Cinderella"],
    correctAnswer: "Snow White"
  }, {
    question: "Which of Pooh's friends has a special song about himself?",
    choices: ["Piglet", "Eeyore", "Tigger", "Roo"],
    correctAnswer: "Tigger"
  }, {
    question: "Which fairy wears all green?",
    choices: ["Rosetta", "Tinkerbell", "Fawn", "Periwinkle"],
    correctAnswer: "Tinkerbell"
  }, {
    question: "Which princess has talking household items?",
    choices: ["Jasmine", "Pocahontas", "Ariel", "Belle"],
    correctAnswer: "Belle"
  }, {
    question: "Who is Captain Hook's primary enemy?",
    choices: ["Peter Pan", "Smee", "Crocodile", "Jake"],
    correctAnswer: "Peter Pan"
  }, {
    question: "Which sidekick does the princess call a guppy?",
    choices: ["Nemo", "Squirt", "Flounder", "Sebastian"],
    correctAnswer: "Flounder"
  }];
  

var game = 
{
  correct:0,
  incorrect:0,
  counter:120,
  countdown: function()
  {
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0)
    {
      game.done();
    }
  },
  start: function() 
  {
    timer = setInterval(game.countdown, 1000);

    $('#timeRemainingDiv').prepend('<h2>Time Remaining: <span id="counter-number">120</span> Seconds</h2>');
    $('#start').remove();


   //for each question you will loop and add buttons and display each choice with jquery
    for (i=0; i < questions.length; i++) {
      var questionDiv = $("<div>");
      var p = $("<p>");
      p.text(questions[i].question);
      var choicesDiv = $("<div>");

      questionDiv.append(p)
      


      // var radioButton = document.createElement("INPUT");
      // radioButton.setAttribute("type", "radio");

      for (j=0; j < 4; j++) {
        choicesDiv.append('<input type ="radio" name="question'+i+'" value="' + questions[i].choices[j] + '"> ' + questions[i].choices[j])
        questionDiv.append(choicesDiv);
        $("#quiz-area").append(questionDiv);
      }

      

    }


  },
  done: function() 
  {

    for (i = 0; i < questions.length; i++) {
      $.each($('input[name="question'+i+'"]:checked'), function(){
        if (  $(this).val() == questions[i].correctAnswer ) {
          game.correct++;

        }
        else {
          game.incorrect++;
        }
      })
    };

    game.result();
    //for each questions if they answered correct
    //marked as checked if false well increment incorrect 

 
  },

  result: function() 
  {
    clearInterval(timer);
    $("#quiz-area").empty();
    $("#resultsDiv").append("Correct Answers: "+ game.correct + "<br />");
    $("#resultsDiv").append("Incorrect Answers: "+ game.incorrect);
  

    //the results of correct or incorrect go here
  },

  restart: function() 
  {
    game.correct = 0,
    game.incorrect = 0,
    game.counter = 120,
    $("#timeRemainingDiv, #resultsDiv").empty();
    game.start();

    //the results of correct or incorrect go here
  }




};