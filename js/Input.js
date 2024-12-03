function SetValue() {
    sessionStorage.removeItem("sharedData"); 
    sessionStorage.setItem("sharedData", document.getElementById("input").value); 
    document.getElementById("input").value = "";
}

document.getElementById("btn_set").addEventListener("click", SetValue);