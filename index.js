fetch("./data.json").then(function (res) {
    return res.json();
}).then((res) => {
    console.log("Data:", res);
    //Set the values of days................................................
    const Day1 = document.querySelector(" .Day1 p");
    Day1.innerHTML = res[6].day;
    const Day2 = document.querySelector(" .Day2 p");
    Day2.innerHTML = res[1].day;
    const Day3 = document.querySelector(" .Day3 p");
    Day3.innerHTML = res[2].day;
    const Day4 = document.querySelector(" .Day4 p");
    Day4.innerHTML = res[3].day
    const Day5 = document.querySelector(" .Day5 p");
    Day5.innerHTML = res[4].day
    const Day6 = document.querySelector(" .Day6 p");
    Day6.innerHTML = res[5].day
    const Day7 = document.querySelector(" .Day7 p");
    Day7.innerHTML = res[6].day

    //Set the height of the charts......................................... 
    const chart1 = document.querySelector(".chart1");
    chart1.dataset.content = `${res[0].amount}$`;
    chart1.style.cssText = `height:${res[0].amount}%;`;

    const chart2 = document.querySelector(".chart2");
    chart2.style.cssText = `height:${res[1].amount}%;`
    chart2.dataset.content = `${res[1].amount}$`;

    const chart3 = document.querySelector(".chart3");
    chart3.style.cssText = `height:${res[2].amount}%;`
    chart3.dataset.content = `${res[2].amount}$`;

    const chart4 = document.querySelector(".chart4");
    chart4.style.cssText = `height:${res[3].amount}%;`
    chart4.dataset.content = `${res[3].amount}$`;

    const chart5 = document.querySelector(".chart5");
    chart5.style.cssText = `height:${res[4].amount}%;`
    chart5.dataset.content = `${res[4].amount}$`;

    const chart6 = document.querySelector(".chart6");
    chart6.style.cssText = `height:${res[5].amount}%;`
    chart6.dataset.content = `${res[5].amount}$`;

    const chart7 = document.querySelector(".chart7");
    chart7.style.cssText = `height:${res[6].amount}%;`
    chart7.dataset.content = `${res[6].amount}$`;

});