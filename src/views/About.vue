<template>
  <div class="about">
    <h1>This is an about page</h1>
    <BaseInput :label="'monlabel'" :placeholder="'coucou'"/>
  </div>
</template>
<script>
import BaseInput from "@/components/base/BaseInput.vue";
export default {
  components: {
    BaseInput,
  },
};
</script>
