class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //metodo de instância
    aumentarVolume() {
        this.volume += 2;
    }

    //metodo de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    //metodo estatico
    static trocaPilha() {
        console.log('vou trocar')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();