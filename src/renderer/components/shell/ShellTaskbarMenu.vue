<template>
  <div class="shell-taskbar-menu">
    <div class="apps">
      <div class="app">
        <Icon class="mr-3" name="widgets" />
        Google Chrome
      </div>
      <div class="app">
        <Icon class="mr-3" name="widgets" />
        Google Chrome
      </div>
      <div class="app">
        <Icon class="mr-3" name="widgets" />
        Google Chrome
      </div>
      <div class="app">
        <Icon class="mr-3" name="widgets" />
        Google Chrome
      </div>
      <div class="app">
        <Icon class="mr-3" name="g_translate" />
        Google Chrome
      </div>
    </div>
    <div class="search">
      <b-form-input placeholder="Поиск" size="sm" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$padding: 10px;
$width: 300px;

.shell-taskbar-menu {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #111;
  border-bottom: 0;
  bottom: calc(100% + 1px);
  left: 0;
  position: absolute;
  width: $width;

  .apps {
    display: flex;
    flex-direction: column;

    .app {
      align-items: center;
      display: flex;
      padding: $padding;
      transition: background $transition-duration;

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }

  .search {
    padding: $padding;
  }
}
</style>