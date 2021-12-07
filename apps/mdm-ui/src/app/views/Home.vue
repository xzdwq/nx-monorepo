<template>
  <div class="home-wrap">
    <div class="home-title">
      {{ $t('title') }}
    </div>
    <div class="home-name">
      {{ $t('name') }}
    </div>
    <Logo />
    <div v-html="$t('generated')" />
      <span>apiData:</span>
      <pre>
        {{ apiData }}
      </pre>
    <transition name="hide">
      <Cookies v-if="!cookiesAccepted" />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import axios from "axios"

import { useStore } from '@app/store'
import { TestData } from '@multi-app/general-types'

const { cookiesAccepted } = useStore()

let apiData = ref<TestData>()

onBeforeMount( async () => {
  await axios.get<TestData[]>('http://localhost:3333/api/')
  .then(res => {
    apiData.value = res.data
  })
})

</script>

<style lang="postcss">
@import '@assets/css/global.css';

.home-wrap {
  background-color: white;
  @mixin text 16px;
  @mixin flex-center-col;
  height: 100%;
  color: $text-main;

  .home-title {
    @mixin title 40px;
  }
  .home-name {
    @mixin text 24px;
    font-weight: bold;
  }
  img {
    margin: 16px 0;
  }
}

.hide-enter-active,
.hide-leave-active {
  transition: opacity 0.3s linear;
}
.hide-enter-from,
.hide-leave-to {
  opacity: 0;
}
</style>
