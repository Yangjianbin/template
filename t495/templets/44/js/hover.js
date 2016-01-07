function $Len(IdName){
  return document.getElementById(IdName).value.length;
}
function $SpaceLen(IdName){
  return document.getElementById(IdName).value.replace(/(^\s*)|(\s*$)/g , '').length;
}


function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
 }
}
/*当有多个选项卡的时候，只需要把结构中的id="two1"名字中的two另外命名就好，
如果要做成点击后再转到请将<li>中的onmouseover 改成 onclick
*/

  
  
  


