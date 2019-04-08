class Player{
	
	constructor(name){
		this.numberOfFish = 0;
		this.numberOfLost = 0;
		this.total = 0;
		this.name = name;
	}

	castRod(){


		$('#pole').velocity({translateX: "40px", rotateY: "90deg"});
		//$('#rod').velocity({translateX: "200px", rotateZ: "45deg"})
		

		//alerts the player they have a Fish On!
		


		game.runSlider();
		//if caught puts fish on display hook and adds weigght to total catch value! probably will break this up into a few functions 
	}

	catchFish(){
		game.stopSlider();
	}
	smallInTheBox(){
		this.numberOfFish = this.numberOfFish + 1
		this.total = this.total + smallFishy.weight
	}
	medInTheBox(){
		this.numberOfFish = this.numberOfFish + 1
		this.total = this.total + mediumFishy.weight
	}
	bigInTheBox(){
		this.numberOfFish = this.numberOfFish + 1
		this.total = this.total + bigFishy.weight

	}
	trophyInTheBox(){
		this.numberOfFish = this.numberOfFish + 1
		this.total = this.total + trophyFishy.weight
		
	}
}

class Fish {
	constructor(weight){
		this.weight = weight;
	};
	breakTheLine(){
		if(player1.numberOfFish + player1.numberOfLost <= player2.numberOfFish + player2.numberOfLost){
			player1.numberOfLost = player1.numberOfLost + 1
		}
		else{
			player2.numberOfLost = player2.numberOfLost + 1

		}
	}
}
const smallFishy = new Fish(5)
const mediumFishy = new Fish(10)
const bigFishy = new Fish(15)
const trophyFishy = new Fish(25)

const game = {
	time: 0,
	timeInt: null,
	slider: null,
	payLake(){
		//resets game to play again 
	},
	runSlider(){
		this.slider = setInterval(() =>{
			$('#block').velocity({marginLeft: "300px"}, { duration: 550 }).velocity({marginLeft: "0px"}, { duration: 550 })
			},1100)
	},
	stopSlider(){ console.log("stop");
		clearInterval(this.slider);
		$('#block').velocity("stop", true);
	},
	displayStatsP1(){
		$('#p1').text(`Fisherman:${player1.name} Total Catch: ${player1.total} Fish Lost:${player1.numberOfLost}`)

	},
	displayStatsP2(){
		$('#p2').text(`Fisherman:${player2.name} Total Catch: ${player2.total} Fish Lost:${player2.numberOfLost}`)

	},
}

const player1 = new Player("");
const player2 = new Player("");

$('button').on('click', function(){
	player1.name = $('#name-box1').val()
	$('#name-box1').hide();
	player2.name = $('#name-box2').val()
	$('#name-box2').hide();
	game.displayStatsP1();
	game.displayStatsP2();
});

$('img').on('click', function(){
	player1.castRod();
});








$(document).on('keydown', function(){
	// if it's in the middle
	if((parseInt($('#block').css('marginLeft')) > 135) && (parseInt($('#block').css('marginLeft')) < 165)){ 
		//console.log("it's in the middle");

		// compare number of turns taken -- if player 1 has gone more times
		if(player1.numberOfFish + player1.numberOfLost == player2.numberOfFish + player2.numberOfLost) {
			player1.catchFish();
			player1.trophyInTheBox();
			console.log(player1);
			game.displayStatsP1();
		}
		else {
			player2.catchFish();
			player2.trophyInTheBox();
			console.log(player2);
			game.displayStatsP2();
		}
	}

	// if it's a little off center
	else if((parseInt($('#block').css('marginLeft')) > 105) && (parseInt($('#block').css('marginLeft')) <= 135)  || (parseInt($('#block').css('marginLeft')) >= 165) && (parseInt($('#block').css('marginLeft')) < 195)){
		
		if(player1.numberOfFish + player1.numberOfLost <= player2.numberOfFish + player2.numberOfLost) {
			
			player1.catchFish();
			player1.bigInTheBox();
			console.log(player1);
			game.displayStatsP1();


		}

		else{
			
			player2.catchFish();
			player2.bigInTheBox();
			console.log(player2);
			game.displayStatsP2();


		}
	}
	// if it's moderately off center
	else if((parseInt($('#block').css('marginLeft')) > 75) && (parseInt($('#block').css('marginLeft')) <= 105) || (parseInt($('#block').css('marginLeft')) >= 195) && (parseInt($('#block').css('marginLeft')) < 225)){
		
		if(player1.numberOfFish + player1.numberOfLost <= player2.numberOfFish + player2.numberOfLost){
			
			player1.catchFish();
			player1.medInTheBox();
			console.log(player1);
			game.displayStatsP1();
		}
		else{
			player2.catchFish();
			player2.medInTheBox();
			console.log(player2);
			game.displayStatsP2();
		}
	} 
	// if it's near the edge
	else if((parseInt($('#block').css('marginLeft')) > 40) && (parseInt($('#block').css('marginLeft')) <= 75) || (parseInt($('#block').css('marginLeft')) >= 225) && (parseInt($('#block').css('marginLeft')) < 255)){
		if(player1.numberOfFish + player1.numberOfLost <= player2.numberOfFish + player2.numberOfLost){
			player1.catchFish();
			player1.smallInTheBox();
			console.log(player1);
			game.displayStatsP1();


		}
		else{
			player2.catchFish();
			player2.smallInTheBox();
			console.log(player2);
			game.displayStatsP2();
		}
	}
	// if you blew it
	else{
		if(player1.numberOfFish + player1.numberOfLost <= player2.numberOfFish + player2.numberOfLost){
			player1.catchFish();
			smallFishy.breakTheLine();
			console.log(player1);
			game.displayStatsP1();

		}
		else{
			player2.catchFish();
			smallFishy.breakTheLine();
			console.log(player2);
			game.displayStatsP2();
		}
	}
 });























