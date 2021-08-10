<template>
  <div class="document">
    <TopNav />
    <div class="content">
      <aside>
        <h2>组件</h2>
        <ol>
          <li>
            <router-link to="/components/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/components/modal">Modal 对话框</router-link>
          </li>
          <li>
            <router-link to="/components/tabs">Tabs 标签页</router-link>
          </li>
          <li>
            <router-link to="/components/switch">Switch 开关</router-link>
          </li>
        </ol>
      </aside>
      <main><router-view></router-view></main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
$main-color: #42b983;
.document {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  > .content {
    display: flex;
    flex-grow: 1;
    aside {
      // width: 150px;
      // padding: 16px;
      // > h2 {
      // 	margin-bottom: 4px;
      // }
      // > ol {
      // 	> li {
      // 		padding: 4px 0;
      // 		margin-left: 8px;
      // 	}
      // }
      // @media (max-width: 500px) {
      // 	position: fixed;
      // 	top: 0;
      // 	left: 0;
      // 	padding-top: 80px;
      // }
      border-right: 1px solid #eeeeee;
      margin-right: 32px;

      > h2 {
        font-size: 20px;
        padding: 48px 16px 6px 30px;
      }
      > ol {
        min-width: 12em;
        margin-left: 12px;
        > li > a {
          font-size: 14px;
          height: 40px;
          padding: 4px 16px 4px 30px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: rgba(0, 0, 0, 0.75);

          &:hover {
            color: $main-color;
          }
          &.router-link-active {
            color: $main-color;
            border-right: 1px solid $main-color;
            background: rgba($main-color, 0.15);
          }
        }
      }
    }
    main {
      flex-grow: 1;
      padding: 16px;
      font-size: 16px;
    }
  }
}
</style>
