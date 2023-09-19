const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

//event listener for services card
document.getElementById("studentOrgCard").addEventListener("click", function() {
    window.location.href = "studentOrgs.html";
})

document.getElementById("personalProjectCard").addEventListener("click", function() {
    window.location.href = "projects.html";
})

document.getElementById("workExperienceCard").addEventListener("click", function() {
    window.location.href = "experience.html";
})

// Function to attach event listener to a card
function attachClickListener(cardId, url) {
    const cardElement = document.getElementById(cardId);
    if (cardElement) {
      cardElement.addEventListener("click", function() {
        window.location.href = url;
      });
    }
  }
  
  // Attach click listeners to cards
  attachClickListener("ExxonMobilCard", "https://corporate.exxonmobil.com/");
  attachClickListener("ParivedaCard", "https://parivedasolutions.com/");
  attachClickListener("CRCard", "https://www.criver.com/");
  