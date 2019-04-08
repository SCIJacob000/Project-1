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
		
	};
	medInTheBox(){

	};
	bigInTheBox(){

	};
	trophyInTheBox(){
		
	};	
}

class Fish {
	constructor(weight){
		this.weight = weight;
	};
	breakTheLine(){
		//alert the player that the fish broke the line and got away
	}
}
const smallFishy = new Fish(5)
const mediumFishy = new Fish(10)
const bigFishy = new Fish(15)
const trophyFishy = new Fish(25)

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
// 	//parseInt($('#block').css('marginLeft');
	if(parseInt($('#block').css('marginLeft')) > 135 && parseInt($('#block').css('marginLeft') < 165)){
		if(){
			player1.trophyInTheBox();
		}
		else{
			player2.trophyInTheBox();
		}
	}
	else if(parseInt($('#block').css('marginLeft')) > 105 && parseInt($('#block').css('marginLeft')) <= 135  || parseInt($('#block').css('marginLeft')) >= 165 && parseInt($('#block').css('marginLeft')) < 195){
		if(){
			player1.bigInTheBox();
		}
		else{
			player2.bigInTheBox();
		}
	}
	else if(parseInt($('#block').css('marginLeft')) > 75 && parseInt($('#block').css('marginLeft')) <= 105 || parseInt($('#block').css('marginLeft')) >= 195 && parseInt($('#block').css('marginLeft')) < 225){
		if(){
			player1.medInTheBox();
		}
		else{
			player2.medInTheBox();
		}
	} 
	else if(parseInt($('#block').css('marginLeft')) > 40 && parseInt($('#block').css('marginLeft')) <= 75 || parseInt($('#block').css('marginLeft')) >= 225 && parseInt($('#block').css('marginLeft')) < 255){
		if(){
			player1.smallInTheBox();
		}
		else{
			player2.smallInTheBox();
		}
	}
	else{
		smallFishy.breakTheLine();
	}
 });























