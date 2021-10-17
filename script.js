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
    '<img src="https://cdn.discordapp.com/attachments/829476803302653963/899280353523544084/dddd.png" alt="" />'
  title.innerHTML = 'Mert ☾'
  excerpt.innerHTML =
    'Full-Stack Developer<br>Artificial Intelligence'
  profile_img.innerHTML =
    '<img src="https://cdn.discordapp.com/attachments/829476803302653963/899279783467294720/a_7caa9d8fa9185f5ea6528ffc1071cc03.png" alt="" />'
  name.innerHTML = 'Mert ☾'
  date.innerHTML = '17.10.2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
