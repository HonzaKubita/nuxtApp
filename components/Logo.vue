<template>
<div 
  class="logo"
  :style="{
    maskImage: `url(/logo-black.svg)`,
  }"
></div>
</template>


<style scoped>

.logo {
  width: 512px;
  height: 128px;

  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-origin: content-box;

  /* webkit */
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-origin: content-box;

  /* default background color */
  background-color: #000000;
}

</style>