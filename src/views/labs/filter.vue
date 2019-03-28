<template>
  <div class="page-labs">
    <demo-name name="Filter 过滤器"></demo-name>
    <wing-blank>
      <p>时间戳：{{ time | formatTime }}</p>
      <p>手机：{{ 15912345678 | formatPhone }}</p>
      <p>手机：{{ 15912345678 | formatPhoneHide }}</p>
      <p>银行卡：{{ 123123123123132 | formatBank }}</p>
      <p>千分位：{{ 5000039 | toThousands }}</p>
      <p>千分位：{{ '5000039.00' | toThousands }}</p>
      <p>小数位：{{ 3.141590 | formatFloat }}</p>
      <p>中文数字：{{ money }} =>> {{ money | convertCurrency }}</p>
    </wing-blank>
  </div>
</template>

<script>
import WingBlank from '@/components/wing-blank';
import DemoName from './components/demo-name.vue';

export default {
  components: {
    DemoName,
    WingBlank,
  },
  data() {
    return {
      time: +new Date(),
      money: 1100.1,
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  padding: 8px 0;
}
</style>
