interface Animal{
    move();
}

class Snake implements Animal
{

    constructor()
    {
        
    }

    move(){
        console.log("Snake is moving");
    }
}

var obj:Animal;
obj= new Snake();
obj.move();
