function closebook () {
    alert("Ainda não esta pronto, volte em breve...")
}

function togglecolor() {
    var htmlElement = document.querySelector('html');
    var checkbox = document.getElementById('check-5');
    if (checkbox.checked) {
      htmlElement.classList.add('light');
    } else {
      htmlElement.classList.remove('light');
    }
  }