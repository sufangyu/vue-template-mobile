<template>
  <exception
    title="401 Error!"
    description="抱歉，没有权限访问~"
    :hasGoback="false"
  ></exception>
</template>

<script>
import Exception from '@/components/exception';

export default {
  components: {
    Exception,
  },
};
</script>
