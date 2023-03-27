<template>
  <!-- <div>
   <test-components></test-components>
  </div> -->
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div> 
  <button @click="goto">跳转路由</button>
</template>

<script>
  import TestComponents from '@/components/testComponents/TestComponent.vue'
  import NavHeader from '@/components/navHeader/NavHeader.vue'
  import NavMain from '@/components/navMain/NavMain.vue'
  import NavFooter from '@/components/navFooter/NavFooter.vue'
  import { defineComponent, ref, computed } from 'vue'
  import { useStore } from 'vuex'
  export default defineComponent({
      name: 'Home',
      components: {
        NavHeader,
        NavMain,
        NavFooter,
        TestComponents
      },
      setup(props, ctx){
        let store = useStore()
        let list = computed(() => {
          return store.state.list
        })
        let value = ref('')

        // 添加任务
        let add = (val) => {
          value.value = val
          let flag = true
          list.value.map(item => {
            if(item.title === value.value){
              flag = false
              alert('任务已存在')
            }
          })
          if(flag){
            // 调用mutation
          store.commit('addTodo',{
            title: value.value,
            complete: false
          })
          }
        }

        // 删除任务
        let del = (val) => {
          store.commit('delTodo', val)
        }

        //清除已完成
        let clear = (val) => {
          store.commit('clear',val)
        }
        return {
          value,
          add,
          list,
          del,
          clear
        }
      }
  })
</script>

<style scoped lang="scss">

</style>