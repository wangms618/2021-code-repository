<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{ localTime }}</div>
      <div class="city">切换城市</div>
    </div>
    <div class="city-info">
      <p class="city">{{ mapData.city }}</p>
      <p class="weather">{{ mapData.weather }}</p>
      <h2 class="temp">
        <em>{{ mapData.temperature }}</em
        >℃
      </h2>
      <div class="detail">
        <span>风力:{{ mapData.windPower }}</span>
        <span>风向:{{ mapData.windDirection }}</span>
        <span>空气湿度: {{ mapData.temperature }}%</span>
      </div>
    </div>
    <div class="future">
      <div class="group" v-for="(items, index) in futureMapData" :key="index">
        星期{{ items.week }}:
        <span class="tm">白天:{{ items.dayTemp }}</span>
        <span class="tm">夜间:{{ items.nightTemp }}</span>
      </div>
    </div>
    <div class="map-container" ref="map-container"></div>
    <div class="echart-container" ref="echartContainer"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      localTime: "",
      mapData: {},
      futureMapData: {},
      seriesData: [],
    };
  },
  created() {
    setInterval(() => {
      this.localTime = new Date().toLocaleTimeString();
    }, 1000);
    this.$nextTick(() => {
      this._initMap();
    });
  },
  methods: {
    _initMap() {
      // 获取当前城市
      let _this = this;
      // var map = new AMap.Map(_this.$refs.mapContainer, {
      //   resizeEnable: true,
      // });
      AMap.plugin("AMap.CitySearch", function () {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function (status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            console.log(result);
            _this.getCurrentCityData(result.city);
          }
        });
      });
    },
    getCurrentCityData(cityName) {
      let _this = this;
      //加载天气查询插件
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function (err, data) {
          console.log(err, data);
          _this.mapData = data;
        });
        //执行实时天气信息查询
        weather.getForecast(cityName, function (err, data) {
          console.log(err, data);
          _this.futureMapData = data.forecasts;
          _this.futureMapData.map((item) => {
            _this.seriesData.push(item.dayTemp);
          });
          _this.initEchart();
        });
      });
    },
    initEchart() {
      let _this = this;
      let option = {
        xAxis: {
          type: "category",
          data: ["今天", "明天", "后天", "大后天"],
        },
        tooltip: {trigger: 'axis'},
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.seriesData,
            type: "line",
          },
        ],
      };
      let myChart = echarts.init(_this.$refs.echartContainer);
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less">
.container {
  min-height: 100vh;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .city-info {
    text-align: center;
    .temp {
      font-size: 26px;
      em {
        font-size: 34px;
        font-style: normal;
      }
    }
  }
  .future {
    margin-top: 30px;
    padding: 0 10px;
    .group {
      height: 44px;
      line-height: 44px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.3);
      color: rgba(16, 16, 16, 1);
      font-size: 16px;
      margin-bottom: 10px;
      padding: 0 10px;
      .tm {
        color: #fff;
      }
    }
  }
  .echart-container {
    width: 100%;
    height: 50vh;
  }
}
</style>