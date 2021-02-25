/*===== EXPANDER MENU =======*/
const showMenu = (toggleId, navbarId, bodyId) =>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if(toggle && navbar){
        toggle.addEventListener('click', ()=>{
            navbar.classList.toggle('expander')

            bodypadding.classList.toggle('body-pd')
        })
    }
}
showMenu('nav-toggle','navbar', 'body-pd');



/*===== Função PDF =======*/
function funcao_pdf(){
     var pegar_dados = document.getElementById('dados').innerHTML;
     var janela =window.open('','','width=800,heigth=600');
     janela.document.write("<html><head>");
     janela.document.write("<title>PDF</title></header>");
     janela.document.write("<body>");
     janela.document.write(pegar_dados);
     janela.document.write("</body></html>");
     janela.document.close();
     janela.print();
}


 
/*===== horario e data atualizado =======*/
function carregar() {
    var msg = window.document.getElementById('msg')
    var date = window.document.getElementById('data')
    var data = new Date()
    var hora = data.getHours()
    var min =  data.getMinutes()
    var dia = data.getDate()
    var mes = data.getDay()
    var ano = data.getFullYear()
    msg.innerHTML = `Saldo atualizado às ${hora}:${min}.</p>`
    date.innerHTML = `${dia}/${mes}/${ano}`

if(hora >= 1 && hora < 12) {
         msg.innerHTML +='<h6>Bom Dia!</h6>'
         window.document.body.style.color = '#022a55'

}else if(hora >= 12 && hora <= 16){
         msg.innerHTML +='<h6>Boa tarde!</h6>'
         window.document.body.style.color = '#022a55'

}else {
         msg.innerHTML +='<h6>Boa Noite!</h6>'
         window.document.body.style.color= '#022a55'
  }


}

