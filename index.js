function pricechange() {
  var price_level = document.getElementById("price_level");
  var priceSelected = price_level.value;
  var arrPrice = document.getElementsByName("price");
  for (var i = 0; i < arrPrice.length; i++) {
    var price = parseFloat(arrPrice[i].innerText.substring(1));
    if (price <= priceSelected || priceSelected == 0) {
      arrPrice[i].parentElement.style.display = "";
    } else {
      arrPrice[i].parentElement.style.display = "none";
    }
  }
  totalmoney();
}

function tick1box(index) {
  var arrQuantity = document.getElementsByName("quantity");
  arrQuantity[index].disabled = !arrQuantity[index].disabled;
  if (arrQuantity[index].disabled) {
    arrQuantity[index].value = 0;
    arrQuantity[index].parentElement.nextElementSibling.innerText = "";
  }
  totalmoney();
}

function intomoney(input) {
  var quantity = input.value;
  var price = input.parentElement.previousElementSibling.innerText.substring(1);
  input.parentElement.nextElementSibling.innerText = quantity * price;
  totalmoney();
}

function totalmoney() {
  var arrIntoMoney = document.getElementsByName("intomoney");
  var total = 0;
  for (var i = 0; i < arrIntoMoney.length; i++) {
    var price = arrIntoMoney[i].innerText;
    total += Number(price);
  }
  document.getElementById("total").innerText = total;
}
