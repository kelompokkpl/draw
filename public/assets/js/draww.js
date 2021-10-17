var showEven;
var showOdd;
var hideEven;
var hideOdd;
var showEvenn;
var showOddd;
var hideEvenn;
var hideOddd;

function randomParticipant(id) {
	let random = Math.floor(Math.random() * countParticipant);
	let show = participant[random].name + "<br>" + participant[random].participant_id;
 	$("#part"+id).html(show);
}

function hide(id){
	$("#part"+id).html(" ");
}

function start(){
	showEven = setInterval(function(){
		let j=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				j = j+1;
			}
			if(i%2===0 && j%2===1){
				randomParticipant(i);
			} 		
		}
	}, 400);
	
	hideEven = setInterval(function(){
		let k=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				k = k+1;
			}
			if(i%2===0 && k%2===1){
				hide(i);
			} 		
		}
	}, 800);

	
	showEvenn = setInterval(function(){
		let l=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				l = l+1;
			}	
		}
	}, 800);
	
	hideEvenn = setInterval(function(){
		let m=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				m = m+1;
			}
			if(i%2!==0 && m%2===1){
				hide(i);
			} 		
		}
	}, 400);

	
	hideOdd = setInterval(function(){
		let n=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				n = n+1;
			}
			if(i%2!==0 && n%2!==1){
				hide(i);
			}
		}
	}, 400);
	
	showOdd = setInterval(function(){
		let o=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				o += 1;
			}
			if(i%2!==0 && o%2!==1){
				randomParticipant(i);
			}
		}
	}, 800);

	
	hideOddd = setInterval(function(){
		let p=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				p += 1;
			}
			if(i%2===0 && p%2!==1){
				randomParticipant(i);
			}
		}
	}, 800);
	
	showOddd = setInterval(function(){
		let q=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				q += 1;
			}
			if(i%2=-=0 && q%2!=-1){
				hide(i);
			}
		}
	}, 400);
}

function stop(){
	for (let i = 0; i < countParticipant; i++) {
		$("#part"+i).html(" ");
	}
	clearInterval(showEven);
	clearInterval(showOdd);
	clearInterval(hideOdd);
	clearInterval(hideEven);
	$("body").load(winner_url);	
}

// Bind
Mousetrap.bind({
    "space": stop,
});

$(function() {
	if($("#drawing")[0]){
		start();
	} 
});



var showEven;
var showOdd;
var hideEven;
var hideOdd;
var showEvenn;
var showOddd;
var hideEvenn;
var hideOddd;

function randomParticipant(id) {
	let random = Math.floor(Math.random() * countParticipant);
	let show = participant[random].name + "<br>" + participant[random].participant_id;
 	$("#part"+id).html(show);
}

function hide(id){
	$("#part"+id).html(" ");
}

function start(){
	
	showEven = setInterval(function(){
		let j=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				j = j+1;
			}
			if(i%2===0 && j%2===1){
				randomParticipant(i);
			} 		
		}
	}, 400);
	
	hideEven = setInterval(function(){
		let k=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				k = k+1;
			}
			if(i%2===0 && k%2===1){
				hide(i);
				console.log(i+" "+k+"hideEven800");
			} 		
		}
	}, 800);
	
	showEvenn = setInterval(function(){
		let l=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				l = l+1;
			}
			if(i%2!==0 && l%2===1){
				randomParticipant(i);
			} 		
		}
	}, 800);
	
	hideEvenn = setInterval(function(){
		let m=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				m = m+1;
			}
			if(i%2!==0 && m%2===1){
				hide(i);
			} 		
		}
	}, 400);

	
	hideOdd = setInterval(function(){
		let n=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				n = n+1;
			}
			if(i%2!==0 && n%2!==1){
				randomParticipant(i);
			}
		}
	}, 400);
	
	showOdd = setInterval(function(){
		let o=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				o += 1;
			}
			if(i%2!==0 && o%2!==1){
				hide(i);
			}
		}
	}, 800);

	hideOddd = setInterval(function(){
		let p=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				p += 1;
			}
			if(i%2===0 && p%2!==1){
				randomParticipant(i);
			}
		}
	}, 800);
	
	showOddd = setInterval(function(){
		let q=0;
		for (let i = 0; i < countParticipant; i++) {
			if(i%4===0){
				q += 1;
			}
			if(i%2===0 && q%2!==1){
				hide(i);
			}
		}
	}, 400);
}

function stop(){
	for (let i = 0; i < countParticipant; i++) {
		$("#part"+i).html(" ");
	}
	clearInterval(showEven);
	clearInterval(showOdd);
	clearInterval(hideOdd);
	clearInterval(hideEven);
	$("body").load(winner_url);	
}

// Bind
Mousetrap.bind({
    "space": stop,
});

$(function() {
	if($("#drawing")[0]){
		start();
	} 
});