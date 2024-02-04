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
  let saveBtn4 = document.querySelector(".btn4");
  let saveBtn5 = document.querySelector(".btn5");
  let saveBtn6 = document.querySelector(".btn6");
  let saveBtn7 = document.querySelector(".btn7");
  let saveBtn8 = document.querySelector(".btn8");
  let saveBtn9 = document.querySelector(".btn9");


  let textBox = document.querySelector(".description");
  let textBox2 = document.querySelector(".description2");
  let textBox3 = document.querySelector(".description3");
  let textBox4 = document.querySelector(".description4");
  let textBox5 = document.querySelector(".description5");
  let textBox6 = document.querySelector(".description6");
  let textBox7 = document.querySelector(".description7");
  let textBox8 = document.querySelector(".description8");
  let textBox9 = document.querySelector(".description9");





  textBox.textContent = localStorage.getItem("9am")
  textBox2.textContent = localStorage.getItem("10am")
  textBox3.textContent = localStorage.getItem("11am")
  textBox4.textContent = localStorage.getItem("12pm")
  textBox5.textContent = localStorage.getItem("1pm")
  textBox6.textContent = localStorage.getItem("2pm")
  textBox7.textContent = localStorage.getItem("3pm")
  textBox8.textContent = localStorage.getItem("4pm")
  textBox9.textContent = localStorage.getItem("5pm")



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
  
saveBtn4.addEventListener("click", function(){
  localStorage.setItem("12pm", textBox4.value);
  textBox4.textContent = localStorage.getItem("12pm")
  textBox4.textContent = textBox4.value;
})

saveBtn5.addEventListener("click", function(){
  localStorage.setItem("1pm", textBox5.value);
  textBox5.textContent = localStorage.getItem("1pm")
  textBox5.textContent = textBox5.value;
})

saveBtn6.addEventListener("click", function(){
  localStorage.setItem("2pm", textBox6.value);
  textBox6.textContent = localStorage.getItem("2pm")
  textBox6.textContent = textBox6.value;
})

saveBtn7.addEventListener("click", function(){
  localStorage.setItem("3pm", textBox7.value);
  textBox7.textContent = localStorage.getItem("3pm")
  textBox7.textContent = textBox7.value;
})

saveBtn8.addEventListener("click", function(){
  localStorage.setItem("4pm", textBox8.value);
  textBox8.textContent = localStorage.getItem("4pm")
  textBox8.textContent = textBox8.value;
})

saveBtn9.addEventListener("click", function(){
  localStorage.setItem("5pm", textBox9.value);
  textBox9.textContent = localStorage.getItem("5pm")
  textBox9.textContent = textBox9.value;
})


  // TODO: Add code to display the current date in the header of the page.
  var currentDate = new Date()
  $("#currentDay").text(currentDate);

  