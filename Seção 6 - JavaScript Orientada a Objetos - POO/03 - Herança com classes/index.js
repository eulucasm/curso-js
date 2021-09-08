class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' Ja ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' Ja Desligado');
            return;
        }
        this.ligado = false;

    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); //chama o construtor da classe pai para uso da classe filho
        this.cor = cor;
        this.modelo = modelo;
    }

}

class Tablet extends DispositivoEletronico {
    constructor(nome, tamanho) {
        super(nome);
        this.tamanho = tamanho;
    }
}


const s1 = new Smartphone('iphone', 'preto', '11');
console.log(s1);