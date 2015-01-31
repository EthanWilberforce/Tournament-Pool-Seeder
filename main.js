function getOption() {
  if(typeof(String.prototype.trim) === "undefined")
  {
      String.prototype.trim = function()
      {
          return String(this).replace(/^\s+|\s+$/g, '');
      };
  }

  var RAWentrants = "";
  var entPerPool = 0; //Input taken from select on site

  entPerPool = document.getElementById("selNumPool").value;
  RAWentrants = document.getElementById("textraw").value;

  var entrants = RAWentrants.split(",");
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var count = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var testvar = 0;
  /*var pools = [
    ["Ethan", "Thing"],
    [],
    []
  ]; */
  var fillx = true

  var To5 = "\\documentclass[40pt]{article} \n\
  \\usepackage[landscape, margin=1cm]{geometry} \n\
  \\usepackage{diagbox} \n\
  \\begin{document} \n\
    \\bgroup \n\
    \\LARGE \n\
    \\def\\arraystretch{3} \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 0[1,0] & 0[2,0] & 0[3,0] & 0[4,0] & 0[5,0] \\\\\\hline \n\
      0[0,1] & \\diagbox[width=3.4cm]{}{} &&&& \\\\\\hline \n\
      0[0,2] && \\diagbox[width=3.4cm]{}{} &&& \\\\\\hline \n\
      0[0,3] &&& \\diagbox[width=3.4cm]{}{}&& \\\\\\hline \n\
      0[0,4] &&&& \\diagbox[width=3.4cm]{}{}& \\\\\\hline \n\
      0[0,5] &&&&& \\diagbox[width=3.4cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 1[1,0] & 1[2,0] & 1[3,0] & 1[4,0] & 1[5,0] \\\\\\hline \n\
      1[0,1] & \\diagbox[width=3.4cm]{}{} &&&& \\\\\\hline \n\
      1[0,2] && \\diagbox[width=3.4cm]{}{} &&& \\\\\\hline \n\
      1[0,3] &&& \\diagbox[width=3.4cm]{}{}&& \\\\\\hline \n\
      1[0,4] &&&& \\diagbox[width=3.4cm]{}{}& \\\\\\hline \n\
      1[0,5] &&&&& \\diagbox[width=3.4cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 2[1,0] & 2[2,0] & 2[3,0] & 2[4,0] & 2[5,0] \\\\\\hline \n\
      2[0,1] & \\diagbox[width=3.4cm]{}{} &&&& \\\\\\hline \n\
      2[0,2] && \\diagbox[width=3.4cm]{}{} &&& \\\\\\hline \n\
      2[0,3] &&& \\diagbox[width=3.4cm]{}{}&& \\\\\\hline \n\
      2[0,4] &&&& \\diagbox[width=3.4cm]{}{}& \\\\\\hline \n\
      2[0,5] &&&&& \\diagbox[width=3.4cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 3[1,0] & 3[2,0] & 3[3,0] & 3[4,0] & 3[5,0] \\\\\\hline \n\
      3[0,1] & \\diagbox[width=3.4cm]{}{} &&&& \\\\\\hline \n\
      3[0,2] && \\diagbox[width=3.4cm]{}{} &&& \\\\\\hline \n\
      3[0,3] &&& \\diagbox[width=3.4cm]{}{}&& \\\\\\hline \n\
      3[0,4] &&&& \\diagbox[width=3.4cm]{}{}& \\\\\\hline \n\
      3[0,5] &&&&& \\diagbox[width=3.4cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 4[1,0] & 4[2,0] & 4[3,0] & 4[4,0] & 4[5,0] \\\\\\hline \n\
      4[0,1] & \\diagbox[width=3.4cm]{}{} &&&& \\\\\\hline \n\
      4[0,2] && \\diagbox[width=3.4cm]{}{} &&& \\\\\\hline \n\
      4[0,3] &&& \\diagbox[width=3.4cm]{}{}&& \\\\\\hline \n\
      4[0,4] &&&& \\diagbox[width=3.4cm]{}{}& \\\\\\hline \n\
      4[0,5] &&&&& \\diagbox[width=3.4cm]{}{} \\\\\\hline \n\
    \\end{tabular} \n\
    \\egroup \n\
  \\end{document}"
  //need to trim every entrant[entcount]
  console.log(RAWentrants);
  console.log(entrants[0]);
  switch (numPools){
    case 5:
      for (entcount; entcount <= (entrants.length - .5)*2; entcount++){
        if (fillx){
        switch(count){
          case 0:
            To5 = To5.replace(tablenum + "[" + (testvar+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            console.log("doing 1");
            break;
          case 1:
            To5 = To5.replace(tablenum + "[" + (testvar+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            console.log("doing 2");
            break;
          case 2:
            To5 = To5.replace(tablenum + "[" + (testvar+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            console.log("doing 3");
            break;
          case 3:
            To5 = To5.replace(tablenum + "[" + (testvar+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            console.log("doing 4");
            break;
          case 4:
            To5 = To5.replace(tablenum + "[" + (testvar+1) + ",0]", entrants[putname]);
            tablenum=0;
            count = 0;
            putname++;
            testvar++;
            if (putname === 25){
              putname = 0;
              tablenum = 0;
              fillx = false;
              testvar = 0;
            }
            console.log("doing 5");
            break;
          }
        } else {
          switch(count){
            case 0:
              To5 = To5.replace(tablenum + "[0," + (testvar+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              console.log("doing 6");
              break;
            case 1:
              To5 = To5.replace(tablenum + "[0," + (testvar+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              console.log("doing 7");
              break;
            case 2:
              To5 = To5.replace(tablenum + "[0," + (testvar+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              console.log("doing 8");
              break;
            case 3:
              To5 = To5.replace(tablenum + "[0," + (testvar+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              console.log("doing 9");
              break;
            case 4:
              To5 = To5.replace(tablenum + "[0," + (testvar+1) + "]", entrants[putname]);
              tablenum = 0;
              count = 0;
              putname++;
              testvar++;
              console.log(To5);
              break
          }
        }
      }
      break;
    default:
      console.log("fuck");
  };

}
