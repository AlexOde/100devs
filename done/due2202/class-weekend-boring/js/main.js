document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value.toLowerCase()

  if(day === 'tuesday' || day === 'thursday'){
    alert('We have class today');
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
  } else if(day === 'sunday'){
    alert('Office hours');
    document.querySelector('#day').style.display = 'none'
  } else{
    alert('This is a bit boring....')
  }
}