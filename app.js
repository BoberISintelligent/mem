const $circle = document.querySelector('#circle')
const $score = document.querySelector('#score')

function start() {
  setScore(getScore())
  setImage()
}

function setScore(score) {
  localStorage.setItem('score', score)
  $score.textContent = score
}

const images = [
  { score: 50, src: './assets/pohyi.jpg' },
  { score: 100, src: './assets/photo_2022-04-02_16-31-43.jpg' },
  { score: 150, src: './assets/photo_2022-12-03_09-28-27.jpg' },
  { score: 200, src: './assets/200.jfif' },
  { score: 250, src: './assets/giphy(1).gif' },
  { score: 300, src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWN5dTFvNDJuMXduZTJ0bmxrc2Zmb3VkZmY0bTB2NWZmMGl5ZjdtayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.gif' },
  { score: 350, src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJrbTh0Y2IzY3RrNmd2dGtnZTJueWs3MmprMWl5a2k1cGZmdDB5ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZlRmaLNJgoRIA/giphy.gif' },
  { score: 400, src: './assets/400.gif' },
  { score: 450, src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2RldG1ydDNneXZpYWZza3pwenpwcmRibGU4NnI1ZjVxMXY0YnRobiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/glKgrvK0qBa5dh47Yc/giphy.gif' },
  { score: 500, src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHc5N2M4b3lieWowOWd3cnN3aTdrOGJhYzJlM3lpc2xidXZjM3N1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lVsYDBC0UVQJCE/giphy.gif' },
  { score: 550, src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXhsYjVyMTZkNDEzcnFpZThiejg1d3EyM2FxNG4xbnVlZGpjZGo1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aFTt8wvDtqKCQ/giphy.gif' },
  { score: 600, src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWpqbHppaWV0OWE3OWdmMGZvNXhsbXFuN3Vpand4eWY5ZjhkbTk5aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/111ebonMs90YLu/giphy.gif' },
  { score: 650, src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMThncW5raGVlcjh4dTk2enFiZnlvOHVlbjVyaDZ1c3Y2dmE1cm9ydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Um3ljJl8jrnHy/giphy.gif' },
  { score: 700, src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHpnb29uOWRtc3R1dmtzMnZzZHh4dWxkenQyZ3I2M2g5aTJoZTR4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jt96LuT92aIodIakQT/giphy.gif' },
  { score: 750, src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzgyeW5jcTBocG13NDFwZWN3NjR2bGtoM2kzNTR5YmcxbGR1M2ltbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VGuAZNdkPUpEY/giphy.gif' },
  { score: 800, src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2NmdmI4eHE5em0zMjE4cW9pazY5enQ5enloMTF1Ynd3aDZxaHN0diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WjSx3rJqsa448/giphy.gif' },
  { score: 850, src: './assets/pohyi.jpg' },
  { score: 900, src: './assets/pohyi.jpg' },
  { score: 950, src: './assets/pohyi.jpg' },
  { score: 1000, src: './assets/pohyi.jpg' },
  // Добавляйте новые картинки и пороговые значения
];


function setImage() {
  const currentScore = getScore();
  
  // Найти подходящее изображение в массиве
  for (let i = images.length - 1; i >= 0; i--) {
    if (currentScore >= images[i].score) {
      $circle.setAttribute('src', images[i].src);
      break;
    }
  }
}

function getScore() {
  return Number(localStorage.getItem('score')) ?? 0
}

function addOne() {
  setScore(getScore() + 1)
  setImage()
}

$circle.addEventListener('click', (event) => {
  const rect = $circle.getBoundingClientRect()

  const offfsetX = event.clientX - rect.left - rect.width / 2
  const offfsetY = event.clientY - rect.top - rect.height / 2

  const DEG = 60

  const tiltX = (offfsetY / rect.height) * DEG
  const tiltY = (offfsetX / rect.width) * -DEG

  $circle.style.setProperty('--tiltX', `${tiltX}deg`)
  $circle.style.setProperty('--tiltY', `${tiltY}deg`)

  setTimeout(() => {
    $circle.style.setProperty('--tiltX', `0deg`)
    $circle.style.setProperty('--tiltY', `0deg`)
  }, 300)

  const plusOne = document.createElement('div')
  plusOne.classList.add('plus-one')
  plusOne.textContent = '+1'
  plusOne.style.left = `${event.clientX - rect.left}px`
  plusOne.style.top = `${event.clientY - rect.top}px`

  $circle.parentElement.appendChild(plusOne)

  addOne()

  setTimeout(() => {
    plusOne.remove()
  }, 2000)
})

start()
