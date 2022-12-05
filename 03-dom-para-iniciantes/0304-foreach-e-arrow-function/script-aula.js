const imgs1 = document.querySelectorAll('img');
imgs1.forEach(function(item)
  {
    console.log(item);
  }
)
const imagens = document.getElementsByTagName('img');
const imagensArray = Array.from(imagens);
imagensArray.forEach(item => console.log(item));