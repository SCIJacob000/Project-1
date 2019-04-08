class Player{
	fish1 = null;
	fish2 = null;
	fish3 = null;
	fish4 = null;
	fish5 = null;
	total = null;
	constructor(name){
		name = this.name
	}

	castRod(){

		$('#rod').velocity({rotateX: "90deg"}); // makes rod shake as well as initiates the catchFish function  
		//alerts the player they have a Fish On!
		game.runSlider();
		//if caught puts fish on display hook and adds weigght to total catch value! probably will break this up into a few functions 
	};
	catchFish(){
		game.stopSlider();
	};
	smallInTheBox(){

	}
	medInTheBox(){

	}
	bigInTheBox(){

	}
	trophyInTheBox(){
		
	}	
}

class Fish {
	constructor(size,weight){
		this.size = size;
		this.weight = weight;
	};
	breakTheLine(){
		// if the player does really bad on the bar challenge then the fish will break the line and swim away!
	}
}
const smallFishy = new Fish(6,5)
const mediumFishy = new Fish(12,10)
const bigFishy = new Fish(18,15)
const trophyFishy = new Fish(24,25)

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
		this.slider = setInterval(() =>{
			$('#block').velocity({marginLeft: "300px"}, { duration: 550 }).velocity({marginLeft: "0px"}, { duration: 550 })
			},1100)
	},
	stopSlider(){
		clearInterval(this.slider);
		$('#block').velocity("stop", true);
	},
	displayStatsP1(){

	},
	displayStatsP2(){

	},
}

const player1 = new Player();//input from box 
const player2 = new Player();//input fromt box


$('img').on('click', () =>{
	player1.castRod();
});

$('#bar').on('click', function(){
	player1.catchFish();
	//parseInt($('#block').css('marginLeft'))
});























