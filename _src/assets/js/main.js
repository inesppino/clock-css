'use strict';

const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secDegrees = ((seconds/60) * 360 + 90);
  secondHand.style.transform = `rotate(${secDegrees}deg)`;

  const hour = now.getHours();
  const hourDegree = ((hour/12) * 360 + 90);
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  const mins = now.getMinutes();
  const minDegree = ((mins/60) * 360 + 90);
  minHand.style.transform = `rotate(${minDegree}deg)`;

  if(secDegrees === 90 || hourDegree === 90 || minDegree === 90) {
    secondHand.style.transition = "0s";
    hourHand.style.transition = "0s";
    minHand.style.transition = "0s";
  } else {
    secondHand.style.transition = "all 0.5s";
    hourHand.style.transition = "all 0.5s";
    minHand.style.transition = "all 0.5s";
  }
}

setInterval(setDate, 1000);