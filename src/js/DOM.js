function first() {

var p = document.getElementById("firstp");
p.style.color = "blue";
p.style.fontSize = "100px";

}

function second() {

    var jkb = document.getElementById("firstjkb");
    jkb.style.color = "green";
    jkb.style.fontSize = "100px";
    
    }

function notag() {

document.getElementById("NoTag").style.color="yellow";

}

var asd = {a: 5, b: 7, c: 1};
for (var i in asd) {
    console.log(i + ": " + asd[i]);
}


try {
    var qwe = ["a", 1, 67, "한국", 87.5];
    for(var i in qwe) {
        console.log(i + ": " + qwe[i]);
    }
} catch(e) {
        console.log("오류인 배열 요소");
  }

  

