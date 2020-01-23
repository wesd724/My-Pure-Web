//정규표현식 = 문자열에 포함된 특정한 문자조합(패턴)을 표현하고, 찾기위한 도구
var reg = new RegExp("abc");
var reg = /abc/;
console.log(reg.test("abcdef"));
console.log(reg.test("aBcdef") + "\n");

var reg = /Script/;
var result = reg.exec("JavaScript");
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(/abcd/.exec("XSAa127babcdEWcd"));
console.log(result.index, result.input + "\n");

console.log(/[12345]/.test("안녕하세요"));
console.log(/[12345]/ig.exec("저는21살입니1다"));
console.log(/[A-Z]/.exec("abCdn"));
console.log(/[A-E]/.test("abcdF") + "\n");

console.log(/[^abc]/.exec("zxcv"));
console.log(/[^a-c]/.exec("aqz")); // a,b,c 중 a가 있지만 다른문자인 q,z가 있으므로 true
console.log(/[^a-c]/.test("ba") + "\n"); // a, b, c 를 제외하고 다른 문자가 한개도 없으므로 false

console.log(/a.c/.test("adc"));
console.log(/q..z/.test("qwerz"));
console.log(/w...e/.test("wfSae") + "\n");

var phoneNumber = /\d\d\d-\d\d\d\d-\d\d\d\d/;
console.log(phoneNumber.test("010-1235-5679"));
console.log(phoneNumber.test("02-1235-5679") + "\n");

console.log(/\w\w/.exec("bcr"));
console.log(/\w/.exec("SaT"));
console.log(/\w/.test("#"));
console.log(/\W/.test("#"));
console.log(/\w/.test("7") + "\n");

console.log(/\s\w\w/.exec("i love you"));
console.log(/\w\w\s\w\w\w/.exec("abc me you"));
console.log(/\w\w\s\w\w\w/.exec("abc me i") + "\n");

console.log(/[\s\w]/.exec("#a"));
console.log(/[\s\w]/.exec("#"));
console.log(/[\s\w]/.exec("# !") + "\n");

console.log(/[a-z]{3,6}/.exec("AB3Bsd@@faA&sdfeas"));
console.log(/[a-z]{3,6}/.exec("23716fe123") + "\n");

console.log(/[1-9]{5,}/.exec("123Afvs5739Ca312353") + "\n"); // "\n"을 추가하면 exec의 배열이 다 안나오고 첫번째 요소만 반환된다.

console.log(/[a-z]{2}\d{3}/.exec("2AsBzx776dabA123fs%$S") + "\n");

console.log(/[abc]{3}\s\d?/.exec("123 43 zxc AB wq aca 3asA") + "\n");

console.log(/\d?\s+world\d+/.exec("afask 12i4askjdworld12 world893") + "\n");

console.log(/\w+\s?\w*/.exec("23 716fe1$23") + "\n");

console.log(/abc.*/.exec("dkdks1239askabcsxk139sk"));
console.log(/abc.*?/.exec("dkdks1239askabcsxk139sk") + "\n");

console.log(/123+(321+7)+/.exec("1275335381233321173211787796212") + "\n");

var First = /^love/;
console.log(First.test("love you"));
console.log(First.test("my love") + "\n");

var Last = /world$/;
console.log(Last.test("hello world"));
console.log(Last.test("world is BIG") + "\n");

console.log(/\bman\b/.exec("isman ㅇmanㅁㅇ ara manan") + "\n");

console.log(/earth(?=45)/.exec("earth a 45"));
console.log(/earth(?=45)/.exec("22Aearth45B") + "\n");

console.log(/year(?!2020)/.exec("year a 2020"));
console.log(/year(?!2020)/.exec("2jAyear2020asjd") + "\n");

console.log(/abc|123|ABC/.exec("iwkqlsAlCavcAL123Aljdml") + "\n");

console.log(/\bmoney\b/.test(" i love MONEY"));
console.log(/\bmoney\b/i.test(" i love MONEY"));
console.log(/\bmoney\b/i.test(" i love mOneY") + "\n");

console.log(/^world/im.test("WORLD\nbeautifulworld"));
console.log(/^world/im.test("beautifulworld\naWorld"));
console.log(/world$/im.test("beautifulworlD\ngood") + "\n");


console.log(/Java.*/.exec("JavaScript!!"));
console.log(/Java.*?/.exec("JavaScript!!"));
console.log(/Java.+/.exec("JavaScript!!"));
console.log(/Java.+?/.exec("JavaScript!!") + "\n");

console.log("abcdefg".search(/d/));
console.log("a7bc6def13".match(/\d+/));
console.log("a7bc6def13".match(/\d+/g));
console.log("123-456-ABg6X-789-abc1".split("-"));
console.log("Tom, 010-1234-5678".replace(/010-(\d+-\d+)/, "+82-$1"));
console.log("korea, man, programming, a, seoul, vscode".replace(/\w{5}/, "코$&드"));
console.log("korea, man, programming, a, seoul, vscode".replace(/\w{5}/g, "코$&드") + "\n");

var text = "1 world, 2 world, 3 world";
var reg = /\d+ world/g;
console.log(reg.exec(text));
console.log(reg.lastIndex);
console.log(reg.exec(text));
console.log(reg.lastIndex);
console.log(reg.exec(text));
console.log(reg.lastIndex);
console.log("======================================================================")
var text2 = "1 world, 2 world, 3 world";
var reg2 = /\d+ world/y;
console.log(reg2.exec(text2));
console.log(reg2.lastIndex);
console.log(reg2.exec(text2));
console.log(reg2.lastIndex);
console.log(reg2.exec(text2));
console.log(reg2.lastIndex);
reg2.lastIndex = 9;
console.log(reg2.exec(text2));
console.log(reg2.lastIndex);
reg2.lastIndex = 16;
console.log(reg2.exec(text2));
console.log(reg2.lastIndex);
reg2.lastIndex = 18;
console.log(reg2.exec(text2));
console.log(reg2.lastIndex + "\n"); /* y플래그를 설정하면 lastIndex에 '값부터' '무조건 검색을 시작한다'
                                 => lastIndex값이 5일때, 정규표현식과 index가 5인 값(6번째 문자)부터 시작하는 문자열이 일치해야 한다.
                                  아닐 경우 exec함수는 null을 반환하고 lastIndex는 0이 저장된다. */        
var test = "안녕, 나는 \"규범이\"야";
var regp = /\"\W+\"/;
console.log(regp.exec(test));
var test = "안녕, 나는 \"규범이\"야";
var regp = /"\W+"/;
console.log(regp.exec(test));