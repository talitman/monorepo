<template>
  <div class="devtools-container">
    <Tabs :items="tabs" />
  </div>
</template>
<script lang="ts" setup>
import { Channel } from "@channel-x/core-channel";
import { ref } from "vue";
import Tabs from "./internal/modules/tabs/Tabs.vue";
const tabs = ref([{}]);
Channel.innerUse("devtool").consume((data) => {
  setTimeout(() => {
    tabs.value = [
      { type: "Components", content: data.devtools },
      { type: "Channels", content: data.devtools },
      { type: "Broker", content: data.devtools },
    ];
  }, 0);
});
</script>

<style scoped>
.devtools-container {
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
}
</style>
