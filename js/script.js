function start(){
 acionar()
 
}
//
//
//title.classList.add('title')
//
function acionar(){
    var divTitulo = document.querySelector("#titulo")
    var body = document.querySelector(".body")
    var inicio = document.querySelector("#painel")
    var b = document.querySelector("#painel button")
    inicio.removeChild(b)

    var input = document.createElement('input')
    var input1 = document.createElement('input')
    var input2 = document.createElement('input') 
    var botao = document.createElement('button') 
    var title = document.createElement('h1')
    
    title.textContent = "Vamos começar preenchendo as suas informações pessoais"
    botao.textContent = "Next" 
    botao.classList.add('botao')
    input.classList.add('input') 
    input1.classList.add('input1')
    input2.classList.add('input2')
    
    input.value="Digite seu nome" 
    input.type = "text" 
    input1.value="Digite seu endereço" 
    input1.type = "text" 
    input2.value="Digite seu telefone" 
    input2.type = "text"
    
    
    inicio.appendChild(input)
    body.appendChild(botao) 
    inicio.appendChild(input1) 
    inicio.appendChild(input2) 
    divTitulo.appendChild(title)
    
    coletar()
    
}  

function acionar1(){
    var divTitulo = document.querySelector("#titulo h1")
    var inicio = document.querySelector("#painel")
    var body = document.querySelector(".body")
    var b = document.querySelector(".body button")
    var i = document.querySelector(".input")
    var i1 = document.querySelector(".input1")
    var i2 = document.querySelector(".input2")
    
    body.removeChild(b)
    inicio.removeChild(i)
    inicio.removeChild(i1)
    inicio.removeChild(i2)
    
    var selectFormacao = document.createElement('select')
    var optionFormacao = document.createElement('option')
    var optionFormacao1 = document.createElement('option')
    var optionFormacao2 = document.createElement('option')
    var labelFormacao = document.createElement('label')
    var botao = document.createElement('button')
   
    botao.textContent = "Next"
    labelFormacao.textContent=" Qual é o seu nível de escolaridade atual?"
    selectFormacao.name = "select"
    divTitulo.textContent = "Vamos agora colocar informações sobre sua formação acadêmica"
    optionFormacao.value = "Nível Fundamental"
    optionFormacao1.value = "Nível Médio"
    optionFormacao2.value = "Nível Superior"
    optionFormacao.textContent = "Nível Fundamental"
    optionFormacao1.textContent = "Nível Médio" 
    optionFormacao2.textContent = "Nível Superior" 
    
    inicio.appendChild(selectFormacao)
    selectFormacao.appendChild(optionFormacao)
    selectFormacao.appendChild(optionFormacao1)
    selectFormacao.appendChild(optionFormacao2)
    inicio.appendChild(labelFormacao)
    inicio.appendChild(botao) 

    selectFormacao.classList.add('selectForm')
    botao.classList.add('botao')

    
    var btn = document.querySelector('.botao')
    btn.addEventListener('click', function(){
        var inicio = document.querySelector("#painel")
        var body = document.querySelector(".body")
        
        var select = document.createElement('select')
        var option = document.createElement('option')
        var option1 = document.createElement('option')
        var option2 = document.createElement('option')
        var label = document.createElement('label')
        var botao = document.createElement('button')
        
        botao.textContent = "Next"
        label.textContent = "Qual situção do seu nível de escolaridade atual?"
        option.value = "Incompleto"
        option1.value = "Completo"
        option2.value = "Em andamento"
        option.textContent = "Incompleto"
        option1.textContent = "Completo"  
        option2.textContent = "Em andamento"  

        select.classList.add('selectSit')
        botao.classList.add('botao1')

        inicio.appendChild(select)
        select.appendChild(option)
        select.appendChild(option1)
        inicio.appendChild(label)
        inicio.appendChild(label) 
        body.appendChild(botao) 
         
        /*if(document.querySelector(".selectForm").value == "Nível Superior" && document.querySelector(".selectSit").value){

        }*/
        var btn = document.querySelector('.botao1')
        btn.addEventListener('click', function(){
            coletar1()
        })

        
        
    })
    

    /*var textArea = document.createElement('textarea')
    var btn = document.createElement('button')
    textArea.value= "Digite sua formação acadêmica"
    btn.textContent = "Enviar"
    btn.classList.add('btnform')
    textArea.classList.add('textarea')
    textArea.rows = "5"
    textArea.cols = "35"
    inicio.appendChild(textArea)
    inicio.appendChild(btn)
    coletar1()*/
}  



/*function acionar2(){
    var inicio = document.querySelector("#painel")
    var b = document.querySelector("#painel button")
    var i = document.querySelector("#painel textarea")
    inicio.removeChild(b)
    inicio.removeChild(i)
    var textArea = document.createElement('textarea')
    var btn = document.createElement('button')
    textArea.value= "Digite seu endereço"
    btn.textContent = "Enviar"
    btn.classList.add('btnform')
    textArea.classList.add('textarea')
    textArea.rows = "5"
    textArea.cols = "35"
    inicio.appendChild(textArea)
    inicio.appendChild(btn)
    coletar2()
} 


*/

function coletar(){
    var btn = document.querySelector(".botao")

    btn.addEventListener("click", function () {
        var text = document.querySelector(".input").value
        localStorage.setItem('valueText', text)
        var text1 = document.querySelector(".input1").value
        localStorage.setItem('valueText1', text1) 
        var tel = document.querySelector(".input2").value
        localStorage.setItem('valueNumber', tel)
        acionar1()
    })
    
} 

function coletar1(){
    
        var formacao = document.querySelector(".selectForm").value
        localStorage.setItem('valueFormacao', formacao)
        var situacao = document.querySelector(".selectSit").value
        localStorage.setItem('valueSituacao', situacao)
        //acionar2()
    
}  
/*
function coletar2(){
    var btn = document.querySelector(".btnform")

    btn.addEventListener("click", function () {
        var text = document.querySelector(".textarea").value
        localStorage.setItem('valueAreaText1', text)
        //acionar2()
    })
} 
*/
function exibir(){
   
        var paragrafo = document.querySelector("#nome")
        paragrafo.textContent = localStorage.getItem('valueText')
        
        var paragrafo1 = document.querySelector("#endereco")
        paragrafo1.textContent = localStorage.getItem('valueText1') 
        
        var paragrafo2 = document.querySelector("#telefone")
        paragrafo2.textContent = localStorage.getItem('valueNumber')
    
        var paragrafo3 = document.querySelector("#formacao")
        paragrafo3.textContent = " "+localStorage.getItem('valueFormacao')+" "+localStorage.getItem('valueSituacao')
    
}
//start()