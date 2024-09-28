<template>
  <header class="site-header" role="banner">
    <div class="wrapper">
      <div class="header-container">
        <div class="logo-container">
          <img src="/image/校标.jpg" alt="校标" class="logo" />
          <a class="site-title" rel="author" href="/public" style="font-size: 30px">Risk&Resilience</a>
        </div>
        <div class="nav-and-button-container">
          <el-menu
              class="site-nav"
              :default-active="activeItem"
              mode="horizontal"
              @select="handleSelect"
          >
            <el-menu-item index="1"><router-link class="page-link" to="/">Home</router-link></el-menu-item>
            <el-menu-item index="2"><router-link class="page-link" to="/people">Members</router-link></el-menu-item>
            <el-menu-item index="3"><router-link class="page-link" to="/research">Research</router-link></el-menu-item>
            <el-menu-item index="4"><router-link class="page-link" to="/publication">Publication</router-link></el-menu-item>
            <el-menu-item index="5"><router-link class="page-link" to="/teaching">Teaching</router-link></el-menu-item>
            <el-menu-item index="6"><router-link class="page-link" to="/photos">Photos</router-link></el-menu-item>
            <el-menu-item index="7"><router-link class="page-link" to="/links">Links</router-link></el-menu-item>
          </el-menu>
          <div class="button-group">
            <el-button class="university-button" @click="goToUniversity">Hangzhou Normal University</el-button>
            <el-dropdown @command="handleLanguageChange">
              <el-button class="language-button">
                {{ currentLanguage }}
                <el-icon class="el-icon--right"><arrow-down /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="en">English</el-dropdown-item>
                  <el-dropdown-item command="zh">中文</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { ArrowDown } from '@element-plus/icons-vue';

export default {
  components: {
    ArrowDown,
  },
  setup() {
    const { locale } = useI18n();
    const activeItem = ref("1");

    const handleSelect = (index) => {
      activeItem.value = index;
    };

    const goToUniversity = () => {
      window.open("https://www.hznu.edu.cn/", "_blank");
    };

    const currentLanguage = computed(() => locale.value === 'en' ? 'English' : '中文');

    const handleLanguageChange = (lang) => {
      locale.value = lang;
    };

    return {
      activeItem,
      handleSelect,
      goToUniversity,
      currentLanguage,
      handleLanguageChange,
    };
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 100%;
  margin: 0 auto;
  padding: 0px 0px;
}

.site-header {
  background-color: #f0f4f8;
  padding: 0px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 5px 20px;
  border-radius: 5px;
}

.logo-container {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo {
  height: 135px;
  width: auto;
  margin-right: 15px;
}

.site-title {
  font-size: 1.5em;
  color: #000;
  text-decoration: none;
  white-space: nowrap;
}

.nav-and-button-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  overflow-x: auto;
}

.site-nav {
  margin-right: 20px;
}

.page-link {
  font-size: 0.9em;
}

.el-menu-item {
  padding: 0 10px;
}

.el-menu-item a {
  color: #333;
  text-decoration: none;
}

.el-menu-item:hover a {
  color: #409EFF;
}

.button-group {
  display: flex;
  align-items: center;
}

.university-button {
  white-space: nowrap;
  flex-shrink: 0;
  margin-right: 10px;
}

.language-button {
  display: flex;
  align-items: center;
}

@media (max-width: 1200px) {
  .wrapper {
    max-width: 95%;
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-and-button-container {
    width: 100%;
    margin-top: 10px;
  }

  .site-nav {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .button-group {
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
  }

  .university-button,
  .language-button {
    flex: 1;
  }

  .university-button {
    margin-right: 5px;
  }
}
</style>