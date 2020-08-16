//TV CLASS INHERITANCE




/////////////////////////////////////         PART A         ///////////////////////////////////////////////////
class TV_class{
    constructor(brand = "Sony", channel = 1, inches = "53", onOff = "Off", Vol = 50) {
        this.brand = brand;
        this.channel = channel;
        this.inches = inches;
        this.onOff = onOff;
        this.Vol = Vol;
    }

    set volController(Value) {
        if (Value > 0 && Value< 101) {
            this.Vol = Value;
        }
    }
   set setChannel(val){
        if (val > 0 && val < 51) {
            this.channel = val;
        }
        
    }

    resetTV(){
        this.channel = 1;
        this.Vol = 50;
    }

    get status(){
        let info = this.brand + " at Channel " + this.channel + ", Volume " + this.Vol;
        return info;
    }

}
//making the instance of TV_class
let myTV = new TV_class("Sansui", 2, 43, "ON", 70);
console.log(myTV);
//setting the volume 35
myTV.volController = 35;
console.log(myTV);
//setting the channel 60
myTV.setChannel = 65;
console.log(myTV);
//setting the channel 40
myTV.setChannel = 40;
console.log(myTV);
//getting the status using getter
console.log(myTV.status);




/////////////////////////////////////        PART B        // /////////////////////////////////////////////////



class LED_TV extends TV_class{
    constructor(scrnThickness, energy, life, reRate,viewAngle = 15, backlight = true) {
        super();
        this.scrnThickness = scrnThickness + "cm";
        this.energy = energy + "KW";
        this.life = life + "year";
        this.reRate = reRate + "seconds";
        this.viewAngle = viewAngle + "deg";
        this.backlight = backlight;
    }
    set viewingAngle(Angle) {
        this.viewAngle = Angle;
    }
    set backlit(opt) {
        if (opt === true || opt === false) {
            this.backlight = opt;
        }
    }
    get displayInfo() {
        let info = this.scrnThickness + " screen thickness with amazing refreshing rate of " + this.reRate + " having current viewing angle " + this.viewAngle + " with backlight " + this.backlight;
        return info;
    }

}

let Bravia = new LED_TV( 0.25, 35, 5, 10);
console.log(Bravia);
console.log(Bravia.displayInfo);

Bravia.viewingAngle = 25;
console.log(Bravia.viewAngle);





class Plasma_TV extends TV_class{
    constructor(scrnThickness, energy, life, reRate, viewAngle = 35, backlight = true) {
        super();
        this.scrnThickness = scrnThickness + "cm";
        this.energy = energy + "KW";
        this.life = life + "year";
        this.reRate = reRate + "seconds";
        this.viewAngle = viewAngle + "deg";
        this.backlight = backlight;
    }
    set viewingAngle(Angle) {
        this.viewAngle = Angle;
    }
    set backlit(opt) {
        if (opt === true || opt === false) {
            this.backlight = opt;
        }
    }
    get displayInfo() {
        let info = this.scrnThickness + " screen thickness with amazing refreshing rate of " + this.reRate + " having current viewing angle " + this.viewAngle + " with backlight " + this.backlight;
        return info;
    }

}

let LivePlasma = new Plasma_TV(0.15, 45, 3, 7);
console.log(LivePlasma);
console.log(LivePlasma.displayInfo);

LivePlasma.backlit = false;
console.log("Backlit of LivePlasma is switched to " + LivePlasma.backlight);