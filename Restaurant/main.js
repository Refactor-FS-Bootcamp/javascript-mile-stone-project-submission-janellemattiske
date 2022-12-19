
let booking = document.getElementById("Book");
booking.addEventListener("click", function(e) {

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let date = document.getElementById("date");
  let time = document.getElementById("time");
  let people = document.getElementById("people");

  
    if (name.value == "" || email.value == "") {
        return alert("Please Enter Your Name and Email")
    }

  let bookedBy = localStorage.getItem("bookedBy");
  if (bookedBy == null) {
    reservation = [];
  } else {
    reservation = JSON.parse(bookedBy);
  }
  let customer = {
    name: name.value,
    email: email.value,
    date:date.value,
    time:time.value,
    people:people.value
  }
  reservation.push(customer);
  localStorage.setItem("bookedBy", JSON.stringify(reservation));
  alert("Your Reservation is Done")
  name.value = "";
  email.value = "";
  date.value = "";
  time.value = "";
  people.value = "";
  console.log(reservation);
  let url = "viewbooked.html";
  window.location.assign(url);
  return false;
}); 