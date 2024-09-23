const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20"
 }
 const objPersonagem2 = objPersonagem //referencia
 const objPersonagem3 = Object.create(objPersonagem) //cópia
 
 objPersonagem2.nivel = 10

 console.log(objPersonagem)

 objPersonagem3.nivel = 30

 console.log(objPersonagem)
