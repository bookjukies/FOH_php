let burger = document.querySelector(`.burger`);
const [top_line, middle_line, bottom_line] = [
  burger.querySelector(`.top`),
  burger.querySelector(`.middle`),
  burger.querySelector(`.bottom`),
];
const heading_big = document.querySelector(`.left h1`);
// menu selectiuon
const nav = document.querySelector(`nav`);
const links = document.querySelector(`nav ul`);

const img_socials = document.querySelectorAll(`.socials img`);
const socials = document.querySelector(`.socials`);

const heading_small = document.querySelector(`.left h1 span`);
const play_img = document.querySelector(`.left img`);

nav.classList.add(`none`);

// functions
function menu_toggle() {
  middle_line.classList.toggle(`none`);
  bottom_line.classList.toggle(`move_anime_top`);
  top_line.classList.toggle(`move_anime_bottom`);
  nav.classList.toggle(`none`);

  nav.classList.toggle(`open_menu`);
  links.classList.toggle(`open_ul`);

  img_socials.forEach((image) => image.classList.toggle(`open_socials_size`));
  socials.classList.toggle(`open_socials`);

  //menu toggles
  timeout = setTimeout(() => {}, 3000);
}

//event listeners
window.addEventListener(`load`, () => {});

burger.addEventListener(`click`, () => {
  menu_toggle();
});
