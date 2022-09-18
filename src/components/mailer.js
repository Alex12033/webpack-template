// const btnForm = document.querySelector(".confirm-button");

// const loader = document.querySelector(".loader");

// const fields = document.querySelectorAll("input");

// let marksClient = document.querySelector(".what-want-client");

function mailerContactsPage() {
  // btnForm.addEventListener("click", (e) => {
  //   e.preventDefault();
   
  //   var valuesInput = {};

  //   fields.forEach((field) => {
  //     const { name, value } = field;
  //     valuesInput[name] = value; //if input empty we save false in object else we save value of input
  //   });

  //   if (
  //     valuesInput.name === "" ||
  //     valuesInput.email === "" ||
  //     valuesInput.phone === "" ||
  //     validateEmail(valuesInput.email) === false ||
  //     validatePhone(valuesInput.phone) === false
  //   ) {
  //     displayMsg("Заповніть усі поля корректно");
  //     loader.style.display = "none";
  //   } else {
  //     setTimeout(() => {
  //       Email.send({
  //         Host: "smtp.elasticemail.com",
  //         Username: "aleksandrignashov42@gmail.com",
  //         Password: "DB964427927B5971C90B0BFCEDB9191FBFA5",
  //         To: "aleksandrignashov42@gmail.com",
  //         From: "aleksandrignashov42@gmail.com",
  //         Subject: "Інформація про кліента",
  //         Body: `Інформація від кліента: ім'я ${valuesInput["name"]}, пошта: ${
  //           valuesInput["email"]
  //         }, телефон: ${valuesInput["phone"]}, примітки від кліента: ${
  //           marksClient.value === "" ? "немає" : marksClient.value
  //         }`,
  //       }).then((message) => {
  //         if (message === "OK") {
  //           loader.style.display = "none";
  //           displayMsg("Ми з вами зв'яжемося найближчим часом");
  //         } else {
  //           loader.style.display = "none";
  //           displayMsg("Щось пішло не так! Ми скоро це виправимо.");
  //         }
  //       });
  //     }, 2000);
  //     //script of mailer connected in index html file
  //   }
  // });
  console.log("mailer connected");
}

module.exports = mailerContactsPage;
