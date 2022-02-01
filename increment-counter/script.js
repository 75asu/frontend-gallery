// it will give a nodelist which is simillar to an array
const counters = document.querySelectorAll(".counter");

counters.forEach(counter =>{
  // putting initial value as 0
  counter.innerText = `0`;

  const updateCounter = () => {
    // it is present inside data-target attribute
    // it will give a string & it needs to be converted into an int
    // for this parseint / + / NumberConstructor
    const target = +counter.getAttribute("data-target");

    // to get the innerText that was set earlier
    const c = +counter.innerText;

    // to set how much do we want the int to increase
    const increment = target / 500;

    // to make sure the c is less than target
    if(c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;

      // to make no increase continuously
      // settimeout is there to show the increase animation
      setTimeout(updateCounter, 1);
    }
    else {
      counter.innerText = target;
    }
  }

  updateCounter();
});