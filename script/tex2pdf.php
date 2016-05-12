<?php
  $filename = md5(rand(0,10000000));

  $tex = $_REQUEST['tex'];

  $tex = urldecode($tex);

  $tex = str_replace ("[newline]", "\n", $tex);

  file_put_contents ($filename . ".tex", $tex);

  shell_exec("/usr/bin/pdflatex --interaction batchmode $filename.tex");

  if( !file_exists ("$filename.pdf") ) {

    header("Content-type:text/plain");

    // The PDF source is in original.pdf
    readfile("$filename.log");

    unlink ("$filename.tex");
    unlink ("$filename.log");

  } else {
    header("Content-type:application/pdf");

    // It will be called downloaded.pdf
    header("Content-Disposition:attachment;filename='seededpools.pdf'");

    // The PDF source is in original.pdf
    readfile("$filename.pdf");

    unlink ("$filename.tex");
    unlink ("$filename.log");
    unlink ("$filename.pdf");
    unlink ("$filename.aux");
  }

?>
