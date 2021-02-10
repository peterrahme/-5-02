// changes the display of text and color of the background
function buttonOn () {
  document.getElementById('me').innerHTML = 'Ok'
  document.getElementById('background').style.backgroundColor = 'red'
}

// changes display of images and text
function goatbuttonOn () {
  document.getElementById('picture').src = './Images/Goat2.jpg'
  document.getElementById('picture').alt = 'Lebron James'
  document.getElementById('x').style.display = 'none'
}
