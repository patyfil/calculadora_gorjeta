function calculateTip(event) {
  event.preventDefault();
  let valor = document.getElementById('valor').value;
  let serviceQuality = document.getElementById('serviceQuality').value;
  let numOfPeople = document.getElementById('people').value;

  if (valor == '' | serviceQuality == 0) {
    alert('Por favor, preencha os campos');
    return; // return para a função
  }

  if (numOfPeople == '' | numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById('each').style.display = "none"
  } else {
    document.getElementById('each').style.display = "block"
  }

  let total = (valor * serviceQuality) / numOfPeople;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);