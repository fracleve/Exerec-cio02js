/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:*/


let listStudents = [
    {
      namedostudent: "João marco",
      firsttest: 5,
      secondtest: 8,
     
    },
    {
      namedostudent: "Henrique",
        firsttest: 6,
        secondtest: 8,
    },
    {
      namedostudent: " maria lucia",
        firsttest: 5,
        secondtest: 3,
    },
  ]
  
  function printmedia(firsttest,secondtest) {
  let average = (firsttest + secondtest) / 2
  return average
  }


          
for(let student of listStudents) {
  averageIndividual = printmedia(student.firsttest, student.secondtest)
    let approvedorno  =  averageIndividual < 7 ? 'Reprovado. Estude mais' : 'Parabéns aprovado'

    alert(`A average de ${student.namedostudent} é ${averageIndividual}.${approvedorno}`)
}       



      


  

  

  
 
 
 