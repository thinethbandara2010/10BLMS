function toggleView(e) {
    console.log(e.target);
    if (e.target.classList.contains("list-layout")) {
      console.log("list layout");
      document.querySelector(".toggle-btns").children[0].classList.add("active");
      document
        .querySelector(".toggle-btns")
        .children[1].classList.remove("active");
  
      document.querySelector(".class-container").classList.add("list");
      document.querySelector(".class-container").classList.remove("grid");
    } else if (e.target.classList.contains("grid-layout")) {
      console.log("grid layout");
      document
        .querySelector(".toggle-btns")
        .children[0].classList.remove("active");
      document.querySelector(".toggle-btns").children[1].classList.add("active");
  
      document.querySelector(".class-container").classList.remove("list");
      document.querySelector(".class-container").classList.add("grid");
    }
  }
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  const dayNumber = new Date().getDate();
  const year = new Date().getFullYear();
  const dayName = new Date().toLocaleString("default", { weekday: "long" });
  const monthName = new Date().toLocaleString("default", { month: "long" });
  
  document.querySelector(".month-name").innerHTML = monthName;
  document.querySelector(".day-name").innerHTML = dayName;
  document.querySelector(".date-number").innerHTML = dayNumber;
  document.querySelector(".year").innerHTML = year;
  