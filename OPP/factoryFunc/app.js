function hex(r,g,b) {
    return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
}

function rgb(r,g,b){
    return `rgb(${r}, ${g}, ${b})`
};

function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g =  g;
    color.b =  b;
    color.rgb = function(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    };
    color.hex = function(){
        return '#' + ((1<<24) + (r<<16)  + (g<<8) + b).toString(16).slice(1);
    }
    return color 
};


const color = makeColor(255,231,234);
console.log(color.hex())

