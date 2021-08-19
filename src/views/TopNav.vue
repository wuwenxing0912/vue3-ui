<template>
  <div class="top-nav">
    <div class="logo">
      <svg class="vue-icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <span class="text">X-UI</span>
    </div>
    <div className="gh">
      <a href="https://github.com/wuwenxing0912/vue3-ui" target="blank">
        <svg class="gh-icon">
          <use xlink:href="#icon-github"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.top-nav {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  position: relative;
  // z-index: 10;
  box-shadow: 0 2px 5px rgb(0 0 0 / 16%);

  > .logo {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 32px;
    > .vue-icon {
      width: 1.5em;
      height: 1.5em;
    }
    > .text {
      margin-left: 6px;
    }
  }

  & .gh .gh-icon {
    width: 1.5em;
    height: 1.5em;
    display: inline-block;
    margin-right: 32px;
    cursor: pointer;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 20px;
    }
  }

  // > .toggleAside {
  // 	display: none;
  // 	width: 24px;
  // 	height: 24px;
  // 	background: grey;
  // 	position: absolute;
  // 	left: 16px;
  // 	top: 50%;
  // 	transform: translateY(-50%);
  // 	cursor: pointer;
  // }

  // @media (max-width: 500px) {
  // 	& {
  // 		justify-content: center;
  // 	}
  // 	> .menu {
  // 		display: none;
  // 	}
  // 	> .toggleAside {
  // 		display: inline-block;
  // 	}
  // }
}
</style>
