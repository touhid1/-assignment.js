//FeetToMile 

function feetToMile(feet){

    if(feet<0){
        return "distance can't a neagative number !!"
    }
    else if(feet == null){
        return "give a feet value"
    }
    else{
        var result = (feet / 5280);
        var mile = result + " mile";
        
        return mile ;
    }
    
}
console.log(feetToMile(52800));


//woodCalculator

function woodCalculator(chair , table , bed){
    if(chair<0 || table<0 || bed<0){
        return "input items";
    }
    else if(chair == null || table == null || bed == null){
        return "you must be use three vlaue";
    }
    else{
        var woodForChair = chair * 1 ;
        var woodForTable = table * 3 ;
        var woodForBed = bed * 5 ;
        var totalwood = woodForChair + woodForTable + woodForBed ;
        var totalNeed = "you have to need " +totalwood + " cubic feet";

        return totalNeed;
    }
    
}
console.log(woodCalculator(14,4,3));

//brickCalculator

function brickCalculator(floor){
    if(floor > 0 && floor < 11){
        var feetBybricks = 15*1000 ;
        var totalBricks = floor * feetBybricks ;
        return "total "+totalBricks;
    }else if(floor > 10 && floor <21){
        var fristRange = 150000;
        var feetBybricks = 12*1000 ;
        var nthFloor = floor - 10 ;
        var totalBricks = (nthFloor * feetBybricks) + fristRange;
        return "total "+totalBricks;
    }else if(floor >= 21){
        var secondRange = 270000;
        var feetBybricks = 10*1000 ;
        var nthFloor = floor - 20 ;
        var totalBricks = (nthFloor * feetBybricks) + secondRange;
        return "total " +totalBricks;
    }else{
        return "number of floor is invalid" 
    }
}
console.log(brickCalculator(40));

//tinyFriends


function tinyFriend(names){

    var short = names[0];
        for(var i = 0 ; i<names.length ; i++){
            if(short.length > names[i].length){
                var short = names[i];
            }
        }
        return '"' + short + '"' + " is the tiny name"; 
}

var friend = ['Rakib' , 'sakib' , 'Araf' , 'Touhid' , 'Porosh' , 'misa' , 'joy'];
console.log(tinyFriend(friend));