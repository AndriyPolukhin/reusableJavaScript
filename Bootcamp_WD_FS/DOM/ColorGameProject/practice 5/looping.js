// var height = 0;

do {
    // console.log("Height: ");
    var height = prompt("Tell me the Heigh of the pyramid, please ");
    if(height == 0) {
        return 0;
    }
} while(height < 1 || height > 23);

for(i = 0; i < height; i++) {
    for(j = 0; j < height-i-1;j++){
        console.log(" ");
    }
    for(d = 0; d < i+2; d++) {
        console.log("#");
    }
    
}