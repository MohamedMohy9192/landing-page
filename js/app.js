const navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

const sectionnsFragment = document.createDocumentFragment();
for (const section of sections) {
  const sectionName = section.getAttribute("data-nav");

  const listItem = document.createElement("li");
  const linkElement = document.createElement("a");
  linkElement.textContent = sectionName;
  // add menu__link class to anchor element to style it
  linkElement.className = "menu__link";
  // add href attribute to show the hand cursor when hover over the menu
  linkElement.href = '#';

  // set id of each section to the correspond nav list item
  linkElement.setAttribute('data-section-id-to-scroll', section.id);

  listItem.appendChild(linkElement);
  sectionnsFragment.appendChild(listItem);
}

navbarList.appendChild(sectionnsFragment);
navbarList.addEventListener("click", sectionClickListener);

function sectionClickListener(event) {
  if (event.target.nodeName === "A") {
    // prevent scroll to top (the default behavior)
    event.preventDefault();
    // get the section id to scroll to it
    const sectionId = event.target.getAttribute('data-section-id-to-scroll');

    const sectionToScroll = document.getElementById(sectionId);
    sectionToScroll.scrollIntoView();

  }
}

window.addEventListener("scroll", onScrollListener);

function onScrollListener() {
  const sections = document.querySelectorAll("section");

  for (const section of sections) {
    if (isInViewport(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
}

//check if an element in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
