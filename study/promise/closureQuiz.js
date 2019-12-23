let i = 1;
function text() {
    i++;
    alert(i);
}
text();//2
text();//3

function text() {
  let i = 1;
  i++;
  alert(i);
}
text();//2
text();//2

function text() {
  var i = 1;
  return function () {//函数嵌套
      i++;
      alert(i);
  }
}
var a = text();//外部函数赋给a
a();//2
a();//3
