// Function called on form submit
function makeTex(){
  var entPerPool = document.getElementById("selNumPool").value;
  var TeX = "";
  if(entPerPool == 5){
    TeX = createTex(top567, mid5, 5);
  } else if (entPerPool == 6){
    TeX = createTex(top567, mid6, 6);
  } else if (entPerPool == 7){
    TeX = createTex(top567, mid7, 7);
  } else if (entPerPool == 8){
    TeX = createTex(top89, mid8, 8);
  } else if (entPerPool == 9){
    TeX = createTex(top89, mid9, 9);
  }

  if (TeX == -1){ //More than 5000 entrants
    alert("Please enter less than 5000 entrants.");
  } else {
    document.getElementById("tex").value = encodeURIComponent(TeX);
    document.getElementById("tex2pdf").submit();
    /*location.href= "http://ethanw.ca/projects/pool-seeder/script/tex2pdf.php?tex=" + encodeURIComponent(TeX);*/
  }
}

function createTex(topx, midx, entPerPool) {
  // Create required variables
  var RAWentrants = document.getElementById("textraw").value;
  var entrants = RAWentrants.split(",").map(Function.prototype.call, String.prototype.trim);
  var numPools = Math.ceil(entrants.length / entPerPool);
  var putname = 0;
  var tablenum = 0;
  var tableCount = 0;
  var tablexycount = 0;
  var entsRemain = 0;
  var bot = "    \\egroup [newline]\
      \\end{document} ";

  if (entrants.length > 5000) {
    return -1;
  }

  //allows arrays of entrants that aren't multiple of the amount of pools in length
  if (entrants.length % entPerPool !== 0){
    var entsRemain = (entPerPool - (entrants.length % entPerPool))
    while (entsRemain > 0){
      entrants.push("");
      entsRemain--;
    }
  }

  var mid = "";

  //builds the TeX code for x amount of tables
  for (var i = 0;i < numPools; i++){
    mid += replaceAll("xx",i,midx);

    tableCount += 1;
  }

  //adds the beginning and end to the mid TeX code
  var full = topx + mid + bot;

  //Hyphenation code goes here
  entrants = hyphenate(entrants, entPerPool);

  //replaces components on the graph with names of entrants
  for (var t = 0;t <= entrants.length;t++){
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    tablenum++;
    putname++;
    if (tablenum === tableCount){
      tablenum = 0;
      tablexycount++;
    }
    if (putname === entrants.length){
      return full;
    }
  }
}

function hyphenate(entrantList, entPerPool) {
  var hyphEntrants = entrantList;

  if(entPerPool == 5){
    hyphEntrants = hyphenate5(entrantList);
  } else if (entPerPool == 6){
    hyphEntrants = hyphenate6(entrantList);
  } else if (entPerPool == 7){
    hyphEntrants = hyphenate7(entrantList);
  } else if (entPerPool == 8){
    hyphEntrants = hyphenate8(entrantList);
  } else if (entPerPool == 9){
    hyphEntrants = hyphenate9(entrantList);
  }

  return hyphEntrants;
}

// Hyphenation functions, differs per size of table
function hyphenate5(entrantList) {
  var hyph5Entrants = entrantList;
  for (var i = 0;i< hyph5Entrants.length;i++){
    if (hyph5Entrants[i].length > 12 & hyph5Entrants[i].length <= 25) {
      hyph5Entrants[i] = hyph5Entrants[i].substring(0,12) + "-" + hyph5Entrants[i].substring(12,25);
    }
    if (hyph5Entrants[i].length >25 & hyph5Entrants[i].length <=38) {
      hyph5Entrants[i] = hyph5Entrants[i].substring(0,12) + "-" + hyph5Entrants[i].substring(12,25) + "-" + hyph5Entrants[i].substring(38);
    }
    if (hyph5Entrants[i].length >38 & hyph5Entrants[i].length <= 51) {
      hyph5Entrants[i] = hyph5Entrants[i].substring(0,12) + "-" + hyph5Entrants[i].substring(12,25) + "-" + hyph5Entrants[i].substring(38,51) + "-" + hyph5Entrants[i].substring(51);
    }
    if (hyph5Entrants[i].length >51) {
      hyph5Entrants[i] = hyph5Entrants[i].substring(0,12) + "-" + hyph5Entrants[i].substring(12,25) + "-" + hyph5Entrants[i].substring(38,51) + "-" + hyph5Entrants[i].substring(51,64) + "-" + hyph5Entrants[i].substring(64);
    }
  }

  return hyph5Entrants;
}

