function openMenu(evt, menuName) {
    // Dichiara le variabili
    var i, menuContent, tabButtons;

    // Nascondi tutti gli elementi con class="menu-content"
    menuContent = document.getElementsByClassName("menu-content");
    for (i = 0; i < menuContent.length; i++) {
        menuContent[i].style.display = "none";
    }

    // Rimuovi la classe "active" da tutti i pulsanti
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Mostra la tab corrente e aggiungi la classe "active" al pulsante cliccato
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Assicura che la prima tab ("Le Nostre Speciali") sia visibile al caricamento della pagina
document.addEventListener("DOMContentLoaded", function() {
    // Apri la prima tab di default
    document.getElementById("Speciali").style.display = "block";
});