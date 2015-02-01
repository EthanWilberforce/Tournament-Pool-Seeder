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

  entPerPool = 5
  RAWentrants = document.getElementById("textraw").value;

  var entrants = RAWentrants.split(",");
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var count = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var tablexycount = 0;
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
      0[0,1] & N/A &&&& \\\\\\hline \n\
      0[0,2] && N/A &&& \\\\\\hline \n\
      0[0,3] &&& N/A&& \\\\\\hline \n\
      0[0,4] &&&& N/A& \\\\\\hline \n\
      0[0,5] &&&&& N/A \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 1[1,0] & 1[2,0] & 1[3,0] & 1[4,0] & 1[5,0] \\\\\\hline \n\
      1[0,1] & N/A &&&& \\\\\\hline \n\
      1[0,2] && N/A &&& \\\\\\hline \n\
      1[0,3] &&& N/A&& \\\\\\hline \n\
      1[0,4] &&&& N/A& \\\\\\hline \n\
      1[0,5] &&&&& N/A \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 2[1,0] & 2[2,0] & 2[3,0] & 2[4,0] & 2[5,0] \\\\\\hline \n\
      2[0,1] & N/A &&&& \\\\\\hline \n\
      2[0,2] && N/A &&& \\\\\\hline \n\
      2[0,3] &&& N/A&& \\\\\\hline \n\
      2[0,4] &&&& N/A& \\\\\\hline \n\
      2[0,5] &&&&& N/A \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 3[1,0] & 3[2,0] & 3[3,0] & 3[4,0] & 3[5,0] \\\\\\hline \n\
      3[0,1] & N/A &&&& \\\\\\hline \n\
      3[0,2] && N/A &&& \\\\\\hline \n\
      3[0,3] &&& N/A&& \\\\\\hline \n\
      3[0,4] &&&& N/A& \\\\\\hline \n\
      3[0,5] &&&&& N/A \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 4[1,0] & 4[2,0] & 4[3,0] & 4[4,0] & 4[5,0] \\\\\\hline \n\
      4[0,1] & N/A &&&& \\\\\\hline \n\
      4[0,2] && N/A &&& \\\\\\hline \n\
      4[0,3] &&& N/A&& \\\\\\hline \n\
      4[0,4] &&&& N/A& \\\\\\hline \n\
      4[0,5] &&&&& N/A \\\\\\hline \n\
    \\end{tabular} \n\
    \\egroup \n\
  \\end{document}"

  var To6 = "\\documentclass[40pt]{article} \n\
  \\usepackage[landscape, margin=1cm]{geometry} \n\
  \\usepackage{diagbox} \n\
  \\begin{document} \n\
    \\bgroup \n\
    \\LARGE \n\
    \\def\\arraystretch{3} \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 0[1,0] & 0[2,0] & 0[3,0] & 0[4,0] & 0[5,0] & 0[6,0] \\\\\\hline \n\
      0[0,1] & N/A &&&&& \\\\\\hline \n\
      0[0,2] && N/A &&&& \\\\\\hline \n\
      0[0,3] &&& N/A&&& \\\\\\hline \n\
      0[0,4] &&&& N/A&& \\\\\\hline \n\
      0[0,5] &&&&& N/A& \\\\\\hline \n\
      0[6,0] &&&&&& N/A \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 1[1,0] & 1[2,0] & 1[3,0] & 1[4,0] & 1[5,0] & 1[6,0] \\\\\\hline \n\
      1[0,1] & N/A &&&&& \\\\\\hline \n\
      1[0,2] && N/A &&&& \\\\\\hline \n\
      1[0,3] &&& N/A&&& \\\\\\hline \n\
      1[0,4] &&&& N/A&& \\\\\\hline \n\
      1[0,5] &&&&& N/A& \\\\\\hline \n\
      1[6,0] &&&&&& N/A \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 2[1,0] & 2[2,0] & 2[3,0] & 2[4,0] & 2[5,0] & 2[6,0] \\\\\\hline \n\
      2[0,1] & N/A &&&&& \\\\\\hline \n\
      2[0,2] && N/A &&&& \\\\\\hline \n\
      2[0,3] &&& N/A&&&\\\\\\hline \n\
      2[0,4] &&&& N/A&& \\\\\\hline \n\
      2[0,5] &&&&& N/A& \\\\\\hline \n\
      2[6,0] &&&&&& N/A \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 3[1,0] & 3[2,0] & 3[3,0] & 3[4,0] & 3[5,0] & 3[6,0] \\\\\\hline \n\
      3[0,1] & N/A &&&&& \\\\\\hline \n\
      3[0,2] && N/A &&&& \\\\\\hline \n\
      3[0,3] &&& N/A&&& \\\\\\hline \n\
      3[0,4] &&&& N/A&& \\\\\\hline \n\
      3[0,5] &&&&& N/A& \\\\\\hline \n\
      3[6,0] &&&&&& N/A \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 4[1,0] & 4[2,0] & 4[3,0] & 4[4,0] & 4[5,0] & 4[6,0] \\\\\\hline \n\
      4[0,1] & N/A &&&&& \\\\\\hline \n\
      4[0,2] && N/A &&&& \\\\\\hline \n\
      4[0,3] &&& N/A&&& \\\\\\hline \n\
      4[0,4] &&&& N/A&& \\\\\\hline \n\
      4[0,5] &&&&& N/A& \\\\\\hline \n\
      4[6,0] &&&&&& N/A \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 5[1,0] & 5[2,0] & 5[3,0] & 5[4,0] & 5[5,0] & 5[6,0] \\\\\\hline \n\
      5[0,1] & N/A &&&&& \\\\\\hline \n\
      5[0,2] && N/A &&&& \\\\\\hline \n\
      5[0,3] &&& N/A&&& \\\\\\hline \n\
      5[0,4] &&&& N/A&& \\\\\\hline \n\
      5[0,5] &&&&& N/A& \\\\\\hline \n\
      5[6,0] &&&&&& N/A \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\egroup \n\
  \\end{document}"

  var To7 = "\\documentclass[40pt]{article} \n\
  \\usepackage[landscape, margin=1cm]{geometry} \n\
  \\usepackage{diagbox} \n\
  \\begin{document} \n\
    \\bgroup \n\
    \\LARGE \n\
    \\def\\arraystretch{3} \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 0[1,0] & 0[2,0] & 0[3,0] & 0[4,0] & 0[5,0] & 0[6,0] & 0[7,0] \\\\\\hline \n\
      0[0,1] & \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      0[0,2] && \\diagbox[width=3cm]{}{} &&&&& \\\\\\hline \n\
      0[0,3] &&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      0[0,4] &&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      0[0,5] &&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      0[6,0] &&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      0[7,0] &&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 1[1,0] & 1[2,0] & 1[3,0] & 1[4,0] & 1[5,0] & 1[6,0] & 1[7,0] \\\\\\hline \n\
      1[0,1] & \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      1[0,2] && \\diagbox[width=3cm]{}{} &&&&& \\\\\\hline \n\
      1[0,3] &&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      1[0,4] &&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      1[0,5] &&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      1[6,0] &&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      1[7,0] &&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 2[1,0] & 2[2,0] & 2[3,0] & 2[4,0] & 2[5,0] & 2[6,0] & 2[7,0] \\\\\\hline \n\
      2[0,1] & \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      2[0,2] && \\diagbox[width=3cm]{}{} &&&&& \\\\\\hline \n\
      2[0,3] &&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      2[0,4] &&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      2[0,5] &&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      2[6,0] &&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      2[7,0] &&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 3[1,0] & 3[2,0] & 3[3,0] & 3[4,0] & 3[5,0] & 3[6,0] & 3[7,0] \\\\\\hline \n\
      3[0,1] & \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      3[0,2] && \\diagbox[width=3cm]{}{} &&&&& \\\\\\hline \n\
      3[0,3] &&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      3[0,4] &&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      3[0,5] &&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      3[6,0] &&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      3[7,0] &&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 4[1,0] & 4[2,0] & 4[3,0] & 4[4,0] & 4[5,0] & 4[6,0] & 4[7,0] \\\\\\hline \n\
      4[0,1] & \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      4[0,2] && \\diagbox[width=3cm]{}{} &&&&& \\\\\\hline \n\
      4[0,3] &&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      4[0,4] &&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      4[0,5] &&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      4[6,0] &&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      4[7,0] &&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 5[1,0] & 5[2,0] & 5[3,0] & 5[4,0] & 5[5,0] & 5[6,0] & 5[7,0] \\\\\\hline \n\
      5[0,1] & \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      5[0,2] && \\diagbox[width=3cm]{}{} &&&&& \\\\\\hline \n\
      5[0,3] &&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      5[0,4] &&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      5[0,5] &&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      5[6,0] &&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      5[7,0] &&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} \n\
      \\hline \n\
      & 6[1,0] & 6[2,0] & 6[3,0] & 6[4,0] & 6[5,0] & 6[6,0] & 6[7,0] \\\\\\hline \n\
      6[0,1] & \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      6[0,2] && \\diagbox[width=3cm]{}{} &&&&& \\\\\\hline \n\
      6[0,3] &&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      6[0,4] &&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      6[0,5] &&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      6[6,0] &&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      6[7,0] &&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\egroup \n\
  \\end{document}"

  var To8 = "\\documentclass[40pt]{article} \n\
  \\usepackage[landscape, margin=1cm]{geometry} \n\
  \\usepackage{diagbox} \n\
  \\begin{document} \n\
    \\bgroup \n\
    \\LARGE \n\
    \\def\\arraystretch{3} \n\
    \\begin{tabular}{|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|} \n\
      \\hline \n\
      & 0[1,0] & 0[2,0] & 0[3,0] & 0[4,0] & 0[5,0] & 0[6,0] & 0[7,0] & 0[8,0] \\\\\\hline \n\
      0[0,1] & \\diagbox[width=3cm]{}{} &&&&&&& \\\\\\hline \n\
      0[0,2] && \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      0[0,3] &&& \\diagbox[width=3cm]{}{}&&&&& \\\\\\hline \n\
      0[0,4] &&&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      0[0,5] &&&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      0[6,0] &&&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      0[7,0] &&&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      0[8,0] &&&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|} \n\
      \\hline \n\
      & 1[1,0] & 1[2,0] & 1[3,0] & 1[4,0] & 1[5,0] & 1[6,0] & 1[7,0] & 1[8,0] \\\\\\hline \n\
      1[0,1] & \\diagbox[width=3cm]{}{} &&&&&&& \\\\\\hline \n\
      1[0,2] && \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      1[0,3] &&& \\diagbox[width=3cm]{}{}&&&&& \\\\\\hline \n\
      1[0,4] &&&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      1[0,5] &&&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      1[6,0] &&&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      1[7,0] &&&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      1[8,0] &&&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|} \n\
      \\hline \n\
      & 2[1,0] & 2[2,0] & 2[3,0] & 2[4,0] & 2[5,0] & 2[6,0] & 2[7,0] & 2[8,0] \\\\\\hline \n\
      2[0,1] & \\diagbox[width=3cm]{}{} &&&&&&& \\\\\\hline \n\
      2[0,2] && \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      2[0,3] &&& \\diagbox[width=3cm]{}{}&&&&& \\\\\\hline \n\
      2[0,4] &&&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      2[0,5] &&&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      2[6,0] &&&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      2[7,0] &&&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      2[8,0] &&&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|} \n\
      \\hline \n\
      & 3[1,0] & 3[2,0] & 3[3,0] & 3[4,0] & 3[5,0] & 3[6,0] & 3[7,0] & 3[8,0] \\\\\\hline \n\
      3[0,1] & \\diagbox[width=3cm]{}{} &&&&&&& \\\\\\hline \n\
      3[0,2] && \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      3[0,3] &&& \\diagbox[width=3cm]{}{}&&&&& \\\\\\hline \n\
      3[0,4] &&&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      3[0,5] &&&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      3[6,0] &&&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      3[7,0] &&&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      3[8,0] &&&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|} \n\
      \\hline \n\
      & 4[1,0] & 4[2,0] & 4[3,0] & 4[4,0] & 4[5,0] & 4[6,0] & 4[7,0] & 4[8,0] \\\\\\hline \n\
      4[0,1] & \\diagbox[width=3cm]{}{} &&&&&&& \\\\\\hline \n\
      4[0,2] && \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      4[0,3] &&& \\diagbox[width=3cm]{}{}&&&&& \\\\\\hline \n\
      4[0,4] &&&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      4[0,5] &&&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      4[6,0] &&&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      4[7,0] &&&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      4[8,0] &&&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|} \n\
      \\hline \n\
      & 5[1,0] & 5[2,0] & 5[3,0] & 5[4,0] & 5[5,0] & 5[6,0] & 5[7,0] & 5[8,0] \\\\\\hline \n\
      5[0,1] & \\diagbox[width=3cm]{}{} &&&&&&& \\\\\\hline \n\
      5[0,2] && \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      5[0,3] &&& \\diagbox[width=3cm]{}{}&&&&& \\\\\\hline \n\
      5[0,4] &&&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      5[0,5] &&&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      5[6,0] &&&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      5[7,0] &&&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      5[8,0] &&&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|} \n\
      \\hline \n\
      & 6[1,0] & 6[2,0] & 6[3,0] & 6[4,0] & 6[5,0] & 6[6,0] & 6[7,0] & 6[8,0] \\\\\\hline \n\
      6[0,1] & \\diagbox[width=3cm]{}{} &&&&&&& \\\\\\hline \n\
      6[0,2] && \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      6[0,3] &&& \\diagbox[width=3cm]{}{}&&&&& \\\\\\hline \n\
      6[0,4] &&&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      6[0,5] &&&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      6[6,0] &&&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      6[7,0] &&&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      6[8,0] &&&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\begin{tabular}{|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|} \n\
      \\hline \n\
      & 7[1,0] & 7[2,0] & 7[3,0] & 7[4,0] & 7[5,0] & 7[6,0] & 7[7,0] & 7[8,0] \\\\\\hline \n\
      7[0,1] & \\diagbox[width=3cm]{}{} &&&&&&& \\\\\\hline \n\
      7[0,2] && \\diagbox[width=3cm]{}{} &&&&&& \\\\\\hline \n\
      7[0,3] &&& \\diagbox[width=3cm]{}{}&&&&& \\\\\\hline \n\
      7[0,4] &&&& \\diagbox[width=3cm]{}{}&&&& \\\\\\hline \n\
      7[0,5] &&&&& \\diagbox[width=3cm]{}{}&&& \\\\\\hline \n\
      7[6,0] &&&&&& \\diagbox[width=3cm]{}{}&& \\\\\\hline \n\
      7[7,0] &&&&&&& \\diagbox[width=3cm]{}{}& \\\\\\hline \n\
      7[8,0] &&&&&&&& \\diagbox[width=3cm]{}{} \\\\\\hline \n\
    \\end{tabular}\\\\ \n\
    \\egroup \n\
  \\end{document}"

  //need to trim every entrant[entcount]
  switch (numPools){
    case 5:
      for (entcount; entcount <= (entrants.length - .5)*2; entcount++){
        if (fillx){
        switch(count){
          case 0:
            To5 = To5.replace(tablenum + "[" + (tablexycount+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            break;
          case 1:
            To5 = To5.replace(tablenum + "[" + (tablexycount+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            break;
          case 2:
            To5 = To5.replace(tablenum + "[" + (tablexycount+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            break;
          case 3:
            To5 = To5.replace(tablenum + "[" + (tablexycount+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            break;
          case 4:
            To5 = To5.replace(tablenum + "[" + (tablexycount+1) + ",0]", entrants[putname]);
            tablenum=0;
            count = 0;
            putname++;
            tablexycount++;
            if (putname === 25){
              putname = 0;
              tablenum = 0;
              fillx = false;
              tablexycount = 0;
            }
            break;
          }
        } else {
          switch(count){
            case 0:
              To5 = To5.replace(tablenum + "[0," + (tablexycount+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              break;
            case 1:
              To5 = To5.replace(tablenum + "[0," + (tablexycount+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              break;
            case 2:
              To5 = To5.replace(tablenum + "[0," + (tablexycount+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              break;
            case 3:
              To5 = To5.replace(tablenum + "[0," + (tablexycount+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              break;
            case 4:
              To5 = To5.replace(tablenum + "[0," + (tablexycount+1) + "]", entrants[putname]);
              tablenum = 0;
              count = 0;
              putname++;
              tablexycount++;
              if (putname === 25){
                console.log(To5);
                document.getElementById('texout').value = To5
              }
              break;
          }
        }
      }
      break;
    /*case 6:
      for (entcount; entcount <= (entrants.length - .5)*2; entcount++){
        if (fillx){
        switch(count){
          case 0:
            To6 = To6.replace(tablenum + "[" + (tablexycount+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            (console.log("doing1"));
            break;
          case 1:
            To6 = To6.replace(tablenum + "[" + (tablexycount+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            (console.log("doing2"));
            break;
          case 2:
            To6 = To6.replace(tablenum + "[" + (tablexycount+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            (console.log("doing3"));
            break;
          case 3:
            To6 = To6.replace(tablenum + "[" + (tablexycount+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            (console.log("doing4"));
            break;
          case 4:
            To6 = To6.replace(tablenum + "[" + (tablexycount+1) + ",0]", entrants[putname]);
            tablenum++;
            count++;
            putname++;
            (console.log("doing5"));
            break;
          case 5:
            To6 = To6.replace(tablenum + "[" + (tablexycount+1) + ",0]", entrants[putname]);
            tablenum=0;
            count = 0;
            putname++;
            tablexycount++;
            (console.log("doing6"));
            if (putname === 36){
              putname = 0;
              tablenum = 0;
              fillx = false;
              tablexycount = 0;
            }
            break;
          }
        } else {
          switch(count){
            case 0:
              To6 = To6.replace(tablenum + "[0," + (tablexycount+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              break;
            case 1:
              To6 = To6.replace(tablenum + "[0," + (tablexycount+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              break;
            case 2:
              To6 = To6.replace(tablenum + "[0," + (tablexycount+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              break;
            case 3:
              To6 = To6.replace(tablenum + "[0," + (tablexycount+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              break;
            case 4:
              To6 = To6.replace(tablenum + "[0," + (tablexycount+1) + "]", entrants[putname]);
              tablenum++;
              count++;
              putname++;
              break;
            case 5:
              To6 = To6.replace(tablenum + "[0," + (tablexycount+1) + "]", entrants[putname]);
              tablenum = 0;
              count = 0;
              putname++;
              tablexycount++;
              if (putname === 36){
                console.log(To6);
              }
              break;
          }
        }
      }
      break;
    case 7:
      break;
    case 8:
      break;*/
  };

}
