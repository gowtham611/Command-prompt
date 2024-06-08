var loginModal = document.getElementById("loginModal");

var loginBtn = document.getElementById("loginBtn");

var loginClose = document.getElementsByClassName("close")[0];

var signupBtn = document.getElementById("signupBtn");
var signupModal = document.getElementById("signupModal");

var closeBtns = document.querySelectorAll(".close");

loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

loginClose.onclick = function() {
  loginModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}

function openSignupModal() {
  var modal = document.getElementById("signupModal");
  modal.style.display = "block";
}

window.onclick = function(event) {
  var modals = document.getElementsByClassName("modal");
  for (var i = 0; i < modals.length; i++) {
    var modal = modals[i];
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
    const popupButton = document.getElementById('popupButton');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-btn');

    popupButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});



closeBtns.forEach(function(closeBtn) {
  closeBtn.addEventListener("click", function() {
    signupModal.style.display = "none";
  });
});
var registeredPopup = document.getElementById("registeredPopup");

registeredPopup.onclick = function() {
  registeredPopup.style.display = "none";
}

setTimeout(function() {
  registeredPopup.style.display = "none";
}, 5000); 


window.addEventListener("click", function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
});

document.getElementById("signupForm").addEventListener("submit", function(event){
  event.preventDefault();
  signupModal.style.display = "none";
  document.getElementById("registeredPopup").style.display = "block"; 
});