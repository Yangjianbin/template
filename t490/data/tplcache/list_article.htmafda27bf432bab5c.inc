<?php
$z[0]=Array("global","",254,280);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("field","",321,350);
$z[1][4]['name']="keywords";
$z[2]=Array("field","",390,448);
$z[2][4]['name']="description";
$z[2][4]['function']="html2text(@me)";
$z[3]=Array("include","",1959,1994);
$z[3][4]['filename']="head.htm";
$z[4]=Array("field","",2370,2428);
$z[4][4]['name']="typeid";
$z[4][4]['function']="GetTopTypename(@me)";
$z[5]=Array("channel","\r\n            <li><a href=\"[field:typeurl/]\" title=\"[field:typename/]\">[field:typename/]</a></li>\r\n            ",2495,2753);
$z[5][4]['type']="son";
$z[5][4]['currentstyle']="<li><a href='~typelink~' class='sider01_on'>~typename~</a></li>";
$z[6]=Array("field","",2946,2975);
$z[6][4]['name']="typename";
$z[7]=Array("field","",3028,3057);
$z[7][4]['name']="position";
$z[8]=Array("list","\r\n          <dl>\r\n            <dt><a href=\"[field:arcurl/]\" title=\"[field:title/]\"> <img src=\"[field:picname/]\" width=\"200\" height=\"130\" alt=\"[field:title/]\"></a></dt>\r\n            <dd><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a>\r\n              <div class=\"sub_news01\">[field:description function='cn_substr(@me,250)'/]...</div>\r\n              <div class=\"sub_news02\">[field:pubdate function=\"MyDate('Y/m/d',@me)\"/]</div>\r\n            </dd>\r\n          </dl>\r\n          ",3112,3640);
$z[8][4]['pagesize']="5";
$z[9]=Array("pagelist","",3773,3826);
$z[9][4]['listitem']="index,end,pre,next,pageno";
$z[10]=Array("include","",4088,4125);
$z[10][4]['filename']="footer.htm";

?>