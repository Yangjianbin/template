<?php
$z[0]=Array("global","",66,92);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("field","",133,162);
$z[1][4]['name']="keywords";
$z[2]=Array("field","",202,260);
$z[2][4]['name']="description";
$z[2][4]['function']="html2text(@me)";
$z[3]=Array("global","",278,305);
$z[3][4]['name']="cfg_basehost";
$z[4]=Array("include","",632,667);
$z[4][4]['filename']="head.htm";
$z[5]=Array("field","",869,927);
$z[5][4]['name']="typeid";
$z[5][4]['function']="GetTopTypename(@me)";
$z[6]=Array("channel"," <a href='[field:typeurl/]' ><i></i>[field:typename/]<span></span></a> ",969,1168);
$z[6][4]['type']="son";
$z[6][4]['currentstyle']="<a href='~typelink~' class='active'><i></i>~typename~<span></span></a>";
$z[7]=Array("list","\r\n    <div class=\"list\">\r\n      <div class=\"l_left\"> <a href=\"[field:arcurl/]\"><img src=\"[field:picname/]\" width=\"180\" height=\"130\" /></a> </div>\r\n      <div class=\"l_right\">\r\n        <h2><em>[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]</em><a href=\"[field:arcurl/]\">[field:title/]</a></h2>\r\n        <p>[field:description function=\"cn_substr(@me,300)\"/]...<a href=\"[field:arcurl/]\">查看详细>></a></p>\r\n      </div>\r\n      <div style=\"clear:both\"></div>\r\n    </div>\r\n    ",1216,1730);
$z[7][4]['pagesize']="5";
$z[8]=Array("pagelist","",1769,1839);
$z[8][4]['listitem']="info,index,end,pre,next,pageno";
$z[8][4]['listsize']="5";
$z[9]=Array("include","",1865,1902);
$z[9][4]['filename']="footer.htm";

?>