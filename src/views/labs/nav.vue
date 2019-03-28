<template>
  <div class="page-labs">
    <div class="page-labs-title">
      <h1>实验室</h1>
      <p>实验性、自定义组件示例</p>
    </div>
    <div class="page-labs-nav">
      <van-collapse
        v-model="activeNamesLayout"
        class="page-labs-nav-item"
        :border="false"
      >
        <van-collapse-item title="布局 Layout" name="1">
          <van-cell title="Flex 弹性布局" is-link to="/labs/flex" />
          <van-cell title="WhiteSpace 上下留白" is-link to="/labs/white-space" />
          <van-cell title="WingBlank 两翼留白" is-link to="/labs/wing-blank" />
          <van-cell title="Icon 图标" is-link to="/labs/icon" />
          <van-cell title="Grid 宫格" is-link to="/labs/grid" />
          <van-cell title="Filter 过滤器" is-link to="/labs/filter" />
        </van-collapse-item>
      </van-collapse>

      <van-collapse
        v-model="activeNamesForm"
        class="page-labs-nav-item"
        :border="false"
      >
        <van-collapse-item title="表单 Form" name="1">
          <van-cell title="验证 Validator" is-link to="/labs/validator" />
        </van-collapse-item>
      </van-collapse>

      <van-collapse
        v-model="activeNamesOther"
        class="page-labs-nav-item"
        :border="false"
      >
        <van-collapse-item title="其他 Others" name="1">
          <van-cell title="Request 请求" is-link to="/labs/request" />
          <van-cell title="Precision 小数精准度" is-link to="/labs/precision" />
          <van-cell title="Skeleton 骨架" is-link to="/labs/skeleton" />
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNamesLayout: ['1'],
      activeNamesForm: [],
      activeNamesOther: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.page-labs-title {
  text-align: center;
  padding: 50px 15px 30px;

  h1 {
    font-size: 24px;
  }
  p {
    opacity: 0.6;
    font-size: 14px;
    margin-top: 8px;
  }
}
.page-labs-nav {
  margin-left: 15px;
  margin-right: 15px;

  &-item {
    margin-bottom: 15px;
  }  
}
</style>

<style lang="scss">
.page-labs-nav {
  .van-collapse-item__title {
    font-size: 16px;
    line-height: 36px;
    align-items: center;
  }

  .van-collapse-item__content {
    padding: 0;
  }
}
</style>
