function rotateClockHands() {
    const date = new Date();
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourRotation = 30 * hours + 0.5 * minutes;
    const minuteRotation = 6 * minutes + 0.1 * seconds;
    const secondRotation = 6 * seconds;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }

  setInterval(rotateClockHands, 1000);