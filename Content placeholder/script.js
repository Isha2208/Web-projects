const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const names = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setInterval(getData, 2500);

function getData(){
    header.innerHTML = '<img src="./tree.jpg" alt="">';
    title.innerHTML = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, eos.';
    names.innerHTML = 'Isha verma';
    date.innerHTML = 'Jan 14, 2021';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/29.jpg" alt="">';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}