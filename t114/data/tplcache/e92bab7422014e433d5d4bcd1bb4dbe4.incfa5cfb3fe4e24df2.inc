<?php
$z[0]=Array("pubdate","",73,116);
$z[0][4]['function']="MyDate('d',@me)";
$z[1]=Array("pubdate","",119,165);
$z[1][4]['function']="strftime(\"%b\",@me)";
$z[2]=Array("arcurl","",203,218);
$z[3]=Array("litpic","",260,275);
$z[4]=Array("title","",282,296);
$z[5]=Array("arcurl","",404,419);
$z[6]=Array("title","",437,451);
$z[7]=Array("pubdate"," \$today = Floor(time()/(3600 * 24)); \$senday= Floor(@me/(3600 * 24)); \$updays = \$today-\$senday; if(\$updays==0) @me = \"今日\"; else @me = \$updays.\"天前\"; ",498,698);
$z[7][4]['runphp']="yes";
$z[8]=Array("click","",721,735);
$z[9]=Array("typelink","",745,762);
$z[10]=Array("description","",809,829);
$z[11]=Array("id","\r\n                          global \$cfg_cmspath;\r\n                          \$tags = GetTags(@me);\r\n                          \$revalue = '';\r\n                          \$tags = explode(',', \$tags);\r\n                          foreach(\$tags as \$key => \$value){\r\n                          if(\$value){\r\n                              \$revalue .= '<a href=\"'.\$cfg_cmspath.'/tags.php?/'.\$value.'/\">'.\$value.'</a>&nbsp;';\r\n                              }\r\n                          }\r\n                          @me = \$revalue;\r\n                     ",965,1538);
$z[11][4]['runphp']="yes";

?>