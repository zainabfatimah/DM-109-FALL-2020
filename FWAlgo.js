
## DESCRIPTION ##
In deriving the matrices, the Warshall algorithm and the Rectangular algorithm have exactly the same efficiency.
For the phases, due to the reduced amount of computation, the Rectangular algorithm extracts the corresponding matrices much faster.
Using virtual data, this has been graphically clarified.
Time Complexity of Warshall Algorithm O(n³).
/////////////////////////////////////////////////////////////////////////////////////
var taInput, divOutput;
var btnRun;

window.onload = function() {
  console.log("Hooray! Its working");
  taInput = document.getElementById('txtInput');
  divOutput = document.getElementById('divOutput');
  btnRun = document.getElementById('btnRun');
} //end window.onload

function runFwAlgo(){
  console.log("Running Warshall")
  divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"
  FwAlgo();
  graph();
  //Get Input from 
}//end run

function FwAlgo(){
  var inarr = [];
  var inval = taInput.value;
  var arr0 = inval.split('\n');
  var mat100 = [];
  var mat1 = []; var mat2 = []; var mat3 = []; var mat4 = []; var mat5 = [];
  var mat6 = []; var mat7 = []; var mat8 = []; var mat9 = []; var mat10 = [];

  for (
    var i = 0; 
    i < arr0.length;
     i++
    ) 
  {

    inarr[i] = arr0[i].split(',');

  }

  var box = inarr;

  for(
    var i = 0; 
    i < inarr.length; 
    i++
    )
  {

    for(
      var j=0;
      j<inarr.length;
      j++
      )
    {

      box[i][j] = parseInt(inarr[i][j]);

    }

  }
divOutput.innerHTML += "Random Matrices";
divOutput.innerHTML += "<br />";

for(var i=0; i<100; i++) {
    mat100[i] = [];
    divOutput.innerHTML += "[";
    for(var j=0; j<100; j++) {
      var number = '';
      rd = Math.random();
      if (rd > 0.5) 
        number = 1;
      else 
        number = 0;
      mat100[i][j] = number;
      divOutput.innerHTML += mat100[i][j] + ' ';
    }   
    divOutput.innerHTML += "]";
    divOutput.innerHTML += "<br />";
}

divOutput.innerHTML += "<br />";
divOutput.innerHTML += " All 10 Matrices";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    mat1[i] = [];
    for(var j=0; j<4; j++) {
      var number = mat100[i][j];
      mat1[i][j] = number;
      
    }   
}
console.log(mat1);
var count = mat1.length;
var result = mat1;
for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      display(result);

    }

  }

divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    mat2[i] = [];
    for(var j=4; j<8; j++) {
      var number = mat100[i][j];
      mat2[i][j] = number;

    }   
}
for(var i=0; i<mat2.length; i++) {
  mat2[i] = mat2[i].filter(function (el) {
    return el != null;
  });
}


console.log(mat2);
var count = mat2.length;
var result = mat2;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      display(result);

    }

  }

divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    mat3[i] = [];
    for(var j=8; j<12; j++) {
      var number = mat100[i][j];
      mat3[i][j] = number;

    }   
}

for(var i=0; i<mat3.length; i++) {
  mat3[i] = mat3[i].filter(function (el) {
    return el != null;
  });
}


console.log(mat3);
var count = mat3.length;
var result = mat3;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      display(result);

    }

  }
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    mat4[i] = [];
    for(var j=12; j<16; j++) {
      var number = mat100[i][j];
      mat4[i][j] = number;

    }   
}
for(var i=0; i<mat4.length; i++) {
  mat4[i] = mat4[i].filter(function (el) {
    return el != null;
  });
}
console.log(mat4);
var count = mat4.length;
var result = mat4;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      display(result);

    }

  }

divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    mat5[i] = [];
    for(var j=16; j<20; j++) {
      var number = mat100[i][j];
      mat5[i][j] = number;

    }   
}

for(var i=0; i<mat5.length; i++) {
  mat5[i] = mat5[i].filter(function (el) {
    return el != null;
  });
}


console.log(mat5);
var count = mat5.length;
var result = mat5;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      display(result);

    }

  }
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    mat6[i] = [];
    for(var j=20; j<24; j++) {
      var number = mat100[i][j];
      mat6[i][j] = number;

    }   
}

for(var i=0; i<mat6.length; i++) {
  mat6[i] = mat6[i].filter(function (el) {
    return el != null;
  });
}
console.log(mat6);
var count = mat6.length;
var result = mat6;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      display(result);

    }

  }
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    mat7[i] = [];
    for(var j=24; j<28; j++) {
      var number = mat100[i][j];
      mat7[i][j] = number;

    }   
}

for(var i=0; i<mat7.length; i++) {
  mat7[i] = mat7[i].filter(function (el) {
    return el != null;
  });
}


console.log(mat7);
var count = mat7.length;
var result = mat7;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      display(result);

    }

  }
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    mat8[i] = [];
    for(var j=28; j<32; j++) {
      var number = mat100[i][j];
      mat8[i][j] = number;

    }   
}

for(var i=0; i<mat8.length; i++) {
  mat8[i] = mat8[i].filter(function (el) {
    return el != null;
  });
}


console.log(mat8);
var count = mat8.length;
var result = mat8;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      display(result);

    }

  }
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    mat9[i] = [];
    for(var j=32; j<36; j++) {
      var number = mat100[i][j];
      mat9[i][j] = number;

    }   
}

for(var i=0; i<mat9.length; i++) {
  mat9[i] = mat9[i].filter(function (el) {
    return el != null;
  });
}
console.log(mat9);
var count = mat9.length;
var result = mat9;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      display(result);

    }

  }
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    mat10[i] = [];
    for(var j=36; j<40; j++) {
      var number = mat100[i][j];
      mat10[i][j] = number;

    }   
}

for(var i=0; i<mat10.length; i++) {
  mat10[i] = mat10[i].filter(function (el) {
    return el != null;
  });
}


console.log(mat10);
var count = mat10.length;
var result = mat10;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      display(result);

    }

  }
  
function display(result){

  var count = result.length;

  for (
    var i = 0;
     i< count;
      i++)
  {

    divOutput.innerHTML += "<br />";

    for (
      var j = 0;
      j<count;
      j++
      )
    {

      divOutput.innerHTML += result[i][j];

      divOutput.innerHTML += " ";

    }

  }

}//end sol1
alert('Performance Now : ' + performance.now());
time_t = performance.now();
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "   Time: " + time_t;

var graph = {
    x:['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
    y: [time_t],
    type: 'scatter'
};

var data = [graph];

var layout = {
    title: 'Warshall Agorithm Graph',
    showlegend: false
};

Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});

}
