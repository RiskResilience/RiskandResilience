<template>
  <div class="zongti">
    <el-row>
      <el-col :span="7"><div class="grid-content ep-bg-purple" style="display: flex;justify-content: center; align-items: center; "/>
       <div >
         <div style="display: flex;justify-content: center; align-items: center; ">
           <img src="/image/footxiaobiao.png"  style="height: 70px; ">
         </div>
         <div style="display: flex;justify-content: center; align-items: center;margin-top: 20px;">
           <el-text class="mx-1" style="color: #ece4e4;font-size: 13px">GROUP OF RISK AND RESILIENCE</el-text>
         </div>
         <div style="display: flex;justify-content: center; align-items: center;margin-top: 20px;">
           <el-text class="mx-1" style="color: #ece4e4;font-size: 10px">Copyright ©2024 Risk&Resilience, All Rights Reserved</el-text>
         </div>
       </div>
      </el-col>
      <el-col :span="1"><div class="grid-content ep-bg-purple" />
        <img src="/image/xian.png">
      </el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple"  style="display: flex;justify-content: center; align-items: center;"/>
        <div style="display: block; align-items: center;margin-left: 50px">
          <el-text class="mx-1" style="display: block;color: #ece4e4;font-size: 20px;margin-top: 15px">Contact us</el-text>
          <br>
          <el-text class="mx-1" style="display: block;color: #ece4e4;font-size: 15px;margin-top: 7px">Email:jyfang@hznu.edu.cn</el-text>
          <el-text class="mx-1" style="display: block;color: #ece4e4;font-size: 13px;margin-top: 23px">Address：2318 Yuhangtang Road, Cangqian Street, Yuhang District, Hangzhou City, Zhejiang Province</el-text>
        </div>
      </el-col>
      <el-col :span="1"><div class="grid-content ep-bg-purple" />
        <img src="/image/xian.png">
      </el-col>
      <el-col :span="7"><div class="grid-content ep-bg-purple" />
        <div style="display: block; align-items: center;margin-left: 50px">
          <el-text class="mx-1" style="display: block;color: #ece4e4;font-size: 20px;margin-top: 15px">Friendly link</el-text>
            <el-dropdown placement="top-start">
            <el-button style="width: 230px;margin-top: 15px">
              <div style="display: block;">
                Campus link<arrow-down />
              </div>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item style="display: block;width: 200px">
                  <div style="padding: 0px 14px;font-size: 12px">
                    Hangzhou Normal University
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-dropdown placement="bottom-start">
            <el-button style="width: 230px;margin-top: 15px">
              <div style="display: block;">
                College links<arrow-down />
              </div>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item style="display: block;width: 200px">
                  <div style="padding: 0px 5px;font-size: 12px">
                    Remote sensing and Earth Science
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.zongti{
  background-color: #075aa6;
}
.el-footer {
  text-align: center;
  margin-top: 40px;
  font-size: 0.5em;
  color: #888;
}

.gray-background {
  background-color: #075aa6;
  display: flex;
  justify-content: center;
  padding: 0px;
}

.content-wrapper {
  background-color: white;
  width: 100%; /* Reduced width */
  padding: 15px; /* Adjusted padding */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.lab-name {
  font-size: 1.5em;
  color: #333;
  margin-left: 10px;
}

.ftlist {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer_top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}

.footer_bot {
  text-align: center;
}

.footer_divider {
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
}

.footer_bot .gp-f12 {
  font-size: 0.8em;
  color: #888;
}

.footcontent{
  margin-top: 10px;
  margin-left: 70px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>