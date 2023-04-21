var addButton = document.querySelector(".add");
var count = 0;
var currentCard;
var textField;

window.onload = function() {
  setDate();
  addList();
};

addButton.addEventListener("click", () => {
  addList();
});

function addList() {
  count++;
  let listArea = document.querySelector(".list-area");
  let card = document.createElement("card");
  textField = document.createElement("div");
  let checkBox = document.createElement("input");

  card.classList.add("card");
  card.id = "card-" + count;

  textField.classList.add("text");
  textField.id = "text-" + count;
  textField.contentEditable = "false";

  checkBox.type = "checkbox";
  checkBox.id = "checkbox-" + count;

  card.append(textField);
  card.append(checkBox);
  listArea.append(card);
  getHoveredCardId();
}

function setDate() {
  let day = document.querySelector(".day");
  let month = document.querySelector(".month");
  let year = document.querySelector(".year");
  let week = document.querySelector(".week");

  day.innerText = new Date().getDate();
  month.innerText = new Date().toLocaleString("default", { month: "short" });
  year.innerText = new Date().getFullYear();
  week.innerText = new Date().toLocaleString("default", { weekday: "long" });
}

function getHoveredCardId() {
  var cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    card.addEventListener("mouseover", function() {
      currentCard = document.getElementById(this.id);
      console.log(this.id);
      addDoubleClickEvent();
      addStrike();
    });
  });
}

function addDoubleClickEvent() {
  currentCard.addEventListener("dblclick", function() {
    let textElement = currentCard.querySelector(".text");
    textElement.contentEditable = "true";
    textElement.focus();
  });
}

function addStrike() {
  let currentCheckbox = currentCard.querySelector(".card input[type=checkbox]");
  console.log(currentCheckbox.id);

  currentCheckbox.addEventListener("change", function() {
    let textElement = currentCard.querySelector(".text");
    if (currentCheckbox.checked) {
      textElement.classList.add("strike");
    } else {
      textElement.classList.remove("strike");
    }
  });
}
