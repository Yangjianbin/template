<li>
              <p class="left">
                <span class="date">[field:pubdate function="MyDate('d',@me)"/]<u>[field:pubdate function='strftime("%b",@me)'/]</u></span>
                <a href="[field:arcurl/]" target="_blank" class="thumb"><img src="[field:litpic/]" alt="[field:title/]" /></a>
              </p>
              <p class="right">
                <span class="title"><a href="[field:arcurl/]" target="_blank">[field:title/]</a></span>
                <span class="rel">[field:pubdate runphp='yes'] $today = Floor(time()/(3600 * 24)); $senday= Floor(@me/(3600 * 24)); $updays = $today-$senday; if($updays==0) @me = "今日"; else @me = $updays."天前"; [/field:pubdate]<u>•</u>围观热度 [field:click/]<u>•</u>[field:typelink/]</span>
                <span class="summary">[field:description/] . . .</span>
                <span class="tags">
                	<span class="glyphicon glyphicon-tag"></span>
                    [field:id runphp='yes']
                          global $cfg_cmspath;
                          $tags = GetTags(@me);
                          $revalue = '';
                          $tags = explode(',', $tags);
                          foreach($tags as $key => $value){
                          if($value){
                              $revalue .= '<a href="'.$cfg_cmspath.'/tags.php?/'.$value.'/">'.$value.'</a>&nbsp;';
                              }
                          }
                          @me = $revalue;
                     [/field:id] 
                </span>
              </p>
            </li>