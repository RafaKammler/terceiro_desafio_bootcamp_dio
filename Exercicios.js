ataque = ""
class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque = ""
        if (this.tipo == "mago"){
            ataque = "magia"
        }
        else if (this.tipo == "guerreiro"){
            ataque = "espada"
        }
        else if (this.tipo == "monge"){
            ataque = "artes marciais"
        }
        else if (this.tipo == "ninja"){
            ataque = "shuriken"
        }
        return ataque
    }
}

let nome = "Gandalf"
let idade = 100
let tipo = "mago"
let personagem1 = new heroi(nome, idade, tipo)
tipo_ataque = personagem1.atacar()
console.log(`O ${tipo} atacou usando ${tipo_ataque}`)

