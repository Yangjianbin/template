<?php
$z[0]=Array("global","",254,280);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("field","",321,350);
$z[1][4]['name']="keywords";
$z[2]=Array("field","",390,448);
$z[2][4]['name']="description";
$z[2][4]['function']="html2text(@me)";
$z[3]=Array("include","",1957,1992);
$z[3][4]['filename']="head.htm";
$z[4]=Array("field","",2367,2425);
$z[4][4]['name']="typeid";
$z[4][4]['function']="GetTopTypename(@me)";
$z[5]=Array("channel","\r\n            <li><a href=\"[field:typeurl/]\" title=\"[field:typename/]\">[field:typename/]</a></li>\r\n            ",2492,2750);
$z[5][4]['type']="son";
$z[5][4]['currentstyle']="<li><a href='~typelink~' class='sider01_on'>~typename~</a></li>";
$z[6]=Array("field","",2943,2972);
$z[6][4]['name']="typename";
$z[7]=Array("field","",3025,3054);
$z[7][4]['name']="position";
$z[8]=Array("list","\r\n          <div class=\"sub_business\">\r\n            <div class=\"sub_business01\"><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a> <img src=\"[field:picname/]\" width=\"266\" height=\"251\" alt=\"[field:title/]\"></div>\r\n            <div class=\"sub_business02\">[field:description function='cn_substr(@me,100)'/]...</div>\r\n          </div>\r\n          ",3115,3510);
$z[8][4]['pagesize']="9";
$z[9]=Array("pagelist","",3678,3731);
$z[9][4]['listitem']="index,end,pre,next,pageno";
$z[10]=Array("include","",3978,4015);
$z[10][4]['filename']="footer.htm";

?>