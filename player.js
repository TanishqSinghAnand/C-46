class Form{
	constructor(){
		this.input = createInput('Username');
		this.submit = createButton('Submit');
		this.ready = createButton('Ready');
		this.ready.hide();
		this.name = null ;
		this.SUBMIT = createButton('Submit');
		this.SUBMIT.hide();

		//QUESTION 1
		this.Q1O1 = createButton('Week in air and surfaces');
		this.Q1O1.hide();
		this.Q1O2 = createButton('Up to 2 weeks');
		this.Q1O2.hide();
		this.Q1O3 = createButton('Several hours to days');
		this.Q1O3.hide();

		//QUESTION 2
		this.Q2O1 = createButton('Frequently wash hands');
		this.Q2O1.hide();
		this.Q2O2 = createButton('Wear a face mask');
		this.Q2O2.hide();

		//QUESTION 3
		this.Q3O1 = createButton('20%');
		this.Q3O1.hide();
		this.Q3O2 = createButton('40%');
		this.Q3O2.hide();
		this.Q3O3 = createButton('80%');
		this.Q3O3.hide();


		//QUESTION 4
		this.Q4O1 = createButton('1 foot');
		this.Q4O1.hide();
		this.Q4O2 = createButton('3 feet');
		this.Q4O2.hide();


	}

	display(){
		if(gamestate === 0){
			this.input.position(displayWidth/2-600,displayHeight + 1850);
			this.submit.position(185,2650);
		}

		if(gamestate === 2){
			//QUESTION 1
			this.Q1O1.show();
			this.Q1O2.show();
			this.Q1O3.show();

			//QUESTION 2
			this.Q2O1.show();
			this.Q2O2.show();

			//QUESTION 3 
			this.Q3O1.show();
			this.Q3O2.show();
			this.Q3O3.show();

			//QUESTION 4 
			this.Q4O1.show();
			this.Q4O2.show();


	//		this.SUBMIT.show();
	//		this.SUBMIT.position(600,2900);
		}
	}

	hidef(){	

		if(gamestate === 0){
			this.submit.mousePressed(()=>{
				    this.name= this.input.value();
					this.input.hide() ;
					this.submit.hide() ;
					gamestate = 1 ;
			});	
		}
		if(gamestate === 1){
			this.ready.show();
			this.ready.position(300,2700);
			stroke("red");
			strokeWeight(5);
			fill("yellow");
			text("Hello , "+ this.name + " , are you ready to take the quiz 😀  about Covid 19 ??",71,50);
			this.ready.mousePressed(()=>{
				gamestate = 2 ;
				this.ready.hide();
			});
		}

		if(gamestate === 2){

			//Question1
			stroke("red");
			strokeWeight(5);
			fill("yellow");
			text("Q1 How long does the novel coronavirus survive outside the body",77,50);
			this.Q1O1.position(77,2465);
			this.Q1O2.position(77,2495);
			this.Q1O3.position(77,2525);

			//QUESTION 2 
			text("Q2 What’s more important for preventing infection?",77,170);
			this.Q2O1.position(77,2585);
			this.Q2O2.position(77,2610);

			//QUESTION 3
			text("Q3 What percentage of people confirmed to have Covid-19 develop mild or moderate symptoms?",77,250);
			this.Q3O1.position(77,2665);
			this.Q3O2.position(77,2692);
			this.Q3O3.position(77,2718);

			//QUESTION 4
			stroke("red");
			strokeWeight(5);
			fill("yellow");
	//		console.log("tanishq");
			text("Q4 What is a safe distance to stay apart from someone who is sick",77,350);
			this.Q4O1.position(77,2770);
			this.Q4O2.position(77,2800);
			//text("Q4 What’s a safe distance to stay apart from someone who’s sick",77,2500);


			//END
			/*this.SUBMIT.mousePressed(()=>{
				gamestate = 3
			});*/

		}

	/*	if( gamestate === 3){

			//HIDING ALL
			this.Q1O1.hide();
			this.Q1O2.hide();
			this.Q1O3.hide();

			//QUESTION 2
			this.Q2O1.hide();
			this.Q2O2.hide();

			//QUESTION 3 
			this.Q3O1.hide();
			this.Q3O2.hide();
			this.Q3O3.hide();

			//QUESTION 4 
			this.Q4O1.hide();
			this.Q4O2.hide();

			//Question1
			textSize(20);
			stroke("red");
			strokeWeight(5);
			fill("yellow");
			text("Q1 How long does the novel coronavirus survive outside the body",77,50);
			textSize(10);
			stroke("yellow");
			strokeWeight(5);
			fill("red");
			text("i) Week in air and surfaces",77,60);
			text("ii) Up to 2 weeks",77,70);
			textSize(10);
			stroke("yellow");
			strokeWeight(5);
			fill("green");
			text("iii) 'Several hours to days",77,80);


			//QUESTION 2 
			text("Q2 What’s more important for preventing infection?",77,170);
			this.Q2O1.position(77,2630);
			this.Q2O2.position(77,2660);

			//QUESTION 3
			text("Q3 What percentage of people confirmed to have Covid-19 develop mild or moderate symptoms?",77,250);
			this.Q3O1.position(77,2710);
			this.Q3O2.position(77,2735);
			this.Q3O3.position(77,2761);

			//QUESTION 4
			stroke("red");
			strokeWeight(5);
			fill("yellow");
	//		console.log("tanishq");
			text("Q4 What is a safe distance to stay apart from someone who is sick",77,350);
			this.Q4O1.position(77,2810);
			this.Q4O2.position(77,2840);

		}*/
		}
		


		
}