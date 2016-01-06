<?php
$z[0]=Array("global","",653,679);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("field","",720,742);
$z[1][4]['name']="keywords";
$z[2]=Array("field","",782,833);
$z[2][4]['name']="description";
$z[2][4]['function']="html2text(@me)";
$z[3]=Array("include","",4501,4536);
$z[3][4]['filename']="head.htm";
$z[4]=Array("field","",4689,4708);
$z[4][4]['name']="title";
$z[5]=Array("field","",4977,5006);
$z[5][4]['name']="position";
$z[6]=Array("field","",5571,5589);
$z[6][4]['name']="body";
$z[7]=Array("prenext","",5771,5796);
$z[7][4]['get']="pre";
$z[8]=Array("prenext","",5817,5843);
$z[8][4]['get']="next";
$z[9]=Array("field","",5955,5974);
$z[9][4]['name']="title";
$z[10]=Array("field","",6104,6126);
$z[10][4]['name']="typename";
$z[11]=Array("field","",6256,6279);
$z[11][4]['name']="js";
$z[12]=Array("field","",6404,6463);
$z[12][4]['name']="pubdate";
$z[12][4]['function']="MyDate('Y年m月d日',@me)";
$z[13]=Array("type","<a href=\"[field:typelink /]\" >[field:typename /]</a>",6526,6601);
$z[14]=Array("arclist","\r\n              <li class=\"fs-entry ts-cell\">\r\n                <div class=\"fs-entry-slide\">\r\n                  <div class=\"fs-entry-img\"> <img src=\"[field:picname/]\" class=\"preload-me\" width=\"210\" height=\"210\"  alt=\"[field:title/]\" /></div>\r\n                  <div class=\"fs-entry-content\">\r\n                    <h4><a href=\"[field:arcurl/]\">[field:title/]</a></h4>\r\n                    <div class=\"portfolio-categories\"><a href=\"[field:arcurl/]\" rel=\"bookmark\">\r\n                      <time class=\"entry-date\" >{dede:field.pubdate function=\"MyDate('Y年m月d日',@me)\"/}</time>\r\n                      </a><a class=\"author vcard\" href=\"[field:arcurl/]\" rel=\"author\">By [field:writer/]</a><a href='[field:typelink/]'>[field:typename/]</a></div>\r\n                    <a class=\"project-details\" href=\"[field:arcurl/]\">详情</a> </div>\r\n                </div>\r\n              </li>\r\n              ",6966,7917);
$z[14][4]['titlelen']="42";
$z[14][4]['row']="9";
$z[14][4]['typeid']="2";
$z[15]=Array("include","",8740,8777);
$z[15][4]['filename']="footer.htm";

?>