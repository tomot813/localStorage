function GetValue() {
    const savedData = localStorage.getItem("sharedData"); // Получаем данные из localStorage

    if (savedData) {
        document.getElementById("output").innerText = savedData; // Отображаем данные
    } else {
        document.getElementById("output").innerText = "no value"; // Если данных нет
    }
}

function Clear(){
    localStorage.clear(); // Очищаем ВСЕ (у нее ограничение в 5 мб)
}
document.getElementById("btn_get").addEventListener("click", GetValue);
document.getElementById("btn_clear").addEventListener("click", Clear);