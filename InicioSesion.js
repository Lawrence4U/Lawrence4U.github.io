var form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    history.back();
    sessionStorage.setItem('iniciado', 'true');
});