function hyphenate6(entrantList) {
  var hyph6Entrants = entrantList;
  for (var i = 0;i<hyph6Entrants.length;i++){
    if (hyph6Entrants[i].length > 10 & hyph6Entrants[i].length <= 21) {
      hyph6Entrants[i] = hyph6Entrants[i].substring(0,10) + "-" + hyph6Entrants[i].substring(10,21);
    }
    if (hyph6Entrants[i].length >21 & hyph6Entrants[i].length <=32) {
      hyph6Entrants[i] = hyph6Entrants[i].substring(0,10) + "-" + hyph6Entrants[i].substring(10,21) + "-" + hyph6Entrants[i].substring(21);
    }
    if (hyph6Entrants[i].length >32 & hyph6Entrants[i].length <= 43) {
      hyph6Entrants[i] = hyph6Entrants[i].substring(0,10) + "-" + hyph6Entrants[i].substring(10,21) + "-" + hyph6Entrants[i].substring(21,32) + "-" + hyph6Entrants[i].substring(32);
    }
    if (hyph6Entrants[i].length >43) {
      hyph6Entrants[i] = hyph6Entrants[i].substring(0,10) + "-" + hyph6Entrants[i].substring(10,21) + "-" + hyph6Entrants[i].substring(21,32) + "-" + hyph6Entrants[i].substring(32,43) + "-" + hyph6Entrants[i].substring(43);
    }
  }

  return hyph6Entrants;
}

function hyphenate7(entrantList) {
  var hyph7Entrants = entrantList;
  for (var i = 0;i<hyph7Entrants.length;i++){
    if (hyph7Entrants[i].length > 9 & hyph7Entrants[i].length <= 19) {
      hyph7Entrants[i] = hyph7Entrants[i].substring(0,9) + "-" + hyph7Entrants[i].substring(9,19);
    }
    if (hyph7Entrants[i].length >19 & hyph7Entrants[i].length <=29) {
      hyph7Entrants[i] = hyph7Entrants[i].substring(0,9) + "-" + hyph7Entrants[i].substring(9,19) + "-" + hyph7Entrants[i].substring(19);
    }
    if (hyph7Entrants[i].length >29 & hyph7Entrants[i].length <= 39) {
      hyph7Entrants[i] = hyph7Entrants[i].substring(0,9) + "-" + hyph7Entrants[i].substring(9,19) + "-" + hyph7Entrants[i].substring(19,29) + "-" + hyph7Entrants[i].substring(29);
    }
    if (hyph7Entrants[i].length >39) {
      hyph7Entrants[i] = hyph7Entrants[i].substring(0,9) + "-" + hyph7Entrants[i].substring(9,19) + "-" + hyph7Entrants[i].substring(19,29) + "-" + hyph7Entrants[i].substring(29,39) + "-" + hyph7Entrants[i].substring(39);
    }
  }

  return hyph7Entrants;
}

function hyphenate8(entrantList) {
  var hyph8Entrants = entrantList;
  for (var i = 0;i<hyph8Entrants.length;i++){
    if (hyph8Entrants[i].length > 8 & hyph8Entrants[i].length <= 16) {
      hyph8Entrants[i] = hyph8Entrants[i].substring(0,9) + "-" + hyph8Entrants[i].substring(9);
    }
    if (hyph8Entrants[i].length >16 & hyph8Entrants[i].length <=24) {
      hyph8Entrants[i] = hyph8Entrants[i].substring(0,9) + "-" + hyph8Entrants[i].substring(9,18) + "-" + hyph8Entrants[i].substring(18);
    }
    if (hyph8Entrants[i].length >24 & hyph8Entrants[i].length <= 32) {
      hyph8Entrants[i] = hyph8Entrants[i].substring(0,9) + "-" + hyph8Entrants[i].substring(9,18) + "-" + hyph8Entrants[i].substring(18,26) + "-" + hyph8Entrants[i].substring(26);
    }
    if (hyph8Entrants[i].length >32) {
      hyph8Entrants[i] = hyph8Entrants[i].substring(0,9) + "-" + hyph8Entrants[i].substring(9,18) + "-" + hyph8Entrants[i].substring(18,26) + "-" + hyph8Entrants[i].substring(26,34) + "-" + hyph8Entrants[i].substring(34);
    }
  }

  return hyph8Entrants;
}

function hyphenate9(entrantList) {
  var hyph9Entrants = entrantList;
  for (var i = 0;i<hyph9Entrants.length;i++){
    if (hyph9Entrants[i].length > 6 & hyph9Entrants[i].length <= 12) {
      hyph9Entrants[i] = hyph9Entrants[i].substring(0,7) + "-" + hyph9Entrants[i].substring(7);
    }
    if (hyph9Entrants[i].length >12 & hyph9Entrants[i].length <=20) {
      hyph9Entrants[i] = hyph9Entrants[i].substring(0,7) + "-" + hyph9Entrants[i].substring(7,14) + "-" + hyph9Entrants[i].substring(14);
    }
    if (hyph9Entrants[i].length >20 & hyph9Entrants[i].length <= 27) {
      hyph9Entrants[i] = hyph9Entrants[i].substring(0,7) + "-" + hyph9Entrants[i].substring(7,14) + "-" + hyph9Entrants[i].substring(14,22) + "-" + hyph9Entrants[i].substring(22);
    }
    if (hyph9Entrants[i].length >27) {
      hyph9Entrants[i] = hyph9Entrants[i].substring(0,7) + "-" + hyph9Entrants[i].substring(7,14) + "-" + hyph9Entrants[i].substring(14,22) + "-" + hyph9Entrants[i].substring(22,30) + "-" + hyph9Entrants[i].substring(30);
    }
  }

  return hyph9Entrants;
}

