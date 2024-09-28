<template>
  <div class="research-container">
    <div class="research-area" v-for="(area, index) in researchAreas" :key="index">
      <el-card :body-style="{ padding: '0px' }">
        <div class="image-container">
          <div class="image-placeholder" :style="{ backgroundColor: area.color }">
            <!-- <img :src="area.image" :alt="area.title[$i18n.locale]"> -->
          </div>
        </div>
        <div class="content">
          <h2>{{ area.title[$i18n.locale] }}</h2>
          <p>{{ area.description[$i18n.locale] }}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    const researchAreas = [
      {
        color: '#409EFF',
        // image: '/path/to/remote-sensing-image.jpg',
        title: { en: 'Remote Sensing', zh: '遥感技术' },
        description: {
          en: 'Our research in remote sensing focuses on developing advanced techniques for satellite imagery analysis and interpretation. We work on improving algorithms for land cover classification, change detection, and environmental monitoring using multi-spectral and hyper-spectral data.',
          zh: '我们的遥感研究专注于开发用于卫星图像分析和解释的先进技术。我们致力于改进使用多光谱和高光谱数据进行土地覆盖分类、变化检测和环境监测的算法。'
        }
      },
      {
        color: '#67C23A',
        // image: '/path/to/gis-ml-image.jpg',
        title: { en: 'Machine Learning in GIS', zh: 'GIS中的机器学习' },
        description: {
          en: 'We explore the integration of machine learning techniques with geographical information systems. Our research includes developing AI models for spatial prediction, pattern recognition in geographical data, and automated feature extraction from satellite imagery.',
          zh: '我们探索机器学习技术与地理信息系统的集成。我们的研究包括开发用于空间预测的AI模型，地理数据中的模式识别，以及从卫星图像中自动提取特征。'
        }
      },
      // Add more research areas as needed
    ];

    return {
      researchAreas,
      t,
    };
  },
});
</script>

<style scoped>
.research-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.research-area {
  margin-bottom: 40px;
}

.el-card {
  overflow: hidden;
  transition: all 0.3s;
}

.el-card:hover {
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

.image-container {
  height: 300px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
}

.content {
  padding: 20px;
}

h2 {
  font-size: 1.8em;
  color: #333;
  margin-bottom: 15px;
}

p {
  font-size: 1em;
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .image-container {
    height: 200px;
  }
}
</style>