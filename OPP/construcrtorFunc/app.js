function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
    
};

Color.prototype.rgb = function(){
    return `rgb(${this.r}, ${this.g}, ${this.b})`
};

Color.prototype.hex = function(){
    const {r,g,b}= this;
    return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0){
    const {r,g,b}= this;
    return `rgb(${r}, ${g}, ${b}, ${a})`
};



const black = new Color(255, 255, 255);
black.rgb()