function SetValue() {
    localStorage.removeItem("sharedData"); // Очистка предыдущкго значения
    localStorage.setItem("sharedData", document.getElementById("input").value); // Сохраняем в localStorage (у нее ограничение в 5 мб)
    document.getElementById("input").value = "";
}

document.getElementById("btn_set").addEventListener("click", SetValue);