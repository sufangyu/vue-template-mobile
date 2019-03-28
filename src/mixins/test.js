const testMixins = {
  data() {
    return {
      queryTest: null,
    };
  },
  created() {
    const { query } = this.$route;
    this.queryTest = query || {};
    console.log('mixins queryTest =>>', this.queryTest);
  },
  methods: {
    customFn() {
      console.log('mixins customFn');
    },
  },
};

export default testMixins;
