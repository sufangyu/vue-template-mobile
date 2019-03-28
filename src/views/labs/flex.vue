<template>
  <div class="page-labs">
    <demo-name name="Flex 弹性布局"></demo-name>

    <div class="flexbox-container">
      <div class="demo-sub-title">基本</div>
      <flex>
        <flex-item><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
      </flex>
      <white-space></white-space>

      <flex>
        <flex-item><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
      </flex>
      <white-space></white-space>

      <flex>
        <flex-item><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
        <flex-item class="space-left"><place-holder /></flex-item>
      </flex>
      <white-space></white-space>


      <div class="demo-sub-title">方向</div>
      <flex>
        <flex-item><place-holder content="Block 1" /></flex-item>
        <flex-item class="space-left"><place-holder content="Block 2" /></flex-item>
      </flex>
      <white-space></white-space>

      <flex direction="row-reverse">
        <flex-item class="space-left"><place-holder content="Block 1" /></flex-item>
        <flex-item><place-holder content="Block 2" /></flex-item>
      </flex>
      <white-space></white-space>

      <flex direction="column">
        <flex-item><place-holder content="Block 1" /></flex-item>
        <flex-item><place-holder content="Block 2" /></flex-item>
      </flex>
      <white-space></white-space>
      
      <flex direction="column-reverse">
        <flex-item><place-holder content="Block 1" /></flex-item>
        <flex-item><place-holder content="Block 2" /></flex-item>
      </flex>

      <div class="demo-sub-title">子元素换行</div>
      <flex>
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
        <place-holder class="inline" content="Block 4" />
      </flex>
      <white-space></white-space>

      <flex wrap="wrap">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
        <place-holder class="inline" content="Block 4" />
      </flex>
      <white-space></white-space>

      <flex wrap="wrap-reverse">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
        <place-holder class="inline" content="Block 4" />
      </flex>
      <white-space></white-space>


      <div class="demo-sub-title">主轴对齐</div>
      <flex>
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
      <white-space></white-space>

      <flex justify="end">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
      <white-space></white-space>
      
      <flex justify="center">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
      <white-space></white-space>

      <flex justify="between">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
      <white-space></white-space>

      <flex justify="around">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
      <white-space></white-space>


      <div class="demo-sub-title">次轴对齐</div>
      <flex align="start">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline small" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
      <white-space></white-space>

      <flex align="end">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline small" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
      <white-space></white-space>
      
      <flex align="center">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline small" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
      <white-space></white-space>

      <flex align="baseline">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline small" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
      <white-space></white-space>

      <flex align="stretch">
        <place-holder class="inline" content="Block 1" />
        <place-holder class="inline small" content="Block 2" />
        <place-holder class="inline" content="Block 3" />
      </flex>
      <white-space></white-space>

    </div>
  </div>
</template>

<script>
import WhiteSpace from '@/components/white-space';
import Flex, { FlexItem } from '@/components/flex';
import DemoName from './components/demo-name.vue';
import PlaceHolder from './components/place-holder.vue';

export default {
  components: {
    WhiteSpace,
    Flex,
    FlexItem,
    DemoName,
    PlaceHolder,
  },
};
</script>

<style lang="scss" scoped>
.page-labs {
  min-height: 100vh;
  background-color: #f5f5f9;

  .flexbox-container {
    margin: 0 15px;
  }

  .demo-sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;
  }

  .space-left {
    margin-left: 10px;
  }

  .inline {
    width: 80px !important;
    margin: 9px 9px 9px 0;

    &.small {
      height: 20px!important;
      line-height: 20px!important;
    }
  }
}
</style>
