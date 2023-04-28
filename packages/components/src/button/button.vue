<template>
  <Button class="d-button" :class="buttonStyle" :size="buttonProps.size">
    <slot />
  </Button>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
import { Button } from 'vant';
import type { ButtonSize } from 'vant';
defineOptions({ name: 'd-button' });
type ButtonProps = {
  type?: string;
  size?: ButtonSize;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`d-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
