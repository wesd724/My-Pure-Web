// var ret = prompt("0,1중 하나를 입력하세요", ""); //pronpt()함수는 "문자열"을 입력받아 리턴하므로, 정수,실수 안됨
// switch(ret) {
//     case "0": 
//     alert("0을 입력");
//     break;
//     case "1":
//     alert("1을 입력");
//     break;
// }
// if((ret != 0) && (ret != 1))
// {
//     alert("입력 오류");
// }

// var con = confirm("눌러보세요");
// if(con == true) {
//     alert("확인 누르셨습니다");
// }
// else {
//     alert("취소를 누르셨습니다");
// } 
function multi(a, b) {
    return a*b;
}
function sigma(x,y) {
    for(z = 0;x <= y;x++)
    {
        z += x;
    }
    return z;
}
function newmul(k) {
        
    for(m = 1;m<10;m++)
    {
        document.write(k + " X " + m + "=" + k*m + "<br>");
    }
 }
 //new Object()로 객체 생성
var obj = new Object();
obj.me = "정규범";
obj.age = 20;
obj.live = "서울";
obj.multi = multi;
obj.sigma = sigma;
obj.newmul = newmul;

//리터럴 표기법으로 객체 생성
var newobj = {
    lang : "자바스크립트",
    edit : "visual stdio code",
    goal : "홈페이지",
};


var god = {
    year : 2019,

    gugudan : function(i)
    {
        for(j = 1;j<10;j++)
        {
            document.write(i + " X " + j + "=" + i*j+"<br>");
        }
    }
};

//프로토타입으로 사용자 객체 생성
//프로토타입은 함수로 만든다
function Profile(country,city,age) {
    this.star = "지구";
    this.country = country;
    this.city = city;
    this.age = age;

    this.getage = function() {
        if(age<10)  {
            return "어리네요";
        }
        else if((age>=10) &&(age<20)) {
            return "젊네요";
        }
        else if(age>=20) {
            return "성인이네요";
        }
    }
}

//객체 생성
var jung = new Profile("한국","서울",7);
var kue = new Profile("미국","뉴욕",19);
var beom = new Profile("스페인","바르셀로나",33);
 


