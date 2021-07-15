//選択肢
let monn1 = ["世界が目指す開発基準","6億6300万人","雨ごい","直下掘り","食器をため洗いする"]
let monn2 = ["世界が目指す持続可能な開発目標","1000人","水の配給","企業秘密","雨水をためる"]
let monn3 = ["世界の組織の名前","7億570万人","井戸掘り","オリジナル","植物から採取"]
let monn4 = ["世界のルール","1兆人","水道","上総掘り","海水蒸留"]
let monnbunn = ["SDGsとは何でしょう。","世界で安全な水を使えない人々は何人？","世界で水を掘るためにどのようなことをしている（今回の動画で紹介したもの）？","ユニセフが実際に使っている井戸掘りの方法は？","水を節水するために多くの家庭でできることは？"]
let monnsuu = ["1/5","2/5","3/5","4/5","5/5"]
//問題数
let monndaisuu = document.getElementById("monndaisuu")
//問題文
let monndaibunn = document.getElementById("monndaidayo")
//ボタン
let b1 = document.getElementById("buttonn")
let b2 = document.getElementById("buttonn2")
let b3 = document.getElementById("buttonn3")
let b4 = document.getElementById("buttonn4")
//正解、不正解
let s = document.getElementById("seikaisuu")
let h = document.getElementById("huseikaisuu")
// id属性で要素を取得
let textbox_element = document.getElementById('button');
//ボタン
document.getElementById("buttonn").innerText = monn1[0]
document.getElementById("buttonn2").innerText = monn2[0]
document.getElementById("buttonn3").innerText = monn3[0]
document.getElementById("buttonn4").innerText = monn4[0]
document.getElementById("monndaidayo").innerText = monnbunn[0]
document.getElementById("monndaisuu").innerText = monnsuu[0]
document.getElementById("buttonn").style.display ="block";
document.getElementById("buttonn2").style.display ="block";
document.getElementById("buttonn3").style.display ="block";
document.getElementById("buttonn4").style.display ="block";
document.getElementById("monndaidayo").style.display ="block";

let aaaa = document.getElementById("buu")
let aaaaaaa = document.getElementById("buuu")
let aaaaaaaa = document.getElementById("buuuu")
let aaaaa = document.getElementById("hhh")
let aaaaaa = document.getElementById("sss")
let aaaaaaaaa = document.getElementById("hhh2")
let aaaaaaaaaa = document.getElementById("sss2")
aaaa.style.display = "none";
aaaaa.style.display = "none";
aaaaaa.style.display = "none";
aaaaaaa.style.display = "none";
aaaaaaaa.style.display = "none";
aaaaaaaaa.style.display = "none";
aaaaaaaaaa.style.display = "none";

let x = 0

function a(a) {
    aaaa.style.display = "block";
    aaaaa.style.display = "block";
    monndaibunn.style.display ="none";
    b1.style.display ="none";
    b2.style.display ="none";
    b3.style.display ="none";
    b4.style.display ="none";
    h.innerText = 1
    document.getElementById("buu").onclick = function buu(){
        aaaa.style.display = "none";
        aaaaa.style.display = "none";
        monndaibunn.style.display ="block";
        b1.style.display ="block";
        b2.style.display ="block";
        b3.style.display ="block";
        b4.style.display ="block";
        monndaisuu = document.getElementById("monndaisuu");
        document.getElementById("buttonn").innerText = monn1[a]
        document.getElementById("buttonn2").innerText = monn2[a]
        document.getElementById("buttonn3").innerText = monn3[a]
        document.getElementById("buttonn4").innerText = monn4[a]
        document.getElementById("monndaidayo").innerText = monnbunn[a]
        document.getElementById("monndaisuu").innerText = "2/5" 
        monndaisuu = document.getElementById("monndaisuu")
    }
    exit;
}

