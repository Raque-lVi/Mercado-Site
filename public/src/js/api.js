var todas = []


async function pesquisa() {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };


    const response = await fetch('http://localhost:3000/api/fotos/', options)
        .then(response => response.json())
        .then(response => {

            todas.push(response)

        })
        .catch(error => {
            console.error("Erro ao buscar as fotos:", error);
            throw error;
        });
}

export function fetFotos(nome = false, id = 0) {

    var img = document.getElementById(id);

    if (fotos == null) {
        pesquisa()
    }

    if (nome != false) {

        todas.forEach(element => {
            if (element.nome == nome) {
                img.src = element.link;
            }
        });
    }
    else {
        let nov = []
        todas.forEach(element => {
            nov.push(element.link);
        });
        return nov
    }
}


