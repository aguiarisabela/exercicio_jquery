form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura o valor da nova tarefa
    let tarefa = $('#nova-tarefa').val();
       // Função para transformar a primeira letra em maiúscula
       function capitalizarPrimeiraLetra(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }

    if (tarefa !== "") {

        tarefa = capitalizarPrimeiraLetra(tarefa);

        $('#mensagem-erro').hide();

        let agora= new Date()
        let dataFormatada = agora.toLocaleDateString('pt-BR')
        let horaFormatada = agora.toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit'})


        // Cria um novo item de lista com a tarefa e o checkbox
        let novaTarefa = $(`<li>
                <input type="checkbox" class="checkbox-tarefa"> 
                <span class="tarefa-texto">${tarefa}</span>
                <span class="data-hora">${dataFormatada} - ${horaFormatada}</span>
            </li>`);

        // Adiciona a nova tarefa à lista
        $('#lista-tarefas').append(novaTarefa);

        // Limpa o campo de input
        $('#nova-tarefa').val('');
    } else {
        $('#mensagem-erro').text('Por favor, insira uma tarefa!').show();
    }
});
    $(document).on('change', '.checkbox-tarefa', function(){
        if ($(this).is(':checked')){
            $(this).parent().addClass('riscado')
        } else{
            $(this).parent().removeClass('riscado')
        }
    })
