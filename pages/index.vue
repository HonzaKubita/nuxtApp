<script setup lang="ts">

const customCursorX = ref(0);
const customCursorY = ref(0);

function updateCustomCursor(e: MouseEvent) {
  customCursorX.value = e.clientX - 10;
  customCursorY.value = e.clientY - 10;
}

onMounted(() => {
  window.addEventListener('mousemove', updateCustomCursor);
});
onUnmounted(() => {
  window.removeEventListener('mousemove', updateCustomCursor);
});

</script>

<template>
<div class="index-page">
  
  <Logo class="logo" />
  
  <div class="background"></div>

  <div 
    class="custom-cursor"
    :style="{ left: customCursorX + 'px', top: customCursorY + 'px' }"
  ></div>

</div>
</template>

<style scoped>

.index-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo {
  width: 50%;
  
  transition: all 0.21s;

  z-index: 2;
}

.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000000;
  pointer-events: none;
  z-index: 9999;

  transition: background-color 0.21s;
  transition: transform 0.21s;
}

.background {
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100vw;
  height: 100vh;

  z-index: 1;

  background-color: #ffffff;
  transition: all 0.21s;
}

.logo:hover {
  background-color: #ffffff;
}

.logo:hover ~ .background {
  background-color: #000000;
}

.logo:hover ~ .custom-cursor {
  background-color: #ffffff;
  transform: scale(1.5);
}
</style>