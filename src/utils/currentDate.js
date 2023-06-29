export default {
    timest() {
        var tmp = Date.parse(new Date()).toString();
        tmp = tmp.substr(0, 10);
        return tmp;
    },
    // 获取年月日，时分秒，周几
    getCurrentDate() {
        var now = new Date();
        var year = now.getFullYear();//得到年份
        var month = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;//得到月份
        var date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();//得到日期
        var day = now.getDay(); //得到周几
        var hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();//得到小时
        var minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();//得到分钟
        var seconds = now.getSeconds();//得到秒

        var week;
        var arr_week = new Array(
            "星期日",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六"
        );
        week = arr_week[day];

        let obj = {
            year: year,
            month: month,
            date: date,
            week: week,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }

        return obj
    },
}