let botao = document.querySelector('.botao')
console.log(botao);
let setaFechada = document.querySelector('.fechada')
let setaAberta = document.querySelector('.aberta')
let texto = document.querySelector('.texto_seta')


//se a seta estiver fechada, ao clicar abrir e mostrar texto
//se não estiver fechada, ao clicar, fechar e esconder o texto

botao.addEventListener('click',function(){

    if(setaFechada.style.display = 'block'){
        setaFechada.style.display = 'none';
        setaAberta.style.display = 'block';
        texto.style.display = 'block';
    }else if(setaFechada.style.display = 'none'){
        setaAberta.style.display = 'none';
        texto.style.display = 'none';
        setaFechada.style.display = 'block';
    }

})

//Tentativa 2
 // if(setaStatus.classList.contains('fechada')){
    //     setaStatus.classList.remove('fechada')
    //     setaStatus.classList.add('aberta')
    //     setaStatus.style.display = 'none'
    //     texto.style.display = 'block'
    // }else{
    //     setaStatus.classList.remove('aberta')
    //     setaStatus.classList.add('fechada')
    //     texto.style.display = 'none'
    // }