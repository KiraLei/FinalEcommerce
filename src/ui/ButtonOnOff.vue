<template>
  <div class="btn_on_off">
    <ul class="tg-list">
      <li class="tg-list-item">
        <input class="tgl tgl-light" id="cb1" type="checkbox" />
        <label class="tgl-btn" for="cb1"></label>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "ButtonOnOff",
};
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.tg-list {
  text-align: center;
  display: flex;
  align-items: center;
}
.tg-list-item {
  margin: 0 2em;
}
.tgl {
  display: none;
}
.tgl,
.tgl:after,
.tgl:before,
.tgl *,
.tgl *:after,
.tgl *:before,
.tgl + .tgl-btn {
  box-sizing: border-box;
}
.tgl::selection,
.tgl:after::selection,
.tgl:before::selection,
.tgl *::selection,
.tgl *:after::selection,
.tgl *:before::selection,
.tgl + .tgl-btn::selection {
  background: none;
}
.tgl + .tgl-btn {
  outline: 0;
  display: block;
  width: 40px;
  height: 22px;
  position: relative;
  cursor: pointer;
  user-select: none;
}
.tgl + .tgl-btn:after,
.tgl + .tgl-btn:before {
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
}
.tgl + .tgl-btn:after {
  left: 0;
}
.tgl + .tgl-btn:before {
  display: none;
}
.tgl:checked + .tgl-btn:after {
  left: 50%;
}
.tgl-light + .tgl-btn {
  background: #f0f0f0;
  border-radius: 2em;
  padding: 2px;
  transition: all 0.4s ease;
}
.tgl-light + .tgl-btn:after {
  border-radius: 50%;
  background: #fff;
  transition: all 0.2s ease;
}
.tgl-light:checked + .tgl-btn {
  background: #5640ff;
}
</style>