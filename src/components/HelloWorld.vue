<template>
  <div>
    <h1>这里是返回结果</h1>
    <div>
      <!-- 这里已经完成了双向绑定 -->
      <!-- 用户输入的page与num，可以通过send方法传递HTTP请求 -->
      <label>
        <span>页码：</span>
        <input type="text" v-model="index" />
      </label>
      <label>
        <span>数量：</span>
        <input type="text" v-model="size" />
      </label>
      <!-- 这里有事件的绑定 -->
      <button type="button" @click="getData()">提交</button>
    </div>
    <pre v-html="JSON.stringify(list, null, 4)"></pre>
  </div>
</template>

<script>
import axios from "axios";
import request from "@/http/request";
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [],
      size: 5,
      index: 1
    };
  },
  created() {
    this.getData();
  },

  methods: {
    getData() {
      axios
        .get("api/list", { params: { size: this.size, index: this.index } })
        .then(response => {
          let data = response.data.data;
          this.list = data;
        });
    }
  }
};
</script>
<style >
</style>
