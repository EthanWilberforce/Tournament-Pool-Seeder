//Provides the ability to replace all of x in a string with y
function replaceAll(find, replace, str){
  return str.replace(new RegExp(find, 'g'), replace);
}

//controlled by the dropdown menu, chooses which graph type is needed
function makeTex(){
  var entPerPool = document.getElementById("selNumPool").value;
  if(entPerPool == 5){
    createTex5();
  }
  if (entPerPool == 6){
    createTex6();
  }
  if (entPerPool == 7){
    createTex7();
  }
  if (entPerPool == 8){
    createTex8();
  }
  if (entPerPool == 9){
    createTex9();
  }
}

//createTex5-9 all build arrays of entrants into different table sizes
function createTex5() {
  var midx = "    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
    \\hline \n\
     & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] \\\\\\hline \n\
    xx[1] & \\multicolumn{1}{c|}{N/A} &&&& \\\\\\hline \n\
    xx[2] && \\multicolumn{1}{c|}{N/A} &&& \\\\\\hline \n\
    xx[3] &&& \\multicolumn{1}{c|}{N/A} && \\\\\\hline \n\
    xx[4] &&&& \\multicolumn{1}{c|}{N/A} & \\\\\\hline \n\
    xx[5] &&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline \n\
  \\end{tabular}\\\\ \n\ "
  var top = "\\documentclass[40pt]{article} \n\
  \\usepackage[landscape, margin=1cm]{geometry} \n\
  \\begin{document} \n\
    \\bgroup \n\
    \\LARGE \n\
    \\def\\arraystretch{3} \n\ ";
  var bot = "    \\egroup \n\
      \\end{document} ";
  var entPerPool = document.getElementById("selNumPool").value;
  var RAWentrants = document.getElementById("textraw").value;
  var entrants = RAWentrants.split(",").map(Function.prototype.call, String.prototype.trim);
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var tableCount = 0;
  var tablexycount = 0;
  var entsRemain = 0;

  //allows arrays of entrants that aren't multiple of the amount of pools in length
  if (entrants.length % entPerPool !== 0){
    var entsRemain = (entPerPool - (entrants.length % entPerPool))
    var entcount = entrants.length + 1
    while (entsRemain > 0){
      entrants.push("");
      entsRemain--;
    }
  }

  var mid ="";
  //builds the TeX code for x amount of tables
  for (var i = 0;i<numPools;i++){
    mid += replaceAll("xx",i,midx);

    tableCount += 1;
  }

  //adds the beginning and end to the mid TeX code
  var full = top+mid+bot;

  //replaces components on the graph with names of entrants
  for (var t = 0;t <= entrants.length*2;t++){
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    tablenum++;
    putname++;
    if (tablenum === tableCount){
      tablenum = 0;
      tablexycount++;
    }
    if (putname === entrants.length*2){
      document.getElementById("texout").value = full;
      console.log(full);
    }
  }
}

function createTex6(){
  var midx = "  \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
       & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] \\\\\\hline \n\
      xx[1] & \\multicolumn{1}{c|}{N/A} &&&&& \\\\\\hline \n\
      xx[2] && \\multicolumn{1}{c|}{N/A} &&&& \\\\\\hline \n\
      xx[3] &&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline \n\
      xx[4] &&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline \n\
      xx[5] &&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline \n\
      xx[6] &&&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\ "
  var top = "\\documentclass[40pt]{article} \n\
  \\usepackage[landscape, margin=1cm]{geometry} \n\
  \\begin{document} \n\
    \\bgroup \n\
    \\LARGE \n\
    \\def\\arraystretch{3} \n\ ";
  var bot = "    \\egroup \n\
      \\end{document} ";
   //Input taken from select on site
  var entPerPool = document.getElementById("selNumPool").value;
  var RAWentrants = document.getElementById("textraw").value;

  var entrants = RAWentrants.split(",").map(Function.prototype.call, String.prototype.trim);
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var tableCount = 0;
  var tablexycount = 0;
  var entsRemain = 0;
  if (entrants.length % entPerPool !== 0){
    var entsRemain = (entPerPool - (entrants.length % entPerPool))
    var entcount = entrants.length + 1
    while (entsRemain > 0){
      entrants.push("");
      entsRemain--;
    }
  }

  var mid ="";

  for (var i = 0;i<numPools;i++){
    mid += replaceAll("xx",i,midx);

    tableCount += 1;
  }
  var full = top+mid+bot;

  for (var t = 0;t <= entrants.length*2;t++){
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    tablenum++;
    putname++;
    if (tablenum === tableCount){
      tablenum = 0;
      tablexycount++;
    }
    if (putname === entrants.length*2){
      document.getElementById("texout").value = full;
      console.log(full);
    }
  }
}

