<template>
  <!-- <div>
   <test-components></test-components>
  </div> 
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div> -->
  <button @click="goto">跳转路由</button>
</template>

<script>
  import TestComponents from '@/components/testComponents/TestComponent.vue'
  import NavHeader from '@/components/navHeader/NavHeader.vue'
  import NavMain from '@/components/navMain/NavMain.vue'
  import NavFooter from '@/components/navFooter/NavFooter.vue'
  import { defineComponent, ref, reactive, toRefs, computed} from 'vue'
  import { useStore } from 'vuex'
  import { useRouter, useRoute } from 'vue-router'
  export default defineComponent({
      name: 'Home',
      components: {
        NavHeader,
        NavMain,
        NavFooter,
        TestComponents
      },
      setup(props, ctx){
        // router是全局路由对象
        let router = useRouter()
        // route是当前路由对象
        let route = useRoute()
        // query传递过来的参数都是字符串的类型
        console.log(route.params)
        let goto = () => {
          // 跳转路由,
          // push函数里面可以传入跳转的路径
         // router.push('/about')
          router.push({
            path: '/about'
          })
        }
      //   let store = useStore()
      //  // console.log(store)
      //  let list = computed(() => {
      //   return store.state.list
      //  })
        return{
        //  list
        goto
        }
      }
  })
</script>

<style scoped lang="scss">

</style>