// Datepicker script

$( function() {
  $( "#datepicker" ).datepicker();
} );

function updateTimer(deadline){
  var time = deadline - new Date();
  return {
    'days': Math.floor( time/(1000*60*60*24) ),
    'hours': Math.floor( (time/(1000*60*60)) % 24 ),
    'minutes': Math.floor( (time/1000/60) % 60 ),
    'seconds': Math.floor( (time/1000) % 60 ),
    'total' : time
  };
}

function startTimer(id, deadline){
  var timerInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);

    clock.innerHTML = '<span>' + timer.days + '</span>'
                    + '<span>' + timer.hours + '</span>'
                    + '<span>' + timer.minutes + '</span>'
                    + '<span>' + timer.seconds + '</span>'

    var spans = clock.getElementsByTagName("span");
    animateClock(spans[3]);
    animateClock(spans[2]);
    animateClock(spans[1]);
    animateClock(spans[0]);

                    if(timer.total < 1){
                      clearInterval(timerInterval);
                      clock.innerHTML = "Time's Up!"
                    }

  }, 1000);
}

window.onload = function(){
  var deadline= new Date("April 25, 2018 17:15:00");
  startTimer("clock", deadline);
};
