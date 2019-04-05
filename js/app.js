class Player{
	fish1 = null;
	fish2 = null;
	fish3 = null;
	fish4 = null;
	fish5 = null;
	total = null;

	castRod(){
		// makes rod shake as well as initiates the catchFish function  
		//alerts the player they have a Fish On!
		game.runSlider();
		//if caught puts fish on display hook and adds weigght to total catch value! probably will break this up into a few functions 
	};
	catchFish(){
		
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
			this.time += 1
				
		},2000)
	},
	runSlider(){
		// if($('#block').css('marginLeft') <= 199){
		const slider =setInterval(() =>{
			$('#block').velocity({marginLeft: "200px"}, { duration: 500 }).velocity({marginLeft: "0px"}, { duration: 500 })
			},1000)
	}
}

const player1 = new Player();


$('').on('click', () =>{

});

$('').on('click', () =>{

});




























