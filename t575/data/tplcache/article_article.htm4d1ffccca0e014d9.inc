<?php
$z[0]=Array("global","",208,234);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("field","",275,297);
$z[1][4]['name']="keywords";
$z[2]=Array("field","",337,388);
$z[2][4]['name']="description";
$z[2][4]['function']="html2text(@me)";
$z[3]=Array("include","",28126,28161);
$z[3][4]['filename']="head.htm";
$z[4]=Array("field","",28444,28463);
$z[4][4]['name']="title";
$z[5]=Array("field","",29107,29125);
$z[5][4]['name']="body";
$z[6]=Array("field","",29883,29935);
$z[6][4]['name']="pubdate";
$z[6][4]['function']="MyDate('Y-m-d',@me)";
$z[7]=Array("channel","\r\n                      <a href=\"[field:typeurl/]\" rel=\"tag\">[field:typename /]</a>\r\n                      \r\n                     ",30035,30292);
$z[7][4]['type']="son";
$z[7][4]['currentstyle']="<a href='~typelink~' class='thisclass'>~typename~</a>";
$z[8]=Array("prenext","",30479,30507);
$z[8][4]['get']="preurl";
$z[9]=Array("prenext","",30584,30613);
$z[9][4]['get']="nexturl";
$z[10]=Array("arclist","\r\n                      <div class=\"related-element without-image\"> <a href=\"[field:arcurl/]\"></a>\r\n                    <div class=\"related-element-info\"> <a href=\"[field:arcurl/]\"> [field:title/]</a>\r\n                          <div class=\"date\">[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]</div>\r\n                        </div>\r\n                  </div>\r\n                  ",30801,31237);
$z[10][4]['typeid']="17";
$z[10][4]['titlelen']="42";
$z[10][4]['row']="3";
$z[11]=Array("arclist","\r\n                  <li> <a href=\"[field:arcurl/]\">[field:title/]</a> <span class=\"post-date\">[field:pubdate function=\"MyDate('Y年m月d日',@me)\"/]</span> </li>\r\n                  \r\n            ",31968,32222);
$z[11][4]['typeid']="17";
$z[11][4]['titlelen']="42";
$z[11][4]['row']="6";
$z[12]=Array("include","",32476,32513);
$z[12][4]['filename']="footer.htm";

?>