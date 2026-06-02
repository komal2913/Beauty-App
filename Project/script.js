// Booking Form

const form =
document.getElementById("bookingForm");

const appointmentList =
document.getElementById("appointmentList");

let bookings =
JSON.parse(
localStorage.getItem("appointments")
) || [];

// Display Appointments

function displayAppointments(){

  appointmentList.innerHTML = "";

  bookings.forEach((item,index)=>{

    const div =
    document.createElement("div");

    div.classList.add("appointment-card");

    div.innerHTML = `

      <h3>${item.name}</h3>

         <p>
      <strong>Email:</strong>
      ${item.email}
      </p>

      <p>
      <strong>Service:</strong>
      ${item.service}
      </p>

      <p>
      <strong>Date:</strong>
      ${item.date}
      </p>

       <p>
      <strong>Message:</strong>
      ${item.message}
      </p>

      <button onclick="deleteAppointment(${index})">
      Delete
      </button>

    `;

    appointmentList.appendChild(div);

  });

}

// Save Appointment

form.addEventListener("submit",function(e){

  e.preventDefault();

  const name =
  document.getElementById("name").value;

  const email =
  document.getElementById("email").value;

  const date =
  document.getElementById("date").value;

  const service =
  document.getElementById("service").value;

   const message =
  document.getElementById("message").value;


  const booking = {
    name,
    email,
    date,
    service,
    message
  };


  bookings.push(booking);

  localStorage.setItem(
    "appointments",
    JSON.stringify(bookings)
  );


  displayAppointments();

  form.reset();

  alert(
    "Appointment Booked Successfully 💖"
  );

});


// Delete Appointment

function deleteAppointment(index){

  bookings.splice(index,1);

  localStorage.setItem(
    "appointments",
    JSON.stringify(bookings)
  );

  displayAppointments();

}

// Scroll Booking

function scrollBooking(){

  document
  .getElementById("booking")
  .scrollIntoView({
    behavior:"smooth"
  });

}


// Initial Load

displayAppointments();