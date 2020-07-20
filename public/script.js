let count=0,tym;
let choices=['rock','paper','scissor'];
let Arr;
let players=[];
//Generating choices of players randomly
function generate(){
	players=[];
	count+=1;
	for(let i=0;i<4;i++)
	{
		let rand = Math.floor(Math.random()*3);
		players.push(choices[rand]);
	}
	document.getElementById("Iter").innerHTML="Iteration "+count+" is running";
	ChoiceTable();
	Compare();
	ResultsTable();
	if(count===50)
	{
		clearInterval(tym);
		alert("Game over");
		document.getElementById("Iter").innerHTML="Game over";
	}
}


//Evaluating the players choices
function Compare()
{
	Arr = new Array(4);
	for(let i=0;i<players.length;i++)
	{
	Arr[i] = new Array(4);
	switch(players[i])
	{
		case 'rock':
		  for(let j=0;j<players.length;j++)
		  {
			  if(j===i)
			  {
				  Arr[i][j]='-';
				  continue;
			  }
			  players[j]==='scissor'?Arr[i][j]=1:Arr[i][j]=0;
		  }
		  break;
		case 'paper':
		  for(let j=0;j<players.length;j++)
		  {
			  if(j===i)
			  {
				  Arr[i][j]='-';
				  continue;
			  }
			  players[j]==='rock'?Arr[i][j]=1:Arr[i][j]=0;
		  }
		  break;
	   case 'scissor':
		  for(let j=0;j<players.length;j++)
		  {
			  if(j===i)
			  {
				  Arr[i][j]='-';
				  continue;
			  }
			  players[j]==='paper'?Arr[i][j]=1:Arr[i][j]=0;
		  }
		  break;
		  
	}
	}
}


//Function to Create Choice Table
function ChoiceTable()
{
	
	var element = document.getElementById("results");
	var t1 = document.createElement("table");
	t1.classList.add("table");
	var caption = document.createElement("caption");
	var txt = document.createTextNode("Iteration"+count);
	caption.appendChild(txt);
	t1.appendChild(caption);
	var r1 = document.createElement("tr");
	var r2 = document.createElement("tr");
	for(let k=1;k<=4;k++)
	{
		var header = document.createElement("th");
		var txt = document.createTextNode('player'+k);
		header.appendChild(txt);
		r1.appendChild(header);
	}
	t1.appendChild(r1);
	for(let k=0;k<4;k++)
	{
		var data = document.createElement("td");
		var txt = document.createTextNode(players[k]);
		data.appendChild(txt);
		r2.appendChild(data);
	}
	t1.appendChild(r2);
	element.appendChild(t1);
}

//Creating Results Table
function ResultsTable()
{
	var element = document.getElementById("results");
	var t2 = document.createElement("table");
	t2.classList.add("table");
	var caption = document.createElement("caption");
	var txt = document.createTextNode("Results for Iteration "+count);
	caption.appendChild(txt);
	t2.appendChild(caption);
	//Creating headers for table
	var r1 = document.createElement("tr");
	var header = document.createElement("th");
	var txt = document.createTextNode(' ');
	header.appendChild(txt);
	r1.appendChild(header);
	for(let k=1;k<=4;k++)
	{
		var header = document.createElement("th");
		var txt = document.createTextNode("Player"+k);
		header.appendChild(txt);
		r1.appendChild(header);
	}
	t2.appendChild(r1);
	element.appendChild(t2);
	//Creating remaining rows
	for(let k=0;k<4;k++)
	{
		var row = document.createElement("tr");
		var header = document.createElement("th");
		var n = k+1
		var txt = document.createTextNode("Player"+n);
		header.appendChild(txt);
		row.appendChild(header);
		for(let l=0;l<4;l++)
		{
			var data = document.createElement("td");
			var txt = document.createTextNode(Arr[k][l]);
			data.appendChild(txt);
			row.appendChild(data);
		}
		t2.appendChild(row);
	}
}



function startgame()
{
	document.getElementById("btn").style.display="none";
   tym = setInterval(generate,1500);
}


