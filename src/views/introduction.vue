<template>
  <section>
    <div class="x-ui">
      <h1>X-UI</h1>
      <p class="caption">
        X-UI 是一套适用于 PC
        端的组件库。除以下提及到的库之外，没有引入其他的第三方库用于编写源代码。
      </p>
      <div class="icon-wrapper">
        <div class="vue-wrapper">
          <svg class="vue-icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h2 class="lib">基于 Vue3</h2>
          <p class="text">使用 Vue3 构建项目</p>
        </div>
        <div class="ts-wrapper">
          <svg class="ts-icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h2 class="lib">基于 TypeScript</h2>
          <p class="text">使用 TypeScript 编写源代码</p>
        </div>
        <div class="sass-wrapper">
          <svg class="sass-icon">
            <use xlink:href="#icon-sass"></use>
          </svg>
          <h2 class="lib">基于 Sass</h2>
          <p class="text">使用 Sass 编写样式</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.x-ui {
  font-size: 14px;
  font-weight: 400;
  line-height: 36px;
  & h1 {
    // font-size: 30px;
    margin: 20px 0;
  }
  & .caption {
    font-size: 16px;
    margin-bottom: 80px;
  }

  & .icon-wrapper {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    & .ts-wrapper,
    & .vue-wrapper,
    & .sass-wrapper {
      //   border: 1px solid blue;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      width: 33.3333333%;
      padding: 0 32px;

      //   & .lib {
      //     padding: 8px 0;
      //   }
      & .text {
        white-space: nowrap;
        font-size: 16px;
      }
      & .vue-icon,
      & .ts-icon,
      & .sass-icon {
        height: 80px;
        width: 80px;
      }
    }
  }
}
</style>