//Provides the ability to replace all of x in a string with y
function replaceAll(find, replace, str){
  return str.replace(new RegExp(find, 'g'), replace);
}

// Declare hardcoded TeX format for tables
var mid5 = "\\begin{tabular}{|p{3.65cm}|p{3.65cm}|p{3.65cm}|p{3.65cm}|p{3.65cm}|p{3.65cm}|} [newline]\
  \\hline [newline]\
   & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] \\\\\\hline [newline]\
  xx[1] & \\multicolumn{1}{c|}{N/A} &&&& \\\\\\hline [newline]\
  xx[2] && \\multicolumn{1}{c|}{N/A} &&& \\\\\\hline [newline]\
  xx[3] &&& \\multicolumn{1}{c|}{N/A} && \\\\\\hline [newline]\
  xx[4] &&&& \\multicolumn{1}{c|}{N/A} & \\\\\\hline [newline]\
  xx[5] &&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline [newline]\
\\end{tabular}\\\\\\newpage[newline]\ ";

var mid6 = "\\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} [newline]\
    \\hline [newline]\
     & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] \\\\\\hline [newline]\
    xx[1] & \\multicolumn{1}{c|}{N/A} &&&&& \\\\\\hline [newline]\
    xx[2] && \\multicolumn{1}{c|}{N/A} &&&& \\\\\\hline [newline]\
    xx[3] &&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline [newline]\
    xx[4] &&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline [newline]\
    xx[5] &&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline [newline]\
    xx[6] &&&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline [newline]\
  \\end{tabular}\\\\\\newpage [newline] ";

var mid7 = "\\begin{tabular}{|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|} [newline]\
  \\hline [newline]\
   & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] & xx[7] \\\\\\hline [newline]\
  xx[1] & \\multicolumn{1}{c|}{N/A} &&&&&& \\\\\\hline [newline]\
  xx[2] && \\multicolumn{1}{c|}{N/A} &&&&& \\\\\\hline [newline]\
  xx[3] &&& \\multicolumn{1}{c|}{N/A}&&&& \\\\\\hline [newline]\
  xx[4] &&&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline [newline]\
  xx[5] &&&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline [newline]\
  xx[6] &&&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline [newline]\
  xx[7] &&&&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline [newline]\
\\end{tabular}\\\\\\newpage[newline]\ ";

var mid8 = "\\begin{tabular}{|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|} [newline]\
    \\hline [newline]\
     & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] & xx[7] & xx[8] \\\\\\hline [newline]\
    xx[1] & \\multicolumn{1}{c|}{N/A} &&&&&&& \\\\\\hline [newline]\
    xx[2] && \\multicolumn{1}{c|}{N/A} &&&&&& \\\\\\hline [newline]\
    xx[3] &&& \\multicolumn{1}{c|}{N/A}&&&&& \\\\\\hline [newline]\
    xx[4] &&&& \\multicolumn{1}{c|}{N/A}&&&& \\\\\\hline [newline]\
    xx[5] &&&&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline [newline]\
    xx[6] &&&&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline [newline]\
    xx[7] &&&&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline [newline]\
    xx[8] &&&&&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline [newline]\
  \\end{tabular}\\\\\\newpage[newline]\ ";

var mid9 = "\\begin{tabular}{|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|} \\hline [newline]\
   & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] & xx[7] & xx[8] & xx[9] \\\\\\hline [newline]\
  xx[1] & \\multicolumn{1}{c|}{N/A} &&&&&&&& \\\\\\hline [newline]\
  xx[2] && \\multicolumn{1}{c|}{N/A} &&&&&&& \\\\\\hline [newline]\
  xx[3] &&& \\multicolumn{1}{c|}{N/A}&&&&&& \\\\\\hline [newline]\
  xx[4] &&&& \\multicolumn{1}{c|}{N/A}&&&&& \\\\\\hline [newline]\
  xx[5] &&&&& \\multicolumn{1}{c|}{N/A}&&&& \\\\\\hline [newline]\
  xx[6] &&&&&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline [newline]\
  xx[7] &&&&&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline [newline]\
  xx[8] &&&&&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline [newline]\
  xx[9] &&&&&&&&& \\multicolumn{1}{c|}{N/A}  \\\\\\hline [newline]\
\\end{tabular}\\\\\\newpage[newline]\ ";

// Declare page formatting TeX for tables
var top567 = "\\documentclass[40pt]{article} [newline]\
\\usepackage[landscape, margin=1cm]{geometry} [newline]\
\\begin{document} [newline]\
  \\bgroup [newline]\
   [newline]\
  \\def\\arraystretch{4} [newline]\ ";

var top89 = "\\documentclass[40pt]{article} [newline]\
  \\usepackage[landscape, margin=1cm]{geometry} [newline]\
  \\begin{document} [newline]\
    \\bgroup [newline]\
     [newline]\
  \\def\\arraystretch{3} [newline]\ ";
