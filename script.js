const USD = 6.20
const EUR = 6.45
const GBP = 7.78

const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
  // console.log(amount.value)
})

form.onsubmit = (event) => {
  event.preventDefault()
  // console.log(currency.value)

  switch (currency.value) {
    case "USD": 
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

function convertCurrency(amount, price, symbol) {
  // console.log(amount, price, symbol)
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price
    result.textContent = `${formatCurrencyBRL(total)}`

    if (isNaN(total)) {
      return alert("Por favor dirige o valor corretamente.")
    }

    footer.classList.add("show-result")
  } catch (error) {

    console.log(error)
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente.")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}