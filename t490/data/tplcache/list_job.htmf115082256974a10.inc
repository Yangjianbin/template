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
$z[4]=Array("field","",2368,2426);
$z[4][4]['name']="typeid";
$z[4][4]['function']="GetTopTypename(@me)";
$z[5]=Array("channel","\r\n            <li><a href=\"[field:typeurl/]\" title=\"[field:typename/]\">[field:typename/]</a></li>\r\n            ",2493,2751);
$z[5][4]['type']="son";
$z[5][4]['currentstyle']="<li><a href='~typelink~' class='sider01_on'>~typename~</a></li>";
$z[6]=Array("field","",2944,2973);
$z[6][4]['name']="typename";
$z[7]=Array("field","",3026,3055);
$z[7][4]['name']="position";
$z[8]=Array("list","\r\n          <dl>\r\n            <dt>\r\n              <div class=\"sub_job02\">[field:pubdate function=\"MyDate('Y/m/d',@me)\"/]</div>\r\n              <a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a></dt>\r\n            <dd> [field:description function='cn_substr(@me,200)'/] ...</dd>\r\n            <div class=\"sub_job01\"><a href=\"[field:arcurl/]\" title=\"查看更多\"><img src=\"/skin/images/see.jpg\" width=\"166\" height=\"35\" alt=\"查看更多\"></a></div>\r\n          </dl>\r\n          ",3109,3635);
$z[8][4]['pagesize']="4";
$z[9]=Array("pagelist","",3700,3753);
$z[9][4]['listitem']="index,end,pre,next,pageno";
$z[10]=Array("include","",4015,4052);
$z[10][4]['filename']="footer.htm";

?>