interface Animal{
    move();
}

class Snake implements Animal
{

    constructor()
    {
        
    }

    move1(){
        console.log("Snake is moving");
    }
}

let obj = new Snake();
obj.move();
