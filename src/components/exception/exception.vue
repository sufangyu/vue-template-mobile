<template>
  <div class="exception">
    <div class="exception-image" v-if="image">
      <slot name="image"><img :src="image" alt="title" /></slot>
    </div>
    <h1 class="exception-title" v-if="title">{{title}}</h1>
    <div class="exception-description" v-if="description">
      <slot name="description">{{description}}</slot>
    </div>
    <div class="exception-actions">
      <slot name="actions">
        <button class="exception-button" @click="goback" v-if="hasGoback || gobackShow">上一页</button>
        <button class="exception-button exception-button--primary">
          <router-link :to="{path: '/'}" replace exact tag="span">返回首页</router-link>
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exception',
  props: {
    // 图片
    image: {
      type: String,
    },
    // 标题
    title: {
      type: String,
    },
    // 描述
    description: {
      type: String,
      default: '',
    },
    // 是否显示返回键
    hasGoback: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      gobackShow: true,
    };
  },
  created() {
    const { goback } = this.$route.query;
    this.gobackShow = goback === 'true';
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.exception {
  max-width: 640px;
  padding: 80px 0 50px;
  text-align: center;
  margin: 0 auto;

  &-image {
    max-width: 200px;
    text-align: center;
    font-size: 0;
    margin: 0 auto 35px;

    img {
      display: inline-block;
      max-width: 100%;
    }
  }
  
  &-title {
    font-weight: 400;
    font-size: 42px;
    margin: 0 0 10px;
  }

  &-description {
    padding: 0;
    margin: 0;
    font-size: 20px;
    opacity: 0.6;
  }
  
  &-actions {
    margin-top: 35px;

  }

  &-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -webkit-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

    &:focus,
    &:hover {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
    
    &:active {
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: none
    }

    &--primary {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;

      &:focus,
      &:hover {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
      }

      &:active {
        outline: none;
      }
        
    }
    
  }
    
  &-button:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
