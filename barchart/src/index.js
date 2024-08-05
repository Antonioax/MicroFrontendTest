import * as echarts from "echarts";

var myChart = echarts.init(document.getElementById("barchart-dev"));

myChart.setOption({
  xAxis: {
    data: ["Shirts", "Cardigans", "Chiffons", "Pants", "Heels", "Socks"],
  },
  yAxis: {},
  series: [
    {
      name: "sales",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
      itemStyle: {
        color: "#33FF57",
      },
    },
  ],
});
