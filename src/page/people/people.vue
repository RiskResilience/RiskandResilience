<template>
  <div class="container">
    <div class="member-grid">
      <div v-for="(member, index) in teamMembers" :key="index" class="member-card">
        <div class="member-header">
          <div class="avatar-placeholder" :style="{ backgroundColor: member.color }">
            {{ member.name[$i18n.locale].charAt(0) }}
          </div>
          <div class="member-info">
            <h2>{{ member.name[$i18n.locale] }}</h2>
            <span class="email">{{ member.email }}</span>
          </div>
        </div>
        <div class="member-details">
          <div v-if="index === 0">
            <!-- 老师的布局保持不变 -->
            <div class="info-row">
              <div v-if="member.education" class="info-section">
                <h3>{{ $t('education') }}</h3>
                <ul class="timeline">
                  <li v-for="(edu, eduIndex) in member.education" :key="eduIndex">
                    <span class="date">{{ edu.date }}</span>
                    <strong>{{ edu.institution[$i18n.locale] }}</strong>
                  </li>
                </ul>
              </div>
              <div v-if="member.employment" class="info-section">
                <h3>{{ $t('employment') }}</h3>
                <ul class="timeline">
                  <li v-for="(emp, empIndex) in member.employment" :key="empIndex">
                    <span class="date">{{ emp.date }}</span>
                    <strong>{{ emp.institution[$i18n.locale] }}</strong>
                    <span class="position">{{ emp.position[$i18n.locale] }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="member.researchInterests" class="info-section">
              <h3>{{ $t('researchInterests') }}</h3>
              <ul class="interests-list">
                <li v-for="(interest, interestIndex) in member.researchInterests" :key="interestIndex">
                  {{ interest[$i18n.locale] }}
                </li>
              </ul>
            </div>
            <div v-if="member.publications" class="info-section">
              <h3>{{ $t('publications') }}</h3>
              <ul class="publications-list">
                <li v-for="(pub, pubIndex) in member.publications" :key="pubIndex">
                  {{ pub[$i18n.locale] }}
                </li>
              </ul>
            </div>
          </div>
          <div v-else>
            <!-- 学生的布局：教育经历和研究方向在同一行 -->
            <div class="info-row">
              <div v-if="member.education" class="info-section">
                <h3>{{ $t('education') }}</h3>
                <ul class="timeline">
                  <li v-for="(edu, eduIndex) in member.education" :key="eduIndex">
                    <span class="date">{{ edu.date }}</span>
                    <strong>{{ edu.institution[$i18n.locale] }}</strong>
                  </li>
                </ul>
              </div>
              <div v-if="member.researchInterests" class="info-section">
                <h3>{{ $t('researchInterests') }}</h3>
                <ul class="interests-list">
                  <li v-for="(interest, interestIndex) in member.researchInterests" :key="interestIndex">
                    {{ interest[$i18n.locale] }}
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="member.publications" class="info-section">
              <h3>{{ $t('publications') }}</h3>
              <ul class="publications-list">
                <li v-for="(pub, pubIndex) in member.publications" :key="pubIndex">
                  {{ pub[$i18n.locale] }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    const teamMembers = [
      {
        name: { en: 'Jiayi FANG', zh: '方佳毅' },
        email: 'jyfang@hznu.edu.cn',
        color: '#4CAF50',
        education: [
          {
            date: '2013.9-2018.6',
            institution: { en: 'Institute of Disaster Reduction and Emergency Management, Beijing Normal University', zh: '北京师范大学减灾与应急管理研究院自然灾害学' },
          },
          {
            date: '2016.1-2017.7',
            institution: { en: 'University of Southampton/National Oceanographic Research Centre, UK', zh: '英国南安普顿大学/英国国家海洋研究中心' },
          },
          {
            date: '2015.5-2015.8',
            institution: { en: 'International Institute for Applied Analysis, Vienna, Austria (YSSP)', zh: '奥地利维也纳国际应用分析研究所(YSSP交流访学)' },
          },
          {
            date: '2009.9-2013.6',
            institution: { en: 'Bachelor of Physical Oceanography (Talent Base Class), College of Marine Environment, Ocean University of China', zh: '中国海洋大学海洋环境学院物理海洋学（人才基地班）本科' },
          },
        ],
        employment: [
          {
            date: '2018.7-2022.8',
            institution: { en: 'School of Geographic Sciences, East China Normal University', zh: '华东师范大学地理科学学院' },
            position: { en: 'Postdoctoral Researcher/Assistant Researcher', zh: '博士后/助理研究员' }
          },
          {
            date: '2022.8-',
            institution: { en: 'School of Information Science and Technology, Hangzhou Normal University', zh: '杭州师范大学信息科学与技术学院' },
            position: { en: 'Associate Professor, Institute of Remote Sensing and Earth Sciences', zh: '遥感与地球科学研究院 副教授' }
          },
        ],
        researchInterests: [
          { en: 'Remote Sensing Image Processing', zh: '遥感图像处理' },
          { en: 'Machine Learning in Geographic Information Systems', zh: '机器学习在地理信息系统中的应用' },
          { en: 'Environmental Change Monitoring', zh: '环境变化监测' }
        ],
        publications: [
          {
            en: 'Fang, J., et al. (2022). "Advanced remote sensing techniques for urban growth monitoring." Remote Sensing of Environment.',
            zh: 'Fang, J., et al. (2022). "城市增长监测的先进遥感技术." 遥感环境.'
          },
          {
            en: 'Fang, J., et al. (2021). "Machine learning approaches for land cover classification using multi-temporal satellite imagery." ISPRS Journal of Photogrammetry and Remote Sensing.',
            zh: 'Fang, J., et al. (2021). "使用多时相卫星图像进行土地覆盖分类的机器学习方法." ISPRS摄影测量与遥感杂志.'
          }
        ]
      },
      {
        name: { en: 'San ZHANG', zh: '张三' },
        email: 'zhangsan@hznu.edu.cn',
        color: '#2196F3',
        education: [
          {
            date: '2021-06-30',
            institution: { en: 'Zhejiang University', zh: '浙江大学' },
          },
        ],
        researchInterests: [
          { en: 'Artificial Intelligence', zh: '人工智能' },
          { en: 'Computer Vision', zh: '计算机视觉' },
          { en: 'Deep Learning', zh: '深度学习' }
        ],
        publications: [
          {
            en: 'Zhang, S., et al. (2022). "Novel deep learning architectures for image recognition." IEEE Transactions on Pattern Analysis and Machine Intelligence.',
            zh: 'Zhang, S., et al. (2022). "图像识别的新型深度学习架构." IEEE模式分析与机器智能汇刊.'
          },
        ]
      },
      {
        name: { en: 'Si LI', zh: '李四' },
        email: 'lisi@hznu.edu.cn',
        color: '#FFC107',
        education: [
          {
            date: '2023-06-15',
            institution: { en: 'Hangzhou Normal University', zh: '杭州师范大学' },
          },
          {
            date: '2020-06-30',
            institution: { en: 'Zhejiang University', zh: '浙江大学' },
          },
        ],
        researchInterests: [
          { en: 'Data Mining', zh: '数据挖掘' },
          { en: 'Machine Learning', zh: '机器学习' },
          { en: 'Big Data Analysis', zh: '大数据分析' }
        ],
      },
      {
        name: { en: 'Wu WANG', zh: '王五' },
        email: 'wangwu@hznu.edu.cn',
        color: '#9C27B0',
        education: [
          {
            date: '2019-07-01',
            institution: { en: 'Peking University', zh: '北京大学' },
          },
          {
            date: '2023-06-30',
            institution: { en: 'Tsinghua University', zh: '清华大学' },
          },
        ],
        researchInterests: [
          { en: 'Natural Language Processing', zh: '自然语言处理' },
          { en: 'Deep Learning', zh: '深度学习' },
          { en: 'Knowledge Graph', zh: '知识图谱' }
        ],
        publications: [
          {
            en: 'Wang, W., et al. (2023). "Advances in natural language understanding using transformer models." Computational Linguistics.',
            zh: 'Wang, W., et al. (2023). "使用transformer模型的自然语言理解进展." 计算语言学.'
          },
        ]
      },
      {
        name: { en: 'Liu ZHAO', zh: '赵六' },
        email: 'zhaoliu@hznu.edu.cn',
        color: '#FF5722',
        education: [
          {
            date: '2018-06-30',
            institution: { en: 'Fudan University', zh: '复旦大学' },
          },
        ],
        researchInterests: [
          { en: 'Image Processing', zh: '图像处理' },
          { en: 'Pattern Recognition', zh: '模式识别' },
          { en: 'Computer Vision', zh: '计算机视觉' }
        ],
        publications: [
          {
            en: 'Zhao, L., et al. (2022). "Novel approaches in image segmentation for medical imaging." IEEE Transactions on Medical Imaging.',
            zh: 'Zhao, L., et al. (2022). "医学影像分割的新方法." IEEE医学影像汇刊.'
          },
          {
            en: 'Zhao, L., et al. (2020). "Advancements in facial recognition technology." Pattern Recognition.',
            zh: 'Zhao, L., et al. (2020). "人脸识别技术的进展." 模式识别.'
          },
        ]
      },
      {
        name: { en: 'Qi QIAN', zh: '钱七' },
        email: 'qianqi@hznu.edu.cn',
        color: '#607D8B',
        education: [
          {
            date: '2020-06-15',
            institution: { en: 'Nanjing University', zh: '南京大学' },
          },
        ],
        employment: [
          {
            date: '2020.9-至今',
            institution: { en: 'School of Information Science and Technology, Hangzhou Normal University', zh: '杭州师范大学信息科学与技术学院' },
            position: { en: 'Lecturer', zh: '讲师' }
          },
        ],
        researchInterests: [
          { en: 'Big Data Analysis', zh: '大数据分析' },
          { en: 'Data Visualization', zh: '数据可视化' },
          { en: 'Business Intelligence', zh: '商业智能' }
        ],
        publications: [
          {
            en: 'Qian, Q., et al. (2021). "Innovative techniques in big data visualization for decision making." Big Data Research.',
            zh: 'Qian, Q., et al. (2021). "用于决策的大数据可视化创新技术." 大数据研究.'
          },
        ]
      },
    ];

    return {
      teamMembers,
      t,
    };
  },
});
</script>

