let checkout1 = document.getElementById("checkout1");
let checkout2 = document.getElementById("checkout2");

let close = document.getElementById("close-checkout1");
let close2 = document.getElementById("close-checkout2");

// let checknext = document.getElementById("checknext");

function checkout() {
  checkout1.classList.remove("hidden");
}

function goback() {
  checkout1.classList.remove("hidden");
  checkout2.classList.add("hidden");
}

close.addEventListener("click", () => {
  console.log("clickeddd");
  checkout1.classList.add("hidden");
});

close2.addEventListener("click", () => {
  console.log("clickeddd");
  checkout2.classList.add("hidden");
});

// checknext.addEventListener("click", () => {
//   console.log("clickeddd");
//   checkout2.classList.remove("hidden");
//   checkout1.classList.add("hidden");
// });

// let fullname =""
// let mail_email = ""

function userdata() {
  if (
    document.getElementById("fullnamevalue").value == "" ||
    document.getElementById("emailvalue").value == ""
  ) {
    document.getElementById("fullnamevalue").classList.add("is-danger");
    document.getElementById("emailvalue").classList.add("is-danger");
  } else {
    console.log("clickeddd");
    checkout2.classList.remove("hidden");
    checkout1.classList.add("hidden");
  }
  // fullname = document.getElementById("fullnamevalue").value;
  // mail_email = document.getElementById("emailvalue").value;

  // console.log(fullname);
  // console.log(mail_email);
}
// console.log(fullname);
// console.log(mail_email);
let totalprice = 12.0;

let desc2 = document.getElementById("desc2");
let desc3 = document.getElementById("desc3");

function showdesc2() {
  if (desc2.classList == "product-description hidden") {
    desc2.classList.remove("hidden");
    totalprice = totalprice + 19.0;
    document.getElementById("totalprice").innerText = "$" + totalprice;
  } else {
    desc2.classList.add("hidden");
    totalprice = totalprice - 19.0;
    document.getElementById("totalprice").innerText = "$" + totalprice;
  }
}

function showdesc3() {
    if (desc3.classList == "product-description hidden") {
        desc3.classList.remove("hidden");
        totalprice = totalprice + 12.0;
        document.getElementById("totalprice").innerText = "$" + totalprice;
      } else {
        desc3.classList.add("hidden");
        totalprice = totalprice - 12.0;
        document.getElementById("totalprice").innerText = "$" + totalprice;
      }
}

document.getElementById("totalprice").innerText = "$" + totalprice;

// function sendMail() {
//   var params = {
//     name: fullname,
//     email: mail_email,
//   };

//   const servieID = "service_3myjm7y";
//   const templateID = "template_bm4bfgt";

//   emailjs
//     .send(servieID, templateID, params)
//     .then((res) => {
//       console.log(res);
//       alert("Your Messsage Sent Successfully!");
//     })
//     .catch((err) => console.log(err));
// }
