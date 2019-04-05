class Player{
	fish1 = null;
	fish2 = null;
	fish3 = null;
	fish4 = null;
	fish5 = null;
	total = null;

	castRod(){
		// makes rod shake as well as initiates the catchFish function  
	};
	catchFish(){
		//alerts the player they have a Fish On!
		//starts the meter to reel in the fish aka run the animation function for div id=block
		//if caught puts fish on display hook and adds weigght to total catch value! 
	}	
}

class Fish {
	constructor(size,weight){
		this.size = size;
		this.weight = weight;
	}
	breakTheLine(){
		// if the player does really bad on the bar challenge then the fish will break the line and swim away!
	}
}

const game = {
	time: 0,
	timeInt: null,
	payLake(){
		//resets game to play again
	},
	runGame(){
		// runs all necesary functions/ jquery to make game work 
	},
	fishOClock(){
		this.timeInt = setInterval(() => {
			console.log(this.time);
			this.time += 1
				
		},2000)
	}
}

$('').on('click', () =>{

});

$('').on('click', () =>{

});




























