const pagescrollindicator = document.querySelector(".pagescrollindicator");
window.addEventListener("scroll", () => {
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;
   
    let percentagescrolled = 100;
  console.log(percentagescrolled)
    if(scrollable > 0){
        percentagescrolled = Math.ceil(scrolled / scrollable * 100);
    }
    pagescrollindicator.style.width = `${percentagescrolled}%`;
})
/*const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

function getActiveLinks() {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSectionId = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSectionId) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", getActiveLinks);
*/
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

function getActiveLink() {
  let activeLinkId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionBottom - 50) {
      activeLinkId = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === activeLinkId) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", getActiveLink);
