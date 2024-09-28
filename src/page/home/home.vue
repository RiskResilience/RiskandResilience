<template>
  <div class="container">
    <div class="carousel-wrapper">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <div style="display: flex; justify-content: center; align-items: center;margin-top: 20px">
        <h2>{{ title }}</h2>
      </div>
      <div style="display: flex; justify-content: center; align-items: center; padding: 0px 500px;margin-top: 20px">
        {{ introduce }}
        <br>
      </div>
      <div style="display: flex; justify-content: center; align-items: center; margin-top: 30px">
        <el-button class="custom-button">More</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const title = ref('About Our Group');
    const introduce = ref('Little master of remote sensingLittle master of remote sensingLittle master of remote sensingLittle master of remote sensingLittle master of remote sensingLittle master of remote sensingLittle master of remote sensingLittle master of remote sensingLittle master of remote sensingLittle master of remote sensingLittle master of remote sensingLittle master of remote sensing');

    return {
      title,
      introduce
    }
  },
}
</script>

<style scoped>
.container {
  background-color: #f0f0f0;
  padding: 20px; /* Add some outer padding */
}

.carousel-wrapper {
  margin: 0 auto;
  width: 55%; /* Adjust the width as needed */
  padding: 10px; /* Add some padding to the carousel wrapper */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: add a shadow for better visuals */
  border-radius: 8px; /* Optional: add rounded corners */
  background-color: white; /* Optional: set a white background */
}

.el-carousel__item h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.custom-button {
  background: white;
  border: 1px solid #409EFF;
  color: #409EFF;
  transition: background 0.3s ease, color 0.3s ease;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
}

.custom-button:hover {
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(64, 158, 255, 1) 100%);
  color: white;
}
</style>