
function add() {
    const t = document.getElementById("t1").value;
    if (t.length > 0) {
        document.getElementById("t2").innerHTML += "<div class='task' style='margin-top:10px;'>"+"<span style='border:2px solid black; margin-top:5px; padding:5px 30px 5px 5px;  border-radius:5px; '>"+t+"</span>"+ "<button onclick='del(this)' style='background-color:black; color:white; margin-left:30px; height:30px; border-radius:5px;'>DELETE</button></div>";
    }
    document.getElementById("t1").value = "";
}
function del(element) {
    element.parentElement.remove();
}
