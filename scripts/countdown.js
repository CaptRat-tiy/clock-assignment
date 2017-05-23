let submitButton =  document.getElementById("submitButton")

submitButton.addEventListener("click", function (){
  countdown ();
  });

  function countdown() {
    let now = new Date()
    let inputYear = document.getElementById("inputYear").value;
    let inputMonth = +document.getElementById("inputMonth").value - 1;
    let inputDay = document.getElementById("inputDay").value;

    var customDate = new Date(inputYear, inputMonth, inputDay);

      var currentTime = now.getTime();
      var eventTime = customDate.getTime();
      var remTime = eventTime - currentTime;

      var s = Math.floor(remTime / 1000);
      var m = Math.floor(s / 60);
      var h = Math.floor(m / 60);
      var d = Math.floor(h / 24);
      var y = Math.floor(d / 365)

      h %= 24;
      m %= 60;
      s %= 60;

    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);
}
