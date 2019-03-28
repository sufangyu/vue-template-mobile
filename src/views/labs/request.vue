<template>
  <div class="page-labs">
    <demo-name name="Request 请求"></demo-name>
    <wing-blank>
      <van-button type="primary" @click="handleGetUser">单个请求</van-button>
      <van-button type="primary" @click="handleGetUserMulti">多个请求</van-button>
      <van-button type="primary" @click="handleUpdateUser">Post请求</van-button>
      <ul v-if="user">
        <li>{{user.name}}</li>
        <li>{{user.html_url}}</li>
        <li>{{user.created_at}}</li>
      </ul>
    </wing-blank>
  </div>
</template>

<script>
import WingBlank from '@/components/wing-blank';
import DemoName from './components/demo-name.vue';
import { getUser, getUsers, updateUser } from '@/api/users';
import http from '@/utils/request';

export default {
  components: {
    DemoName,
    WingBlank,
  },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    handleGetUser() {
      this.getUser();
    },
    async handleUpdateUser() {
      try {
        const params = {
          id: 'sufangyu',
        };
        const data = {
          name: '张三疯',
          age: 107,
        };
        const res = await updateUser(params, data);
        console.log(res);
        this.user = res;
      } catch (error) {
        console.log('handleUpdateUser error =>>', error); 
      }
    },
    async handleGetUserMulti() {
      try {
        const res = await http.all([
          getUser('sufangyu'),
          getUsers(),
        ]);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async getUser(username = 'sufangyu') {
      try {
        const res = await getUser(username);
        console.log(res);
        this.user = res;
      } catch (error) {
        console.log('handleGetUser error =>>', error); 
      }
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  padding: 8px 0;
}
button {
  margin: 0 10px;
}
ul {
  padding: 15px;

  li {
    padding: 5px 0;
  }
}
</style>
