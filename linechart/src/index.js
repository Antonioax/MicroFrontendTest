import * as echarts from "echarts";

var myChart = echarts.init(document.getElementById("linechart-dev"));

myChart.setOption({
  xAxis: {
    data: ["A", "B", "C", "D", "E"],
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: "line",
      lineStyle: {
        normal: {
          color: "green",
          width: 4,
          type: "dashed",
        },
      },
    },
  ],
});