<style scoped>
.container {
  background-color: #f8f9fa;
  padding: 30px 185px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.member-grid {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
}

.member-card {
  background-color: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
}

.member-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: white;
  margin-right: 20px;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.member-info {
  flex-grow: 1;
}

.member-info h2 {
  margin: 0 0 5px 0;
  color: #333;
  font-size: 2em;
  font-weight: 600;
}

.email {
  font-size: 1em;
  color: #666;
  display: block;
}
.member-details {
display: block;
}

.member-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-row {
  display: flex;
  gap: 30px;
}

.info-section {
  flex: 1;
}

.info-section h3 {
  color: #444;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 15px;
  font-size: 1.4em;
  font-weight: 600;
}

.timeline, .interests-list, .publications-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.timeline li, .interests-list li, .publications-list li {
  margin-bottom: 15px;
  position: relative;
  padding-left: 25px;
  font-size: 1em;
}

.timeline li:before, .interests-list li:before, .publications-list li:before {
  content: '';
  width: 12px;
  height: 12px;
  background-color: #4CAF50;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 5px;
  box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.2);
}

.date {
  font-size: 0.9em;
  color: #888;
  display: block;
  margin-bottom: 5px;
}

.location, .position {
  font-size: 0.9em;
  color: #666;
  display: block;
  margin-top: 5px;
}

.member-card:not(:first-child) .info-row {
  display: flex;
  gap: 30px;
}

.member-card:not(:first-child) .info-section {
  flex: 1;
}

@media (max-width: 1200px) {
  .container {
    padding: 30px 100px;
  }
}

@media (max-width: 992px) {
  .container {
    padding: 30px 50px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .info-row {
    flex-direction: column;
  }

  .member-card:not(:first-child) .info-row {
    flex-direction: column;
  }

  .member-info h2 {
    font-size: 1.5em;
  }

  .avatar-placeholder {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
}
</style>