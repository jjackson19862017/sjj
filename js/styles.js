// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  function ground() {
    var tl = new TimelineMax({
      repeat: -1,
    });

    tl.to("#ground", 20, {
      backgroundPosition: "1301px 0px",
      force3D: true,
      rotation: 0.01,
      z: 0.01,
      autoRound: false,
      ease: Linear.easeNone,
    });

    return tl;
  }

  function clouds() {
    var tl = new TimelineMax({
      repeat: -1,
    });

    tl.to("#clouds", 52, {
      backgroundPosition: "-2247px bottom",
      force3D: true,
      rotation: 0.01,
      z: 0.01,
      //autoRound:false,
      ease: Linear.easeNone,
    });

    return tl;
  }

  var masterTL = new TimelineMax({
    repeat: -1,
  });

  // window load event makes sure image is
  // loaded before running animation
  window.onload = function () {
    masterTL
      .add(ground(), 0)
      .add(clouds(), 0)
      .timeScale(0.7)
      .progress(1)
      .progress(0)
      .play();
  };

  // Set the date we're counting down to
  var countDownDate = new Date("Nov 25, 2020 12:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="demo"
    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
});
