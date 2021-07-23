//問題文消す
document.getElementById("monndaidayo2").style.display = "none";
document.getElementById("monndaidayo3").style.display = "none";
document.getElementById("monndaidayo4").style.display = "none";
document.getElementById("monndaidayo5").style.display = "none";

//正解数、不正解数計算
let seikaisuu = 0
let huseikaisuu = 0


//1問目ボタン
document.getElementById("buttonn").onclick = function seigo(){
    document.getElementById("hhh").style.display = "block";
    document.getElementById("buu").style.display = "block";
    document.getElementById("monndaidayo").style.display = "none";
    document.getElementById("buttonn").style.display = "none";
    document.getElementById("b2uttonn").style.display = "none";
    document.getElementById("b3uttonn").style.display = "none";
    document.getElementById("b4uttonn").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buu").onclick = function sseigo(){
        document.getElementById("monndaidayo2").style.display = "block";
        document.getElementsByClassName("button2")[0].style.display = "block";
        document.getElementsByClassName("button2")[1].style.display = "block";
        document.getElementsByClassName("button2")[2].style.display = "block";
        document.getElementsByClassName("button2")[3].style.display = "block";
        document.getElementById("hhh").style.display = "none";
        document.getElementById("buu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "2/5";
    }
}
document.getElementById("b2uttonn").onclick = function seigo(){
    document.getElementById("sss").style.display = "block";
    document.getElementById("buu").style.display = "block";
    document.getElementById("monndaidayo").style.display = "none";
    document.getElementById("buttonn").style.display = "none";
    document.getElementById("b2uttonn").style.display = "none";
    document.getElementById("b3uttonn").style.display = "none";
    document.getElementById("b4uttonn").style.display = "none";
    seikaisuu = seikaisuu + 1;
    document.getElementById("seikaisuu").innerText = seikaisuu;
    document.getElementById("buu").onclick = function sseigo(){
        document.getElementById("monndaidayo2").style.display = "block";
        document.getElementsByClassName("button2")[0].style.display = "block";
        document.getElementsByClassName("button2")[1].style.display = "block";
        document.getElementsByClassName("button2")[2].style.display = "block";
        document.getElementsByClassName("button2")[3].style.display = "block";
        document.getElementById("sss").style.display = "none";
        document.getElementById("buu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "2/5";
    }
}
document.getElementById("b3uttonn").onclick = function seigo(){
    document.getElementById("hhh").style.display = "block";
    document.getElementById("buu").style.display = "block";
    document.getElementById("monndaidayo").style.display = "none";
    document.getElementById("buttonn").style.display = "none";
    document.getElementById("b2uttonn").style.display = "none";
    document.getElementById("b3uttonn").style.display = "none";
    document.getElementById("b4uttonn").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buu").onclick = function sseigo(){
        document.getElementById("monndaidayo2").style.display = "block";
        document.getElementsByClassName("button2")[0].style.display = "block";
        document.getElementsByClassName("button2")[1].style.display = "block";
        document.getElementsByClassName("button2")[2].style.display = "block";
        document.getElementsByClassName("button2")[3].style.display = "block";
        document.getElementById("hhh").style.display = "none";
        document.getElementById("buu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "2/5";
    }
}
document.getElementById("b4uttonn").onclick = function seigo(){
    document.getElementById("hhh").style.display = "block";
    document.getElementById("buu").style.display = "block";
    document.getElementById("monndaidayo").style.display = "none";
    document.getElementById("buttonn").style.display = "none";
    document.getElementById("b2uttonn").style.display = "none";
    document.getElementById("b3uttonn").style.display = "none";
    document.getElementById("b4uttonn").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buu").onclick = function sseigo(){
        document.getElementById("monndaidayo2").style.display = "block";
        document.getElementsByClassName("button2")[0].style.display = "block";
        document.getElementsByClassName("button2")[1].style.display = "block";
        document.getElementsByClassName("button2")[2].style.display = "block";
        document.getElementsByClassName("button2")[3].style.display = "block";
        document.getElementById("hhh").style.display = "none";
        document.getElementById("buu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "2/5";
    }
}

//2問目ボタン
document.getElementById("buttonn2").onclick = function seigo2(){
    document.getElementById("sss2").style.display = "block";
    document.getElementById("buuu").style.display = "block";
    document.getElementById("monndaidayo2").style.display = "none";
    document.getElementById("buttonn2").style.display = "none";
    document.getElementById("b2uttonn2").style.display = "none";
    document.getElementById("b3uttonn2").style.display = "none";
    document.getElementById("b4uttonn2").style.display = "none";
    seikaisuu = seikaisuu + 1;
    document.getElementById("seikaisuu").innerText =seikaisuu;
    document.getElementById("buuu").onclick = function sseigo2(){
        document.getElementById("monndaidayo3").style.display = "block";
        document.getElementsByClassName("button3")[0].style.display = "block";
        document.getElementsByClassName("button3")[1].style.display = "block";
        document.getElementsByClassName("button3")[2].style.display = "block";
        document.getElementsByClassName("button3")[3].style.display = "block";
        document.getElementById("sss2").style.display = "none";
        document.getElementById("buuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "3/5";
    }
}
document.getElementById("b2uttonn2").onclick = function seigo2(){
    document.getElementById("hhh2").style.display = "block";
    document.getElementById("buuu").style.display = "block";
    document.getElementById("monndaidayo2").style.display = "none";
    document.getElementById("buttonn2").style.display = "none";
    document.getElementById("b2uttonn2").style.display = "none";
    document.getElementById("b3uttonn2").style.display = "none";
    document.getElementById("b4uttonn2").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuu").onclick = function sseigo2(){
        document.getElementById("monndaidayo3").style.display = "block";
        document.getElementsByClassName("button3")[0].style.display = "block";
        document.getElementsByClassName("button3")[1].style.display = "block";
        document.getElementsByClassName("button3")[2].style.display = "block";
        document.getElementsByClassName("button3")[3].style.display = "block";
        document.getElementById("hhh2").style.display = "none";
        document.getElementById("buuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "3/5";
    }
}
document.getElementById("b3uttonn2").onclick = function seigo2(){
    document.getElementById("hhh2").style.display = "block";
    document.getElementById("buuu").style.display = "block";
    document.getElementById("monndaidayo2").style.display = "none";
    document.getElementById("buttonn2").style.display = "none";
    document.getElementById("b2uttonn2").style.display = "none";
    document.getElementById("b3uttonn2").style.display = "none";
    document.getElementById("b4uttonn2").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuu").onclick = function sseigo2(){
        document.getElementById("monndaidayo3").style.display = "block";
        document.getElementsByClassName("button3")[0].style.display = "block";
        document.getElementsByClassName("button3")[1].style.display = "block";
        document.getElementsByClassName("button3")[2].style.display = "block";
        document.getElementsByClassName("button3")[3].style.display = "block";
        document.getElementById("hhh2").style.display = "none";
        document.getElementById("buuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "3/5";
    }
}
document.getElementById("b4uttonn2").onclick = function seigo2(){
    document.getElementById("hhh2").style.display = "block";
    document.getElementById("buuu").style.display = "block";
    document.getElementById("monndaidayo2").style.display = "none";
    document.getElementById("buttonn2").style.display = "none";
    document.getElementById("b2uttonn2").style.display = "none";
    document.getElementById("b3uttonn2").style.display = "none";
    document.getElementById("b4uttonn2").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuu").onclick = function sseigo2(){
        document.getElementById("monndaidayo3").style.display = "block";
        document.getElementsByClassName("button3")[0].style.display = "block";
        document.getElementsByClassName("button3")[1].style.display = "block";
        document.getElementsByClassName("button3")[2].style.display = "block";
        document.getElementsByClassName("button3")[3].style.display = "block";
        document.getElementById("hhh2").style.display = "none";
        document.getElementById("buuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "3/5";
    }
}

//3問目ボタン
document.getElementById("buttonn3").onclick = function seigo3(){
    document.getElementById("hhh3").style.display = "block";
    document.getElementById("buuuu").style.display = "block";
    document.getElementById("monndaidayo3").style.display = "none";
    document.getElementById("buttonn3").style.display = "none";
    document.getElementById("b2uttonn3").style.display = "none";
    document.getElementById("b3uttonn3").style.display = "none";
    document.getElementById("b4uttonn3").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuuu").onclick = function sseigo3(){
        document.getElementById("monndaidayo4").style.display = "block";
        document.getElementsByClassName("button4")[0].style.display = "block";
        document.getElementsByClassName("button4")[1].style.display = "block";
        document.getElementsByClassName("button4")[2].style.display = "block";
        document.getElementsByClassName("button4")[3].style.display = "block";
        document.getElementById("hhh3").style.display = "none";
        document.getElementById("buuuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "4/5";
    }
}
document.getElementById("b2uttonn3").onclick = function seigo3(){
    document.getElementById("hhh3").style.display = "block";
    document.getElementById("buuuu").style.display = "block";
    document.getElementById("monndaidayo3").style.display = "none";
    document.getElementById("buttonn3").style.display = "none";
    document.getElementById("b2uttonn3").style.display = "none";
    document.getElementById("b3uttonn3").style.display = "none";
    document.getElementById("b4uttonn3").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuuu").onclick = function sseigo3(){
        document.getElementById("monndaidayo4").style.display = "block";
        document.getElementsByClassName("button4")[0].style.display = "block";
        document.getElementsByClassName("button4")[1].style.display = "block";
        document.getElementsByClassName("button4")[2].style.display = "block";
        document.getElementsByClassName("button4")[3].style.display = "block";
        document.getElementById("hhh3").style.display = "none";
        document.getElementById("buuuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "4/5";
    }
}
document.getElementById("b3uttonn3").onclick = function seigo3(){
    document.getElementById("sss3").style.display = "block";
    document.getElementById("buuuu").style.display = "block";
    document.getElementById("monndaidayo3").style.display = "none";
    document.getElementById("buttonn3").style.display = "none";
    document.getElementById("b2uttonn3").style.display = "none";
    document.getElementById("b3uttonn3").style.display = "none";
    document.getElementById("b4uttonn3").style.display = "none";
    seikaisuu = seikaisuu + 1;
    document.getElementById("seikaisuu").innerText = seikaisuu;
    document.getElementById("buuuu").onclick = function sseigo3(){
        document.getElementById("monndaidayo4").style.display = "block";
        document.getElementsByClassName("button4")[0].style.display = "block";
        document.getElementsByClassName("button4")[1].style.display = "block";
        document.getElementsByClassName("button4")[2].style.display = "block";
        document.getElementsByClassName("button4")[3].style.display = "block";
        document.getElementById("sss3").style.display = "none";
        document.getElementById("buuuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "4/5";
    }
}
document.getElementById("b4uttonn3").onclick = function seigo3(){
    document.getElementById("hhh3").style.display = "block";
    document.getElementById("buuuu").style.display = "block";
    document.getElementById("monndaidayo3").style.display = "none";
    document.getElementById("buttonn3").style.display = "none";
    document.getElementById("b2uttonn3").style.display = "none";
    document.getElementById("b3uttonn3").style.display = "none";
    document.getElementById("b4uttonn3").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuuu").onclick = function sseigo3(){
        document.getElementById("monndaidayo4").style.display = "block";
        document.getElementsByClassName("button4")[0].style.display = "block";
        document.getElementsByClassName("button4")[1].style.display = "block";
        document.getElementsByClassName("button4")[2].style.display = "block";
        document.getElementsByClassName("button4")[3].style.display = "block";
        document.getElementById("hhh3").style.display = "none";
        document.getElementById("buuuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "4/5";
    }
}

//4問目ボタン
document.getElementById("buttonn4").onclick = function seigo4(){
    document.getElementById("hhh4").style.display = "block";
    document.getElementById("buuuuu").style.display = "block";
    document.getElementById("monndaidayo4").style.display = "none";
    document.getElementById("buttonn4").style.display = "none";
    document.getElementById("b2uttonn4").style.display = "none";
    document.getElementById("b3uttonn4").style.display = "none";
    document.getElementById("b4uttonn4").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuuuu").onclick = function sseigo3(){
        document.getElementById("monndaidayo5").style.display = "block";
        document.getElementsByClassName("button5")[0].style.display = "block";
        document.getElementsByClassName("button5")[1].style.display = "block";
        document.getElementsByClassName("button5")[2].style.display = "block";
        document.getElementsByClassName("button5")[3].style.display = "block";
        document.getElementById("hhh4").style.display = "none";
        document.getElementById("buuuuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "5/5";
    }
}
document.getElementById("b2uttonn4").onclick = function seigo3(){
    document.getElementById("hhh4").style.display = "block";
    document.getElementById("buuuuu").style.display = "block";
    document.getElementById("monndaidayo4").style.display = "none";
    document.getElementById("buttonn4").style.display = "none";
    document.getElementById("b2uttonn4").style.display = "none";
    document.getElementById("b3uttonn4").style.display = "none";
    document.getElementById("b4uttonn4").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuuuu").onclick = function sseigo3(){
        document.getElementById("monndaidayo5").style.display = "block";
        document.getElementsByClassName("button5")[0].style.display = "block";
        document.getElementsByClassName("button5")[1].style.display = "block";
        document.getElementsByClassName("button5")[2].style.display = "block";
        document.getElementsByClassName("button5")[3].style.display = "block";
        document.getElementById("hhh4").style.display = "none";
        document.getElementById("buuuuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "5/5";
    }
}
document.getElementById("b3uttonn4").onclick = function seigo3(){
    document.getElementById("hhh4").style.display = "block";
    document.getElementById("buuuuu").style.display = "block";
    document.getElementById("monndaidayo4").style.display = "none";
    document.getElementById("buttonn4").style.display = "none";
    document.getElementById("b2uttonn4").style.display = "none";
    document.getElementById("b3uttonn4").style.display = "none";
    document.getElementById("b4uttonn4").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuuuu").onclick = function sseigo3(){
        document.getElementById("monndaidayo5").style.display = "block";
        document.getElementsByClassName("button5")[0].style.display = "block";
        document.getElementsByClassName("button5")[1].style.display = "block";
        document.getElementsByClassName("button5")[2].style.display = "block";
        document.getElementsByClassName("button5")[3].style.display = "block";
        document.getElementById("hhh4").style.display = "none";
        document.getElementById("buuuuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "5/5";
    }
}
document.getElementById("b4uttonn4").onclick = function seigo3(){
    document.getElementById("sss4").style.display = "block";
    document.getElementById("buuuuu").style.display = "block";
    document.getElementById("monndaidayo4").style.display = "none";
    document.getElementById("buttonn4").style.display = "none";
    document.getElementById("b2uttonn4").style.display = "none";
    document.getElementById("b3uttonn4").style.display = "none";
    document.getElementById("b4uttonn4").style.display = "none";
    seikaisuu = seikaisuu + 1;
    document.getElementById("seikaisuu").innerText = seikaisuu;
    document.getElementById("buuuuu").onclick = function sseigo3(){
        document.getElementById("monndaidayo5").style.display = "block";
        document.getElementsByClassName("button5")[0].style.display = "block";
        document.getElementsByClassName("button5")[1].style.display = "block";
        document.getElementsByClassName("button5")[2].style.display = "block";
        document.getElementsByClassName("button5")[3].style.display = "block";
        document.getElementById("sss4").style.display = "none";
        document.getElementById("buuuuu").style.display = "none";
        document.getElementById("monndaisuu").innerText = "5/5";
    }
}

//5問目ボタン
document.getElementById("buttonn5").onclick = function seigo4(){
    document.getElementById("sss5").style.display = "block";
    document.getElementById("buuuuuu").style.display = "block";
    document.getElementById("monndaidayo5").style.display = "none";
    document.getElementById("buttonn5").style.display = "none";
    document.getElementById("b2uttonn5").style.display = "none";
    document.getElementById("b3uttonn5").style.display = "none";
    document.getElementById("b4uttonn5").style.display = "none";
    seikaisuu = seikaisuu + 1;
    document.getElementById("seikaisuu").innerText = seikaisuu;
    document.getElementById("buuuuuu").onclick = function sseigo3(){
        document.getElementById("sss5").style.display = "none";
        document.getElementById("buuuuuu").style.display = "none";
    }
}
document.getElementById("b2uttonn5").onclick = function seigo3(){
    document.getElementById("hhh5").style.display = "block";
    document.getElementById("buuuuuu").style.display = "block";
    document.getElementById("monndaidayo5").style.display = "none";
    document.getElementById("buttonn5").style.display = "none";
    document.getElementById("b2uttonn5").style.display = "none";
    document.getElementById("b3uttonn5").style.display = "none";
    document.getElementById("b4uttonn5").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuuuuu").onclick = function sseigo3(){
        document.getElementById("hhh5").style.display = "none";
        document.getElementById("buuuuuu").style.display = "none";
    }
}
document.getElementById("b3uttonn5").onclick = function seigo3(){
    document.getElementById("hhh5").style.display = "block";
    document.getElementById("buuuuuu").style.display = "block";
    document.getElementById("monndaidayo5").style.display = "none";
    document.getElementById("buttonn5").style.display = "none";
    document.getElementById("b2uttonn5").style.display = "none";
    document.getElementById("b3uttonn5").style.display = "none";
    document.getElementById("b4uttonn5").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuuuuu").onclick = function sseigo3(){
        document.getElementById("hhh5").style.display = "none";
        document.getElementById("buuuuuu").style.display = "none";
    }
}
document.getElementById("b4uttonn5").onclick = function seigo3(){
    document.getElementById("hhh5").style.display = "block";
    document.getElementById("buuuuuu").style.display = "block";
    document.getElementById("monndaidayo5").style.display = "none";
    document.getElementById("buttonn5").style.display = "none";
    document.getElementById("b2uttonn5").style.display = "none";
    document.getElementById("b3uttonn5").style.display = "none";
    document.getElementById("b4uttonn5").style.display = "none";
    huseikaisuu = huseikaisuu + 1;
    document.getElementById("huseikaisuu").innerText = huseikaisuu;
    document.getElementById("buuuuuu").onclick = function sseigo3(){
        document.getElementById("hhh5").style.display = "none";
        document.getElementById("buuuuuu").style.display = "none";
    }
}