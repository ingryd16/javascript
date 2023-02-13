var tabuadaModel = require('./modulo/tabuada')
var readline = require('readline')

entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Número da tabuada inicial: ',
    function(multiplicandoMin) {
        let minMultiplicando = Number(multiplicandoMin)
        if (minMultiplicando == '') {
            console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
            entradaDados.close()
        } else if (isNaN(minMultiplicando)) {
            console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
            entradaDados.close()
        } else if (minMultiplicando < 2 || minMultiplicando > 100) {
            console.log('ERRO: por favor digite valores entre 2 ao 100')
            entradaDados.close()
        } else {
            entradaDados.question('Número da tabuada final: ',
                function(multiplicandoMax) {
                    let maxMultiplicando = Number(multiplicandoMax)
                    if (maxMultiplicando == '') {
                        console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
                        entradaDados.close()
                    } else if (isNaN(maxMultiplicando)) {
                        console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
                        entradaDados.close()
                    } else if (maxMultiplicando < 2 || maxMultiplicando > 100) {
                        console.log('ERRO: por favor digite valores entre 2 ao 100')
                        entradaDados.close()
                    } else {
                        entradaDados.question('Digite o número minímo do multiplicador entre [1 ao 50]: ',
                            function(multiplicadorMin) {
                                let minMultiplicador = Number(multiplicadorMin)

                                if (minMultiplicador == '') {
                                    console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
                                    entradaDados.close()
                                } else if (isNaN(minMultiplicador)) {
                                    console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
                                    entradaDados.close()
                                } else if (minMultiplicador < 1 || minMultiplicador > 50) {
                                    console.log('ERRO: por favor digite valores entre 1 ao 50')
                                    entradaDados.close()
                                } else {
                                    entradaDados.question('Digite o número máximo do multiplicador entre [1 ao 50]: ',
                                        function(multiplicadorMax) {
                                            let maxMultiplicador = Number(multiplicadorMax)

                                            if (maxMultiplicador == '') {
                                                console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
                                                entradaDados.close()
                                            } else if (isNaN(maxMultiplicador)) {
                                                console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
                                                entradaDados.close()
                                            } else if (maxMultiplicador < 1 || maxMultiplicador > 50) {
                                                console.log('ERRO: por favor digite valores entre 1 ao 50')
                                                entradaDados.close()
                                            } else {
                                                tabuadaModel.tabuada(minMultiplicando, maxMultiplicando, minMultiplicador, maxMultiplicador)
                                                entradaDados.close()
                                            }
                                        })
                                }
                            })
                    }
                })
        }
    })