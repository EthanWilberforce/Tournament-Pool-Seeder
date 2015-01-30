
//Trims white space **use var.trim**
if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function()
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

var RAWentrants = "";
var entrants = RAWentrants.split(",")
var entPerPool = 5;
var numPools = entrants.length / entPerPool;
var count = true;

for (count ; count <= entrants.length ; count++){
  //need to place trimmed entrant names in the correct latex locations
}

//pass pdf to user
