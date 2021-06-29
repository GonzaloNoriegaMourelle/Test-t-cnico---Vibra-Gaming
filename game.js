export class Game extends Phaser.Scene{

    constructor(){
        super({key: 'game'});
    }

    preload(){

        this.load.image('background','images/frame.png');
        this.load.image('spin', 'images/btn_spin.png');
        this.load.image('price','images/prize_window.png');

        //simbolos del juegos
        var trebol    = this.load.image('trebol','images/symbols/sym_a.png');       
        var campana  = this.load.image('campana','images/symbols/sym_b.png');     
        var frutilla  = this.load.image('frutilla','images/symbols/sym_c.png');
        var uvaRacimo = this.load.image('uvaRacimo','images/symbols/sym_d.png');
        var uvaSola   = this.load.image('uvaSola','images/symbols/sym_e.png');

        
    }
    create (){
        var linea1 = 0;
        this.add.image(250,250,'background');

        this.add.image(250,250,'trebol');
        this.add.image(250,250,'campana');
        this.add.image(250,250,'frutilla');
        this.add.image(250,250,'uvaRacimo');
        this.add.image(250,250,'uvaSola');
    
      
        
        this.add.image(400,540,'spin');
        this.add.image(100,540,'price');
    }

    update(){

        var numero = Phaser.Math.Between(this.trebol ,this.campana ,this.frutilla,this.uvaRacimo,this.uvaSola);

        for (this.linea1= 0; this.linea1 < 3; this.linea1++) {
            this.add.image(250,250,numero);
            
        }
    }
}