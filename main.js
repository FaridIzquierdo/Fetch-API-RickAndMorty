function getCharacters(done){
    const results = fetch('https://rickandmortyapi.com/api/character')

    results.then(response => {
        return response.json()
    }).then(data => {
        done(data)
    })
}

getCharacters((data) => {
    data.results.forEach(character => {
        const article = document.createRange().createContextualFragment(/*html*/`
            <article>
                <div class="image-container">
                    <img src="${character.image}" alt="">
                </div>
                <h2 style="color:#fff">Nombre: ${character.name}</h2>
                <p style="color:#fff">Estado: ${character.status}</p>
            </article>
        `);

        const main = document.querySelector('main');
        main.append(article);
        
    });

    
})