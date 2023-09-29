function startTimer(minutes, seconds,food='奇奇怪怪的东西') {
    var br=document.createElement("br");
    var timerElement = document.createElement("p");
    timerElement.classList.add("timer");
    timerElement.innerHTML = food+minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    document.getElementById("cart").appendChild(timerElement);
    timerElement.appendChild(br);
    var timer = setInterval(function() {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                timerElement.innerHTML = food+"煮好了"
                timerElement.classList.add("red");
                var deleteButton = document.createElement("button");
                deleteButton.innerHTML = "删除";
                deleteButton.addEventListener("click", function() {
                    timerElement.remove();
                });
                
                timerElement.appendChild(deleteButton);
                timerElement.appendChild(br);
                
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        timerElement.innerHTML = food+minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        timerElement.appendChild(br);
    }, 1000);
}
function test(){
    var timerElement = document.createElement("timer");
    var br=document.createElement("br");
    timerElement.innerHTML="test";
    timerElement.appendChild(br);
    var deleteButton = document.createElement("button");
                deleteButton.innerHTML = "删除";
                deleteButton.addEventListener("click", function() {
                    timerElement.remove();
                });
                timerElement.removeChild(br);
                
                timerElement.appendChild(deleteButton);
                timerElement.appendChild(br);
                
    document.getElementById("cart").appendChild(timerElement);
    timerElement.classList.add("red");
    
}
function createButtonAndTimer(food, time1=0,time2=0) {
    var button = document.createElement("button");
    button.classList.add("buttons");
    button.innerHTML = food;
    button.addEventListener("click", function() {
        startTimer(time1,time2,food);
    });
    document.body.appendChild(button);
}

createButtonAndTimer("巴沙鱼片", 1);
createButtonAndTimer("乌鱼片", 1);
createButtonAndTimer("小鲍鱼", 2);
createButtonAndTimer("鱿鱼须", 2);
createButtonAndTimer("黄辣丁", 2);
createButtonAndTimer("泥鳅", 2);
createButtonAndTimer("鱼泡", 2);
createButtonAndTimer("鳕鱼", 3);
createButtonAndTimer("鳝鱼", 3);
createButtonAndTimer("鲜青虾", 3);
createButtonAndTimer("武昌鱼", 3);
createButtonAndTimer("耗儿鱼", 5);
createButtonAndTimer("墨鱼仔", 5);
createButtonAndTimer("肥牛", 0,8);
createButtonAndTimer("毛肚", 0,10);
createButtonAndTimer("牛上脑",0, 10);
createButtonAndTimer("羔羊肉", 0,10);
createButtonAndTimer("现切牛肉", 0,30);
createButtonAndTimer("双椒牛肉", 0,30);
createButtonAndTimer("香葱牛肉", 1);
createButtonAndTimer("麻辣牛肉", 1);
createButtonAndTimer("秘制牛肉", 1);
createButtonAndTimer("千层肚", 1);
createButtonAndTimer("牛黄喉", 2);
createButtonAndTimer("牛骨髓", 2);
createButtonAndTimer("牛鞭花", 3);
createButtonAndTimer("牛蹄筋", 5);
createButtonAndTimer("大刀腰片", 10);
createButtonAndTimer("五花肉", 1);
createButtonAndTimer("猪黄喉", 1);
createButtonAndTimer("肺片", 1);
createButtonAndTimer("猪天堂", 2);
createButtonAndTimer("猪鼻筋", 2);
createButtonAndTimer("香卤肥肠", 3);
createButtonAndTimer("仔排", 8);
createButtonAndTimer("猪脑花", 8);
createButtonAndTimer("九尺鹅肠", 0,10);
createButtonAndTimer("生抠鸭肠", 0,10);
createButtonAndTimer("鹌鹑蛋", 1);
createButtonAndTimer("鸭郡肝", 3);
createButtonAndTimer("鲜鸭舌", 3);
createButtonAndTimer("去骨鸭掌", 5);
createButtonAndTimer("火腿肠", 0,10);
createButtonAndTimer("脆皮肠", 1);
createButtonAndTimer("午餐肉", 1);
createButtonAndTimer("虾饺", 2);
createButtonAndTimer("虾丸", 2);
createButtonAndTimer("虾滑", 3);
createButtonAndTimer("撒尿牛丸", 3);
createButtonAndTimer("生菜", 0,10);
createButtonAndTimer("青笋片", 0,10);
createButtonAndTimer("龙须菜", 0,10);
createButtonAndTimer("海带芽", 0,10);
createButtonAndTimer("贡菜", 1);
createButtonAndTimer("折耳根", 1);
createButtonAndTimer("鲜豆皮", 1);
createButtonAndTimer("茼蒿", 2);
createButtonAndTimer("笋片", 2);
createButtonAndTimer("豆芽", 2);
createButtonAndTimer("冬瓜", 2);
createButtonAndTimer("木耳", 2);
createButtonAndTimer("豆腐", 2);
createButtonAndTimer("土豆", 3);
createButtonAndTimer("白萝卜", 2);
createButtonAndTimer("娃娃菜", 2);
createButtonAndTimer("方竹笋", 2);
createButtonAndTimer("藕片", 3);
createButtonAndTimer("海带", 3);
createButtonAndTimer("凤尾", 3);
createButtonAndTimer("宽粉", 3);
createButtonAndTimer("鸭血", 3);
createButtonAndTimer("山药", 4);
