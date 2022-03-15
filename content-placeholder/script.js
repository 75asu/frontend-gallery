const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="source.jpg" alt="" />'
  title.innerHTML = 'Prema pain Mahabharat'
  excerpt.innerHTML =
    'Bhubaneswar: Sambit and Riya are coming together in a new Odia film Prema Pain Mahabharat. The Mahurat of the film was held here on Monday.'
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
  name.innerHTML = 'Tony Kumar Stark Chotray'
  date.innerHTML = 'Chaitra Shukla Dwadashee'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}