function createTex7(){
  var midx ="\\begin{tabular}{|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|} \n\
    \\hline \n\
     & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] & xx[7] \\\\\\hline \n\
    xx[1] & \\multicolumn{1}{c|}{N/A} &&&&&& \\\\\\hline \n\
    xx[2] && \\multicolumn{1}{c|}{N/A} &&&&& \\\\\\hline \n\
    xx[3] &&& \\multicolumn{1}{c|}{N/A}&&&& \\\\\\hline \n\
    xx[4] &&&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline \n\
    xx[5] &&&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline \n\
    xx[6] &&&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline \n\
    xx[7] &&&&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline \n\
  \\end{tabular}\\\\ \n\ "
  var top = "\\documentclass[40pt]{article} \n\
  \\usepackage[landscape, margin=1cm]{geometry} \n\
  \\begin{document} \n\
    \\bgroup \n\
    \\LARGE \n\
    \\def\\arraystretch{3} \n\ ";
  var bot = "    \\egroup \n\
      \\end{document} ";
   //Input taken from select on site
  var entPerPool = document.getElementById("selNumPool").value;
  var RAWentrants = document.getElementById("textraw").value;

  var entrants = RAWentrants.split(",").map(Function.prototype.call, String.prototype.trim);
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var tableCount = 0;
  var tablexycount = 0;
  var entsRemain = 0;
  if (entrants.length % entPerPool !== 0){
    var entsRemain = (entPerPool - (entrants.length % entPerPool))
    var entcount = entrants.length + 1
    while (entsRemain > 0){
      entrants.push("");
      entsRemain--;
    }
  }

  var mid ="";

  for (var i = 0;i<numPools;i++){
    mid += replaceAll("xx",i,midx);

    tableCount += 1;
  }
  var full = top+mid+bot;

  for (var t = 0;t <= entrants.length*2;t++){
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    tablenum++;
    putname++;
    if (tablenum === tableCount){
      tablenum = 0;
      tablexycount++;
    }
    if (putname === entrants.length*2){
      document.getElementById("texout").value = full;
      console.log(full);
    }
  }
}

function createTex8(){
  var midx = "\\begin{tabular}{|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|} \n\
      \\hline \n\
       & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] & xx[7] & xx[8] \\\\\\hline \n\
      xx[1] & \\multicolumn{1}{c|}{N/A} &&&&&&& \\\\\\hline \n\
      xx[2] && \\multicolumn{1}{c|}{N/A} &&&&&& \\\\\\hline \n\
      xx[3] &&& \\multicolumn{1}{c|}{N/A}&&&&& \\\\\\hline \n\
      xx[4] &&&& \\multicolumn{1}{c|}{N/A}&&&& \\\\\\hline \n\
      xx[5] &&&&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline \n\
      xx[6] &&&&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline \n\
      xx[7] &&&&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline \n\
      xx[8] &&&&&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\ "
  var top = "\\documentclass[40pt]{article} \n\
  \\usepackage[landscape, margin=1cm]{geometry} \n\
    \\bgroup \n\
    \\LARGE \n\
    \\def\\arraystretch{2.6} \n\ ";
  var bot = "    \\egroup \n\
      \\end{document} ";
   //Input taken from select on site
  var entPerPool = document.getElementById("selNumPool").value;
  var RAWentrants = document.getElementById("textraw").value;

  var entrants = RAWentrants.split(",").map(Function.prototype.call, String.prototype.trim);
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var tableCount = 0;
  var tablexycount = 0;
  var entsRemain = 0;
  if (entrants.length % entPerPool !== 0){
    var entsRemain = (entPerPool - (entrants.length % entPerPool))
    var entcount = entrants.length + 1
    while (entsRemain > 0){
      entrants.push("");
      entsRemain--;
    }
  }

  var mid ="";

  for (var i = 0;i<numPools;i++){
    mid += replaceAll("xx",i,midx);

    tableCount += 1;
  }
  var full = top+mid+bot;

  for (var t = 0;t <= entrants.length*2;t++){
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    tablenum++;
    putname++;
    if (tablenum === tableCount){
      tablenum = 0;
      tablexycount++;
    }
    if (putname === entrants.length*2){
      document.getElementById("texout").value = full;
      console.log(full);
    }
  }
}

function createTex9(){
  var midx ="\\begin{tabular}{|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|} \\hline \n\
		 & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] & xx[7] & xx[8] & xx[9] \\\\\\hline \n\
		xx[1] & \\multicolumn{1}{c|}{N/A} &&&&&&&& \\\\\\hline \n\
		xx[2] && \\multicolumn{1}{c|}{N/A} &&&&&&& \\\\\\hline \n\
		xx[3] &&& \\multicolumn{1}{c|}{N/A}&&&&&& \\\\\\hline \n\
		xx[4] &&&& \\multicolumn{1}{c|}{N/A}&&&&& \\\\\\hline \n\
		xx[5] &&&&& \\multicolumn{1}{c|}{N/A}&&&& \\\\\\hline \n\
		xx[6] &&&&&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline \n\
		xx[7] &&&&&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline \n\
		xx[8] &&&&&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline \n\
		xx[9] &&&&&&&&& \\multicolumn{1}{c|}{N/A}  \\\\\\hline \n\
	\\end{tabular}\\\\ \n\ ";
  var top = "\\documentclass[40pt]{article} \n\
  \\usepackage[landscape, margin=1cm]{geometry} \n\
  \\begin{document} \n\
    \\bgroup \n\
    \\LARGE \n\
    \\def\\arraystretch{2.3} \n\ ";
  var bot = "    \\egroup \n\
      \\end{document} ";
   //Input taken from select on site
  var entPerPool = document.getElementById("selNumPool").value;
  var RAWentrants = document.getElementById("textraw").value;

  var entrants = RAWentrants.split(",").map(Function.prototype.call, String.prototype.trim);
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var tableCount = 0;
  var tablexycount = 0;
  var entsRemain = 0;
  if (entrants.length % entPerPool !== 0){
    var entsRemain = (entPerPool - (entrants.length % entPerPool))
    var entcount = entrants.length + 1
    while (entsRemain > 0){
      entrants.push("");
      entsRemain--;
    }
  }

  var mid ="";

  for (var i = 0;i<numPools;i++){
    mid += replaceAll("xx",i,midx);

    tableCount += 1;
  }
  var full = top+mid+bot;

  for (var t = 0;t <= entrants.length*2;t++){
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    tablenum++;
    putname++;
    if (tablenum === tableCount){
      tablenum = 0;
      tablexycount++;
    }
    if (putname === entrants.length*2){
      document.getElementById("texout").value = full;
      console.log(full);
    }
  }
}
