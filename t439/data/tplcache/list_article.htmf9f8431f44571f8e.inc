<?php
$z[0]=Array("global","",254,280);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("field","",321,350);
$z[1][4]['name']="keywords";
$z[2]=Array("field","",390,448);
$z[2][4]['name']="description";
$z[2][4]['function']="html2text(@me)";
$z[3]=Array("include","",1102,1137);
$z[3][4]['filename']="head.htm";
$z[4]=Array("field","",1352,1410);
$z[4][4]['name']="typeid";
$z[4][4]['function']="GetTopTypename(@me)";
$z[5]=Array("field","",1550,1608);
$z[5][4]['name']="typeid";
$z[5][4]['function']="GetTopTypename(@me)";
$z[6]=Array("channel","\r\n        <li><a href=\"[field:typeurl/]\" title=\"[field:typename/]\">[field:typename/]</a></li>\r\n        ",1661,1895);
$z[6][4]['type']="son";
$z[6][4]['currentstyle']="<li><a href='~typelink~' class='cu'>~typename~</a></li>";
$z[7]=Array("field","",2387,2416);
$z[7][4]['name']="typename";
$z[8]=Array("field","",2482,2511);
$z[8][4]['name']="position";
$z[9]=Array("arclist","\r\n    <div class=\"news_top\">\r\n      <div class=\"news_top_img\"><a href=\"[field:arcurl/]\" title=\"[field:title/]\"><img src=\"[field:picname/]\" width=\"248\" height=\"155\" alt=\"[field:title/]\" /></a></div>\r\n      <div class=\"news_top_chaw\">\r\n        <h4><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a></h4>\r\n        <p>[field:info/]...</p>\r\n      </div>\r\n      <div class=\"c\"></div>\r\n    </div>\r\n    ",2535,3017);
$z[9][4]['titlelen']="32";
$z[9][4]['infolen']="260";
$z[9][4]['flag']="c";
$z[9][4]['row']="1";
$z[10]=Array("list","\r\n        <li><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a><span>[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]</span></li>\r\n        ",3066,3258);
$z[10][4]['pagesize']="8";
$z[11]=Array("pagelist","",3363,3429);
$z[11][4]['listitem']="index,end,pre,next,pageno";
$z[11][4]['listsize']="5";
$z[12]=Array("include","",3519,3556);
$z[12][4]['filename']="footer.htm";

?>