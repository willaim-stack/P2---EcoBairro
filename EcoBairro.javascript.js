document.getElementById('calc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const tipoRecurso = document.getElementById('tipo-recurso').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const resultadoBox = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    let economiaLitrosOuKwh = 0;
    let dinheiroSalvo = 0;
    let mensagem = "";

    if (tipoRecurso === 'agua') {
        // Uma torneira gotejando desperdiça em média 46 litros por dia. Em 30 dias = 1380 litros.
        economiaLitrosOuKwh = quantidade * 1380;
        dinheiroSalvo = quantidade * 14.50; // Estimativa de custo médio da tarifa local por m³
        mensagem = `Ao consertar seu sistema, você e seus vizinhos evitam o desperdício de **${economiaLitrosOuKwh} litros** de água potável por mês. Isso equivale a uma economia estimada de **R$ ${dinheiroSalvo.toFixed(2)}** na conta!`;
    } else if (tipoRecurso === 'energia') {
        // Lâmpada incandescente comum/antiga esquecida ligada 5h por dia = 9 kWh por mês.
        economiaLitrosOuKwh = quantidade * 9;
        dinheiroSalvo = quantidade * 8.10; // Estimativa baseada em tarifa média por kWh
        mensagem = `Ao criar o hábito de apagar essas luzes, sua comunidade poupa **${economiaLitrosOuKwh} kWh** de energia elétrica por mês, reduzindo custos em cerca de **R$ ${dinheiroSalvo.toFixed(2)}** e aliviando a rede local.`;
    }

    textoResultado.innerHTML = mensagem;
    resultadoBox.classList.remove('hidden');
    
    // Rolar suavemente até o resultado
    resultadoBox.scrollIntoView({ behavior: 'smooth' });
});