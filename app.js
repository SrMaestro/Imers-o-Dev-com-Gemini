// console.log(filmesGhibli); // Essa linha provavelmente era usada para testes e pode ser removida

/**
 * Função para pesquisar e exibir os filmes do Studio Ghibli.
 * 
 * **Parâmetros:**
 *  - Nenhum parâmetro explicitamente definido, mas a função utiliza a variável global `filmesGhibli`.
 * 
 * **Retorno:**
 *  - Não retorna nenhum valor explicitamente, mas modifica o DOM para exibir os resultados da pesquisa.
 */
function pesquisar() {

    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value;
    
    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado </p>"
        return
    } 

    campoPesquisa = campoPesquisa.toLowerCase()
    

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let genero = "";


    // Itera sobre cada filme no array `filmesGhibli`
    for (let dado of filmesGhibli) {
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            genero = dado.genero.toLowerCase()


            if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa)){
                // Constrói o HTML para cada filme, incluindo título, descrição e link
       
                resultado += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="https://www.minecraft.net/pt-br" target="_blank">click aqui</a>
                </div>
            `;
            }

        
    }

    if(!resultado){
        resultado = "<p>Nada foi encontrado, por favor pesquise algo </p>"

    }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultado;
}