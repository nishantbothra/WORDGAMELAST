function login() {
    player_one_name = document.getElementById("name_one").value;
    player_two_name = document.getElementById("name_two").value;
    localStorage.setItem("player_one", player_one_name);
    localStorage.setItem("player_two", player_two_name);

    window.location = "gamepage.html";
}






