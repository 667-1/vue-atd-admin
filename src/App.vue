<template>
  <a-config-provider>
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script>
import { AppDeviceEnquire } from '@/utils/mixin'

export default {
  mixins: [AppDeviceEnquire]
}
</script>
