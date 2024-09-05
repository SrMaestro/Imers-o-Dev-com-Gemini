// console.log(filmesGhibli);


function pesquisar (){

    let section = document.getElementById('resultados-pesquisa');

    let resultado = ""
    
    for(let dado of  filmesGhibli){
        resultado += `
        <div class="item-resultado">
              <h2>
                <a
                  href="#"
                  target="_blank"
                  >${dado.titulo}
                </a>
              </h2>
              <p class="descricao-meta">
                ${dado.descricao}
              </p>
              <a
                href="https://www.minecraft.net/pt-br"
                target="_blank"
                >click aqui</a
              >
              
            </div>
    
    `;
    
    }
    
    
    section.innerHTML = resultado;
    
    
}



