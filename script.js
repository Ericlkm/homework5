// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $("#clearbtn").click(function(){
   localStorage.clear()
  })

  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  let saveBtn1 = document.querySelector(".btn1");
  let saveBtn2 = document.querySelector(".btn2");
  let saveBtn3 = document.querySelector(".btn3");

  let textBox = document.querySelector(".description");
  let textBox2 = document.querySelector(".description2");
  let textBox3 = document.querySelector(".description3");

  
  textBox.textContent = localStorage.getItem("9am")
  textBox2.textContent = localStorage.getItem("10am")
  textBox3.textContent = localStorage.getItem("11am")

  saveBtn1.addEventListener("click", function(){
    localStorage.setItem("9am", textBox.value);
    textBox.textContent = localStorage.getItem("9am")
  textBox.textContent = textBox.value;
  })
  
saveBtn2.addEventListener("click", function(){
    localStorage.setItem("10am", textBox2.value);
    textBox2.textContent = localStorage.getItem("10am")
  textBox2.textContent = textBox2.value;
 })

 saveBtn3.addEventListener("click", function(){
  localStorage.setItem("11am", textBox3.value);
  textBox3.textContent = localStorage.getItem("11am")
  textBox3.textContent = textBox3.value;
})
  
  // TODO: Add code to display the current date in the header of the page.
  var currentDate = new Date()
  $("#currentDay").text(currentDate);

  