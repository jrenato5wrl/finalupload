var s = 0;
var a = 0;
var b = 0;
var level = 0;
var count = 10;
var timed = false;
var stop_tempo = false;

function toMenu() {
  stop_tempo = false; 
  count = 10;
  s = 0;
  var start = document.getElementById("start");
  var menu = document.getElementById("menu");
  document.getElementById("victory").style.display = "none";
  start.style.display = "none";
  menu.style.display = "inline"; 
}

function quiz(n) {
  level = n;
  count = 10;
  if (timed == false) {
    timed = true;
    tempo();
  }
  document.getElementById("tempo").style.color = "black";
  document.getElementById("input").focus();
  document.getElementById("input").select();
  if (level === 0) { 
    a = Math.floor(Math.random() * 15);
    b = Math.floor(Math.random() * 15);
  } 
  if (level == 1) {
    a = Math.floor(Math.random() * (40 - 15) + 15);
    b = Math.floor(Math.random() * (40 - 15) + 15);
  }
  if (level == 2) {
    a = Math.floor(Math.random() * (100 - 40) + 40);
    b = Math.floor(Math.random() * (100 - 40) + 40);
  }
  var recorde = document.getElementById("recorde");
  var menu = document.getElementById("menu");
  var op = document.getElementById("op");
  var questao = document.getElementById("questao");
  var answer = document.getElementById("answer");
  var input = document.getElementById("input");
  var counter = document.getElementById("tempo");
  menu.style.display = "none";
  recorde.style.display = "inline";
  recorde.innerHTML = "recorde: " + s;
  questao.style.display = "inline";
  op.innerHTML = a + " x " + b; 
  answer.style.display = "inline";
  input.style.display = "inline"; 
  counter.style.display = "block"; 
}

function check() {
  document.getElementById("output").style.display = "inline-block";
  if (document.getElementById("input").value == a*b) {
    s = s + 1;
    document.getElementById("output").innerHTML = "Correct!";
    document.getElementById("output").style.color = "green";
  }
  else {
    if (s > 0) {
      s = s - 1;
    }
    document.getElementById("output").innerHTML = "Wrong!";
    document.getElementById("output").style.color = "red";
  }
  document.getElementById("input").value = "";
  if (s < 10) {
    quiz(level);
  } 
  else { 
    stop_Tempo = true;
    document.getElementById("recorde").style.display = "none";
    document.getElementById("answer").style.display = "none";
    document.getElementById("input").style.display = "none";
    document.getElementById("questao").style.display = "none";
    document.getElementById("output").style.display = "none";
    document.getElementById("tempo").style.display = "none";
    document.getElementById("victory").style.display = "inline-block";
    document.getElementById("victory").innerHTML = "Congratulation! You won!";
    document.getElementById("restart").style.display = "inline-block";
  } 
}
document.addEventListener('keypress', function(e){
  if(e.which == 13){
    check();
  }
}, false);

function tempo() {
  if (stop_tempo === true) {
    return;
  }
  else {
    var interval = setInterval(tempo, 1000);
    function tempo(){
      document.getElementById('tempo').innerHTML= "tempo: " + count;
      count--;
      if (count <= -1 && stop_tempo === false){
        document.getElementById('output').style.color = "orange";
        document.getElementById('output').style.display="inline";
        document.getElementById('output').innerHTML="Timeout!";
        document.getElementById('tempo').innerHTML="Timeout!";
        if (s > 0) {
          s = s - 1; 
        } 
        clearInterval(interval);
        timed = false;
        if (stop_tempo === false) {
          quiz(level); 
        }
      }
    }
  }
}
/*****************LOCALSTOAGE JONISON STYLE**********************/

function lista() 
{


document.getElementById('play').className="esconder";
document.getElementById('lista').className="visivel"
}
class login{
constructor()
{
   let nome;
   let pontos;   
}
}
function salvar(nome, pontos)
{
// se o campo estiver vazio = 0
if(nome.length == 0)
{
Swal.fire({icon :'error',title:'error', text: 'preencha todos os campos!'})
}
else
{
let nomeBanco = "login"
let vetor = [];
let agenda = new login();
agenda.nome = nome;
agenda.pontos = pontos;
if(localStorage.getItem(nomeBanco)==null)
{
   vetor.push(agenda);
   localStorage.setItem(nomeBanco,JSON.stringify(vetor));
}
else
{
   vetor = JSON.parse(localStorage.getItem(nomeBanco));
   vetor.push(agenda);
   localStorage.setItem(nomeBanco,JSON.stringify(vetor));
}  
   Swal.fire({
       icon: 'success',
       title: "Salvo com sucesso",
   })
}}
var posicao;
function mostrar()
{
let nomeBanco = "login"
let vetor = [];
resposta = document.getElementById('nome1');
resposta.innerHTML = "";
vetor = JSON.parse(localStorage.getItem(nomeBanco));
if(vetor==null)
{
Swal.fire({
   icon: 'error',
   title: "Não tem nenhum dado ainda!",
})

}
else
{
for(i=0;i<vetor.length;i++)
{

 
resposta.innerHTML += "<hr><p>Nome: "+vetor[i].nome+"</p>";
resposta.innerHTML += "<p>Pontos: "+vetor[i].pontos+"</p>"
   
}
}
}

function jogo() 
{

    document.getElementById('pagina_1').classList.remove("invisivel")
    document.getElementById('cadastro').classList.add("invisivel")

}
function cadas()
{

    document.getElementById('pagina_1').classList.add("invisivel")
    document.getElementById('cadastro').classList.remove("invisivel")


}