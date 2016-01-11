<div class="artlist">
        <div class="times" onMouseOver="this.className='ontimes'" onMouseOut="this.className='times'">[field:pubdate function="MyDate('Y年',@me)"/]<br />
          [field:pubdate function="MyDate('m-d',@me)"/]</div>
        <div class="listt">
          <div class="listtbt"><a href="[field:arcurl/]" title="[field:title/]">[field:title/]</a></div>
          <div class="listtnr">[field:description function='cn_substr(@me,250)'/]...<a href="[field:arcurl/]" title="[field:title/]">[详情]</a></div>
        </div>
      </div>