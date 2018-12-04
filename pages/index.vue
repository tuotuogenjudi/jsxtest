<template>
  <section class="container">
    <el-row>
      <el-tree
        :data="data4"
        show-checkbox
        node-key="id"
        :render-content="renderContent"
        :expand-on-click-node="false"
        default-expand-all>
      </el-tree>
    </el-row>
  </section>
</template>

<script>
let id = 1000;

export default {
  components: {
  },
  data() {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1',
        }, {
          id: 10,
          label: '三级 1-1-2',
        }]
      }],
    }];
    return {
      data4: JSON.parse(JSON.stringify(data)),
    };
  },
  methods: {
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>哈哈哈</span>
          <span>
            <el-button size="mini" type="text">Append</el-button>
            <el-button size="mini" type="text">Delete</el-button>
          </span>
        </span>);
    },
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
