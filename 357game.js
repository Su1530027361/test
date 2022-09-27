var arr = [3, 5, 7];
arr.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
var player = 1;
while (true) {
    var n = parseInt(prompt("请输入" + player + "号玩家拿牙签的数目（输入范围1-" + arr[0] + "）", ""), 10);
    if (n < 1 || n > arr[0] || isNaN(n)) {
        alert("输入错误，请重新输入！");
        continue;
    }
    arr[0] -= n;
    if (arr[0] == 0)
        arr.shift();
    if (arr.length > 0) {
        alert("剩余牙签的数：" + arr);
        player = player == 1 ? 2 : 1;
    } else {
        alert("剩余牙签的数：" + 0);
        break;
    }
}
alert(player + "号玩家输了！");
