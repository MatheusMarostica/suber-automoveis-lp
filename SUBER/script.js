document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById('handleSubmit');

    button.onclick = async function(e) {
        e.preventDefault();

        let inputEmail = document.getElementById("inputEmail").value;
        let inputTelefone = document.getElementById("inputTelefone").value;
        let data = {inputEmail, inputTelefone};

        try {
            const response = await fetch('http://localhost:3001/api/store/task', {
                method: "POST",
                headers: {"Content-type": "application/json;charset=UTF-8"},
                body: JSON.stringify(data)
            });

            let content = await response.json();
            console.log(content);
            if (content.success) {
                alert("Sucesso!!");
                window.location.reload();
            } else {
                console.error(content.error);
                alert("Não deu!!");
            }
        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro durante a solicitação.");
        }
    };
});
