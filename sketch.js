var fire;
var jan = 0;
var feb = 0;
var mar = 0;
var apr = 0;
var may = 0;
var jun = 0;
var jul = 0;
var aug = 0;
var sep = 0;
var oct = 0;
var nov = 0;
var dec = 0;

function preload() {
	fire = loadTable("fire.csv", "csv", "header");
}

function setup() {
	noStroke();
	smooth();
	createCanvas(windowWidth, windowHeight);
	console.log(fire);

	for(var i = 0; i < fire.getRowCount(); i=i+1) {

		var dates = fire.getString(i, "DISPATCH DATE");
		var datesArray = split(dates, "/");
		var month = int(datesArray[0]);
		
		if(month == 1){jan++;}
		if(month == 2){feb++;}
		if(month == 3){mar++;}
		if(month == 4){apr++;}
		if(month == 5){may++;}
		if(month == 6){jun++;}
		if(month == 7){jul++;}
		if(month == 8){aug++;}
		if(month == 9){sep++;}
		if(month == 10){oct++;}
		if(month == 11){nov++;}
		if(month == 12){dec++;}

	}

	console.log("jan", jan);
	console.log("feb", feb);
	console.log("mar", mar);
	console.log("apr", apr);
	console.log("may", may);
	console.log("jun", jun);
	console.log("jul", jul);
	console.log("aug", aug);
	console.log("sep", sep);
	console.log("oct", oct);
	console.log("nov", nov);
	console.log("dec", dec);

	colorMode(HSB, 255);
	background(0, 0, 0);

	fill(map(windowWidth/12*1, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*1)-width/12/2, height/2, map(jan, 0, 18000, 0, width/12)); 
	fill(map(windowWidth/12*2, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*2)-width/12/2, height/2, map(feb, 0, 18000, 0, width/12));
	fill(map(windowWidth/12*3, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*3)-width/12/2, height/2, map(mar, 0, 18000, 0, width/12));
	fill(map(windowWidth/12*4, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*4)-width/12/2, height/2, map(apr, 0, 18000, 0, width/12));
	fill(map(windowWidth/12*5, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*5)-width/12/2, height/2, map(may, 0, 18000, 0, width/12));
	fill(map(windowWidth/12*6, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*6)-width/12/2, height/2, map(jun, 0, 18000, 0, width/12));
	fill(map(windowWidth/12*7, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*7)-width/12/2, height/2, map(jul, 0, 18000, 0, width/12));
	fill(map(windowWidth/12*8, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*8)-width/12/2, height/2, map(aug, 0, 18000, 0, width/12));
	fill(map(windowWidth/12*9, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*9)-width/12/2, height/2, map(sep, 0, 18000, 0, width/12));
	fill(map(windowWidth/12*10, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*10)-width/12/2, height/2, map(oct, 0, 18000, 0, width/12));
	fill(map(windowWidth/12*11, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*11)-width/12/2, height/2, map(nov, 0, 18000, 0, width/12));
	fill(map(windowWidth/12*12, 0, windowWidth, 0, 40), 255, 255);
	ellipse((width/12*12)-width/12/2, height/2, map(dec, 0, 18000, 0, width/12));
}

function draw() {

}