function b(b) {
    aaaaaaaa.style.display = "block";
    aaaaaaaaaa.style.display = "block";
    document.getElementById("buuu").style.display = "block";
    monndaibunn.style.display ="none";
    b1.style.display ="none";
    b2.style.display ="none";
    b3.style.display ="none";
    b4.style.display ="none";
    h.innerText = 1
    document.getElementById("buuu").onclick = function buu(){
        aaaaaaaa.style.display = "none";
        aaaaaaaaaa.style.display = "none";
        monndaibunn.style.display ="block";
        b1.style.display ="block";
        b2.style.display ="block";
        b3.style.display ="block";
        b4.style.display ="block";
        monndaisuu = document.getElementById("monndaisuu");
        document.getElementById("buttonn").innerText = monn1[b]
        document.getElementById("buttonn2").innerText = monn2[b]
        document.getElementById("buttonn3").innerText = monn3[b]
        document.getElementById("buttonn4").innerText = monn4[b]
        document.getElementById("monndaidayo").innerText = monnbunn[b]
        document.getElementById("monndaisuu").innerText = "3/5"
        monndaisuu = document.getElementById("monndaisuu")
    }
    exit;    
}

document.getElementById("buttonn").onclick = function seigo(){
    if (monndaisuu = "1/5"){
        a(1)
    }
    if (monndaisuu = "2/5"){
        b(2)
    }
    if (monndaisuu = "3/5"){
        aaaa.style.display = "block";
        aaaaa.style.display = "block";
        monndaibunn.style.display ="none";
        b1.style.display ="none";
        b2.style.display ="none";
        b3.style.display ="none";
        b4.style.display ="none";
        h.innerText = 1
        document.getElementById("buuuu").onclick = function buu(){
            aaaa.style.display = "none";
            aaaaa.style.display = "none";
            monndaibunn.style.display ="block";
            b1.style.display ="block";
            b2.style.display ="block";
            b3.style.display ="block";
            b4.style.display ="block";
            monndaisuu = document.getElementById("monndaisuu")
            document.getElementById("buttonn").innerText = monn1[3]
            document.getElementById("buttonn2").innerText = monn2[3]
            document.getElementById("buttonn3").innerText = monn3[3]
            document.getElementById("buttonn4").innerText = monn4[3]
            document.getElementById("monndaidayo").innerText = monnbunn[3]
            document.getElementById("monndaisuu").innerText = monnsuu[3]
            monndaisuu = document.getElementById("monndaisuu")
        }
        exit;
    }
    if (monndaisuu = "4/5"){
        aaaa.style.display = "block";
        aaaaa.style.display = "block";
        monndaibunn.style.display ="none";
        b1.style.display ="none";
        b2.style.display ="none";
        b3.style.display ="none";
        b4.style.display ="none";
        h.innerText = 1
        document.getElementById("buuuuu").onclick = function buu(){
            aaaa.style.display = "none";
            aaaaa.style.display = "none";
            monndaibunn.style.display ="block";
            b1.style.display ="block";
            b2.style.display ="block";
            b3.style.display ="block";
            b4.style.display ="block";
            monndaisuu = document.getElementById("monndaisuu");
            document.getElementById("buttonn").innerText = monn1[4]
            document.getElementById("buttonn2").innerText = monn2[4]
            document.getElementById("buttonn3").innerText = monn3[4]
            document.getElementById("buttonn4").innerText = monn4[4]
            document.getElementById("monndaidayo").innerText = monnbunn[4]
            document.getElementById("monndaisuu").innerText = monnsuu[4]
            monndaisuu = document.getElementById("monndaisuu");
        }
        exit;
    }
    if (monndaisuu = "5/5"){
        aaaa.style.display = "block";
        aaaaa.style.display = "block";
        monndaibunn.style.display ="none";
        b1.style.display ="none";
        b2.style.display ="none";
        b3.style.display ="none";
        b4.style.display ="none";
        h.innerText = 1
        document.getElementById("buuuuuu").onclick = function buu(){
            aaaa.style.display = "none";
            aaaaa.style.display = "none";
            monndaibunn.style.display ="block";
            b1.style.display ="block";
            b2.style.display ="block";
            b3.style.display ="block";
            b4.style.display ="block";
            monndaisuu = document.getElementById("monndaisuu");
            document.getElementById("buttonn").innerText = monn1[5]
            document.getElementById("buttonn2").innerText = monn2[5]
            document.getElementById("buttonn3").innerText = monn3[5]
            document.getElementById("buttonn4").innerText = monn4[5]
            document.getElementById("monndaidayo").innerText = monnbunn[5]
            document.getElementById("monndaisuu").innerText = monnsuu[5]
            monndaisuu = document.getElementById("monndaisuu")
            x = x + 1;
        }
        exit;
    }
}
document.getElementById("buttonn2").onclick = function seigo2(){
    if (monndaisuu = "1/5"){
        aaaa.style.display = "block";
        aaaaaa.style.display = "block";
        monndaibunn.style.display ="none";
        b1.style.display ="none";
        b2.style.display ="none";
        b3.style.display ="none";
        b4.style.display ="none";
        h.innerText = 1
        document.getElementById("buu").onclick = function buu(){
            aaaa.style.display = "none";
            aaaaaa.style.display = "none";
            monndaibunn.style.display ="block";
            b1.style.display ="block";
            b2.style.display ="block";
            b3.style.display ="block";
            b4.style.display ="block";
        }
        exit;
    }
    if (monndaisuu = "2/5"){
        alert("不正解")
        exit;
    }
    if (monndaisuu = "3/5"){
        alert("不正解")
        exit;
    }
    if (monndaisuu = "4/5"){
        alert("不正解")
        exit;
    }
    if (monndaisuu = "5/5"){
        alert("不正解")
        exit;
    }
}
document.getElementById("buttonn3").onclick = function seigo3(){
    if (monndaisuu = "1/5"){
        aaaa.style.display = "block";
        aaaaa.style.display = "block";
        monndaibunn.style.display ="none";
        b1.style.display ="none";
        b2.style.display ="none";
        b3.style.display ="none";
        b4.style.display ="none";
        h.innerText = 1
        document.getElementById("buu").onclick = function buu(){
            aaaa.style.display = "none";
            aaaaa.style.display = "none";
            monndaibunn.style.display ="block";
            b1.style.display ="block";
            b2.style.display ="block";
            b3.style.display ="block";
            b4.style.display ="block";
        }
        exit;
    }
    if (monndaisuu = "2/5"){
        alert("不正解")
        exit;
    }
    if (monndaisuu = "3/5"){
        alert("不正解")
        exit;
    }
    if (monndaisuu = "4/5"){
        alert("不正解")
        exit;
    }
    if (monndaisuu = "5/5"){
        alert("不正解")
        exit;
    }
}
document.getElementById("buttonn4").onclick = function seigo4(){
    if (monndaisuu = "1/5"){
        aaaa.style.display = "block";
        aaaaa.style.display = "block";
        monndaibunn.style.display ="none";
        b1.style.display ="none";
        b2.style.display ="none";
        b3.style.display ="none";
        b4.style.display ="none";
        h.innerText = 1
        document.getElementById("buu").onclick = function buu(){
            aaaa.style.display = "none";
            aaaaa.style.display = "none";
            monndaibunn.style.display ="block";
            b1.style.display ="block";
            b2.style.display ="block";
            b3.style.display ="block";
            b4.style.display ="block";
        }
        exit;
    }
    if (monndaisuu = "2/5"){
        alert("不正解")
        exit;
    }
    if (monndaisuu = "3/5"){
        alert("不正解")
        exit;
    }
    if (monndaisuu = "4/5"){
        alert("不正解")
        exit;
    }
    if (monndaisuu = "5/5"){
        alert("不正解")
        exit;
    }
}