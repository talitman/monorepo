<template>
  <div class="home">hey</div>
</template>

<script lang="ts">
import { Channel } from "@channel-x/vue-channel";

export default {
  setup() {
    const { msg } = Channel.use("items").consumer;
    return { msg };
  },
};
</script>

<style scoped>
.home {
  background: tan;
}
</style>
