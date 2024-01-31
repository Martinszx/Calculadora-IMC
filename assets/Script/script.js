const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;


  const imc = (weight / (height * height)).toFixed(2);

  const value = document.getElementById('value');

  let description = '';

  document.getElementById('info__imc').classList.remove('hidden');

if (imc < 18.5) {
    description = ' Cuidado! você está abaixo do peso!'
}else if(imc >= 18.5 && imc <= 25){
    description = "Você está com seu Peso ideal! Parabéns";
}else if(imc > 30 && imc <= 35){
    description = "Cuidado! você está com uma obesidade moderada!";
}else if(imc > 35 && imc <= 40){
    description = "Cuidado! você está com uma obesidade severa!";
}else{
    description = "Cuidado! Você está com obesidade morbida!";
}




value.textContent = imc;
document.getElementById('description').textContent = description;
});
