<template>
  <div
    class="dashboard-container"
    style="width: 100%; height: 100%;"
  >
    <!-- 引入arcgis 示例 -->
    <div
      id="map"
      style=" height:1000px"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { loadModules } from "esri-loader";
    
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters([ "name" ]),
  },
  created() {
    loadModules([ "esri/Map", "esri/views/MapView", "dojo/domReady!" ])
      .then(([ Map, MapView ]) => {
        
        // doSomeThing
        let map = new Map({
      basemap: "topo", // 底图类型，详见BaseMap类
    });
    this.view = new MapView({
      container: "map", // 视图的容器
      map: map, // Map的实例放入视图中
      center: [ 104.06, 30.67 ], // 初始显示的地图中心点，经纬度
      zoom: 10, // 当前地图缩放等级d
    });
      })
      .catch((err) => {
        // console.log(err);
      });
    
  }
};
</script>

<style lang="scss" scoped>
@import "https://js.arcgis.com/4.7/esri/css/main.css";
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.main {
  position: absolute;
  top: 70px;
  bottom: 0;
  width: 100%;

  #map {
    width: 100%;
    height: 100%;
  }
  
}
</style>
