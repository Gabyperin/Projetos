function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let quality = document.getElementById('quality').value;
    let numofPeople = document.getElementById('people').value;

    if(bill == '' | quality == 0) {
        alert("Por favor, preencha todos os campos")
        return;
    }

    if(numofPeople == '' | numofPeople <= 1) {
        numofPeople = 1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * quality) / numofPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);