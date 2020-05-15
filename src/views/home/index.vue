<template>
  <a-card :bordered="false">
    <a-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
      <a-form-model-item>
        <a-input v-model="formInline.user" placeholder="Username">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-input v-model="formInline.password" type="password" placeholder="Password">
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" html-type="submit" :disabled="formInline.user === '' || formInline.password === ''">
          Log in
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      formInline: {}
    }
  },
  methods: {
    handleSubmit(e) {
      console.log(e)
    }
  },
  created() {
    // this.$loading.show()
  }
}
</script>

<style lang="less" scoped>

</style>
