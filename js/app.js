class Player{
	
	constructor(name){
		this.numberOfFish = 0;
		this.numberOfLost = 0;
		this.total = 0;
		this.name = name;
	}
	castRod(){
		//$('#pole').velocity({translateX: 40, rotateY: 90})
		//$('#rod').velocity({translateX: "200px", rotateZ: "45deg"})
		game.runSlider();
	}

	catchFish(){
		game.stopSlider();
		$('#gameupdates').prepend(`<li>FISH ON !!! </li>`)
		$('img').show();
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
	constructor(weight, name){
		this.weight = weight;
		this.name = name;
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
	slider: null,
	payLake(){
		if((player1.numberOfFish + player1.numberOfLost === 5) && (player2.numberOfFish + player2.numberOfLost === 5)){
			const player1 = new Player("");
			const player2 = new Player("");
			const smallFishy = new Fish(5)
			const mediumFishy = new Fish(10)
			const bigFishy = new Fish(15)
			const trophyFishy = new Fish(25)
			player1.name = $('#name-box1').show()
			player2.name = $('#name-box2').show()
			if(player1.total > player2.total){
			$('#gameupdates').text(`${player1.name} wins! Please Enter new names in the boxes and press the Lets Go Fishin button to play again!`)
			}
			else{
			$('#gameupdates').text(`${player2.name} wins! Please Enter new names in the boxes and press the Lets Go Fishin button to play again!`)	
			}		
		}
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
// begins the game applys names given to players accdordingly and displays their scores/stats
$('button').on('click', function(){
	player1.name = $('#name-box1').val()
	$('#name-box1').hide();
	player2.name = $('#name-box2').val()
	$('#name-box2').hide();
	game.displayStatsP1();
	game.displayStatsP2();
	$('#gameupdates').prepend(`<li>It's now ${player1.name}'s turn! Click the rod to cast off and get fishin!</li>`)
	game.payLake();
});



//upon clicking the rod the bar starts moving 
$('img').on('click', function(){
	player1.castRod();
	$('img').hide();
	//$('#guide').append('<img id="bobber" src="https://www.trendyornaments.com/images/44115-2-.png"')

});







//clicking the bar to stop the meter at different places will effect what size fish you catch
	// // if it's in the middle
	// if((parseInt($('#block').css('marginLeft')) > 135) && (parseInt($('#block').css('marginLeft')) < 165)){ 
	// 	//console.log("it's in the middle");

	// 	// compare number of turns taken -- if player 1 has gone more times
	// 	if(player1.numberOfFish + player1.numberOfLost == player2.numberOfFish + player2.numberOfLost) {
	// 		player1.catchFish();
	// 		player1.trophyInTheBox();
	// 		console.log(player1);
	// 		game.displayStatsP1();
	// 		$('#gameupdates').prepend(`<li>It's now ${player2.name}'s turn! Click the rod to cast off and get fishin!</li>`)


	// 	}
	// 	else {
	// 		player2.catchFish();
	// 		player2.trophyInTheBox();
	// 		console.log(player2);
	// 		game.displayStatsP2();
	// 		$('#gameupdates').prepend(`<li>It's now ${player1.name}'s turn! Click the rod to cast off and get fishin!</li>`)
	// 	}
	// }

	// // if it's a little off center
	// else if((parseInt($('#block').css('marginLeft')) > 105) && (parseInt($('#block').css('marginLeft')) <= 135)  || (parseInt($('#block').css('marginLeft')) >= 165) && (parseInt($('#block').css('marginLeft')) < 195)){
		
	// 	if(player1.numberOfFish + player1.numberOfLost <= player2.numberOfFish + player2.numberOfLost) {
			
	// 		player1.catchFish();
	// 		player1.bigInTheBox();
	// 		console.log(player1);
	// 		game.displayStatsP1();
	// 		$('#gameupdates').prepend(`<li>Its now ${player2.name}'s turn! Click the rod to cast off and get fishin!</li>`)
			
	// 	}

	// 	else{
			
	// 		player2.catchFish();
	// 		player2.bigInTheBox();
	// 		console.log(player2);
	// 		game.displayStatsP2();
	// 		$('#gameupdates').prepend(`<li>Its now ${player1.name}'s turn! Click the rod to cast off and get fishin!</li>`)
	// 	}
	// }
	// // if it's moderately off center
	// else if((parseInt($('#block').css('marginLeft')) > 75) && (parseInt($('#block').css('marginLeft')) <= 105) || (parseInt($('#block').css('marginLeft')) >= 195) && (parseInt($('#block').css('marginLeft')) < 225)){
		
	// 	if(player1.numberOfFish + player1.numberOfLost <= player2.numberOfFish + player2.numberOfLost){
			
	// 		player1.catchFish();
	// 		player1.medInTheBox();
	// 		console.log(player1);
	// 		game.displayStatsP1();
	// 		$('#gameupdates').prepend(`<li>Its now ${player2.name}'s turn! Click the rod to cast off and get fishin!</li>`)
	// 	}
	// 	else{
	// 		player2.catchFish();
	// 		player2.medInTheBox();
	// 		console.log(player2);
	// 		game.displayStatsP2();
	// 		$('#gameupdates').prepend(`<li>Its now ${player1.name}'s turn! Click the rod to cast off and get fishin!</li>`)
	// 	}
	// } 
	// // if it's near the edge
	// else if((parseInt($('#block').css('marginLeft')) > 40) && (parseInt($('#block').css('marginLeft')) <= 75) || (parseInt($('#block').css('marginLeft')) >= 225) && (parseInt($('#block').css('marginLeft')) < 255)){
	// 	if(player1.numberOfFish + player1.numberOfLost <= player2.numberOfFish + player2.numberOfLost){
	// 		player1.catchFish();
	// 		player1.smallInTheBox();
	// 		console.log(player1);
	// 		game.displayStatsP1();
	// 		$('#gameupdates').prepend(`<li>Its now ${player2.name}'s turn! Click the rod to cast off and get fishin!</li>`)



	// 	}
	// 	else{
	// 		player2.catchFish();
	// 		player2.smallInTheBox();
	// 		console.log(player2);
	// 		game.displayStatsP2();
	// 		$('#gameupdates').prepend(`<li>Its now ${player1.name}'s turn! Click the rod to cast off and get fishin!</li>`)

	// 	}
	
	// if you blew it
	
	// 	if(player1.numberOfFish + player1.numberOfLost <= player2.numberOfFish + player2.numberOfLost){
	// 		player1.catchFish();
	// 		smallFishy.breakTheLine();
	// 		console.log(player1);
	// 		game.displayStatsP1();
	// 		$('#gameupdates').prepend(`<li>Its now ${player2.name}'s turn! Click the rod to cast off and get fishin!</li>`)


	// 	}
	// 	else{
	// 		player2.catchFish();
	// 		smallFishy.breakTheLine();
	// 		console.log(player2);
	// 		game.displayStatsP2();
	// 		$('#gameupdates').prepend(`<li>Its now ${player1.name}'s turn! Click the rod to cast off and get fishin!</li>`)

	// 	}
	// }
 // });


//my old code lies above in the darkness!


$('#bar').on('click', function(){
	if(player1.numberOfFish + player1.numberOfLost == player2.numberOfFish + player2.numberOfLost) {
		player1.catchFish();
		if((parseInt($('#block').css('marginLeft')) > 135) && (parseInt($('#block').css('marginLeft')) < 165)){ 
			player1.trophyInTheBox();
			game.displayStatsP1();
			$('#gameupdates').prepend(`<li>It's now ${player2.name}'s turn! Click the rod to cast off and get fishin!</li>`)
		}
		else if((parseInt($('#block').css('marginLeft')) > 105) && (parseInt($('#block').css('marginLeft')) <= 135)  || (parseInt($('#block').css('marginLeft')) >= 165) && (parseInt($('#block').css('marginLeft')) < 195)){
			player1.bigInTheBox();
			game.displayStatsP1();
			$('#gameupdates').prepend(`<li>Its now ${player2.name}'s turn! Click the rod to cast off and get fishin!</li>`)
			}
		else if((parseInt($('#block').css('marginLeft')) > 75) && (parseInt($('#block').css('marginLeft')) <= 105) || (parseInt($('#block').css('marginLeft')) >= 195) && (parseInt($('#block').css('marginLeft')) < 225)){
			player1.medInTheBox();
			game.displayStatsP1();
			$('#gameupdates').prepend(`<li>Its now ${player2.name}'s turn! Click the rod to cast off and get fishin!</li>`)
		}
		else if((parseInt($('#block').css('marginLeft')) > 40) && (parseInt($('#block').css('marginLeft')) <= 75) || (parseInt($('#block').css('marginLeft')) >= 225) && (parseInt($('#block').css('marginLeft')) < 255)){
			player1.smallInTheBox();
			game.displayStatsP1();
			$('#gameupdates').prepend(`<li>Its now ${player2.name}'s turn! Click the rod to cast off and get fishin!</li>`)
		}
		else{
			smallFishy.breakTheLine();
			$('#gameupdates').prepend(`<li>Its now ${player2.name}'s turn! Click the rod to cast off and get fishin!</li>`)
			game.displayStatsP1();
		}
	}
	else{
		player2.catchFish();
		if((parseInt($('#block').css('marginLeft')) > 135) && (parseInt($('#block').css('marginLeft')) < 165)){ 
			player2.trophyInTheBox();
			game.displayStatsP2();
			$('#gameupdates').prepend(`<li>It's now ${player1.name}'s turn! Click the rod to cast off and get fishin!</li>`)
		}
		else if((
			parseInt($('#block').css('marginLeft')) > 105) && (parseInt($('#block').css('marginLeft')) <= 135)  || (parseInt($('#block').css('marginLeft')) >= 165) && (parseInt($('#block').css('marginLeft')) < 195)){
			player2.bigInTheBox();
			game.displayStatsP2();
			$('#gameupdates').prepend(`<li>Its now ${player1.name}'s turn! Click the rod to cast off and get fishin!</li>`)
		}
		else if((parseInt($('#block').css('marginLeft')) > 75) && (parseInt($('#block').css('marginLeft')) <= 105) || (parseInt($('#block').css('marginLeft')) >= 195) && (parseInt($('#block').css('marginLeft')) < 225)){
			player2.medInTheBox();
			game.displayStatsP2();
			$('#gameupdates').prepend(`<li>Its now ${player1.name}'s turn! Click the rod to cast off and get fishin!</li>`)
		}
		else if((parseInt($('#block').css('marginLeft')) > 40) && (parseInt($('#block').css('marginLeft')) <= 75) || (parseInt($('#block').css('marginLeft')) >= 225) && (parseInt($('#block').css('marginLeft')) < 255)){
			player2.smallInTheBox();
			game.displayStatsP2();
			$('#gameupdates').prepend(`<li>Its now ${player1.name}'s turn! Click the rod to cast off and get fishin!</li>`)
		}
		else{	
			smallFishy.breakTheLine();
			$('#gameupdates').prepend(`<li>Its now ${player1.name}'s turn! Click the rod to cast off and get fishin!</li>`)
			game.displayStatsP2();

		}
	}
}
);

















