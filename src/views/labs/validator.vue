<template>
  <div class="page-labs">
    <demo-name name="Validator 验证"></demo-name>

    <wing-blank>
      <div class="demo-sub-title">基础表单</div>
      <form
       novalidate
       autocomplete="off"
       @submit.prevent="handleSubmit"
      >
        <div class="field">
          <label
            for="email"
            class="field-label"
          >邮箱</label>
          <input
            id="email"
            name="email"
            type="email"
            v-model="form.email"
            v-validate="'required|email'"
            data-vv-as="邮箱"
            placeholder="请输入邮箱"
            class="input"
            :class="{ 'input-error': errors.has('email')}"
          >
          <small
            v-if="errors.has('email')"
            class="field-text field-text-danger"
          >{{ errors.first('email') }}</small>
        </div>
        <div class="field">
          <label
            for="name"
            class="field-label"
          >用户名</label>
          <input
            id="name"
            name="name"
            type="text"
            v-model="form.name"
            v-validate="'required'"
            data-vv-as="用户名"
            placeholder="请输入用户名"
            class="input"
            :class="{ 'input-error': errors.has('name')}"
          >
          <small
            v-if="errors.has('name')"
            class="field-text field-text-danger"
          >{{ errors.first('name') }}</small>
        </div>
        <div class="field">
          <label
            for="phone"
            class="field-label"
          >手机号</label>
          <input
            id="phone"
            name="phone"
            type="text"
            v-model="form.phone"            
            v-validate="'required|mobile'"
            data-vv-as="手机号"
            placeholder="请输入手机号"
            class="input"
            :class="{ 'input-error': errors.has('phone')}"
          >
          <small
            v-if="errors.has('phone')"
            class="field-text field-text-danger"
          >{{ errors.first('phone') }}</small>
        </div>
        <button
          type="submit"
          class="button button-primary"
        >提交</button>
      </form>
    </wing-blank>

    <div class="list-api">
      <h3>内置的校验规则</h3>
      <ul>
        <li><code>after{target}</code> - 比target要大的一个合法日期，格式(DD/MM/YYYY)</li>
        <li><code>alpha</code> - 只包含英文字符</li>
        <li><code>alpha_dash</code> - 可以包含英文、数字、下划线、破折号</li>
        <li><code>alpha_num</code> - 可以包含英文和数字</li>
        <li><code>before:{target}</code> - 和after相反</li>
        <li><code>between:{min},{max}</code> - 在min和max之间的数字</li>
        <li><code>confirmed:{target}</code> - 必须和target一样</li>
        <li><code>date_between:{min,max}</code> - 日期在min和max之间</li>
        <li><code>date_format:{format}</code> - 合法的format格式化日期</li>
        <li><code>decimal:{decimals?}</code> - 数字，而且是decimals进制</li>
        <li><code>digits:{length}</code> - 长度为length的数字</li>
        <li><code>dimensions:{width},{height}</code> - 符合宽高规定的图片</li>
        <li><code>email</code> - 邮件</li>
        <li><code>ext:[extensions]</code> - 后缀名</li>
        <li><code>image</code> - 图片</li>
        <li><code>in:[list]</code> - 包含在数组list内的值</li>
        <li><code>ip</code> - ipv4地址</li>
        <li><code>max:{length}</code> - 最大长度为length的字符</li>
        <li><code>mimes:[list]</code> - 文件类型</li>
        <li><code>min</code> - max相反</li>
        <li><code>mot_in</code> - in相反</li>
        <li><code>numeric</code> - 只允许数字</li>
        <li><code>regex:{pattern}</code> - 值必须符合正则pattern</li>
        <li><code>required</code> - 不解释</li>
        <li><code>size:{kb}</code> - 文件大小不超过</li>
        <li><code>url:{domain?}</code> - (指定域名的)url</li>
      </ul>
      <p>了解更多: <a href="https://baianat.github.io/vee-validate/" target="_blank">vee-validate</a></p>
    </div>
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
      form: {
        username: '',
        password: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$validator.validate().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return;
        }
        // eslint-disable-next-line
        alert('Correct them errors!');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-labs {
  min-height: 100vh;
  background-color: #f5f5f9;

  p {
    padding: 10px 0;
  }

  .demo-sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;
  }
  .list-api {
    padding: 15px;

    h3 {
      margin-bottom: 15px;
    }

    li {
      padding: 8px 0;

      code {
        border: none;
        background: #f7f7f7;
        margin: 0;
        font-size: 13px;
        color: #666;
        overflow: auto;
        font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
      }
    }
  }

  .button-area {
    padding: 15px;
  }

  .input {
    margin-bottom: 10px;
    padding: 10px 15px;
    width: 100%;
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    background-color: #fff;
    line-height: 1.3;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-color: #e9e8f2;

    &-error {
      border-color: #f22435;
    }
  }

  .button {
    display: inline-block;
    padding: 10px 30px;
    border-radius: 2px;
    border: none;

    &-primary {
      background-color: #2451f2;
      color: #fff;
      fill: #fff;
    }
  }

  .field {
    margin-bottom: 20px;

    & >:last-child {
      margin-bottom: 0;
    }
  }

  .field-label {
    font-weight: 600;
    display: block;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .field-text {
    display: block;
    font-size: 13px;
    margin-bottom: 15px;
    color: #e9e8f2;

    &-danger {
      color: #f22435;
    }
  }
}
</style>
