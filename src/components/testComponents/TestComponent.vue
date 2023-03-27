<template>
   <div @click="clickNum(100)">
    {{ data.num }}
  </div>
  <div>
    {{ data.arr }}
  </div>
  <div @click="clickNum1">
    {{ num1 }}
  </div> 
  <div>
    num3={{ num3 }}
    num4={{ num4 }}
    num3 + num4 = {{ sum }}
  </div>
</template>

<script>
  import { defineComponent, ref, reactive, toRefs, computed} from 'vue'
  export default defineComponent({
      name: 'testComponents',
      components: {
      },
      setup(props, ctx){
        // let num = ref(10)
        // let arr = ref(['a','b','c','d'])
        let data = reactive({
          name: 'jack',
          num: 20,
          obj: {
            price: 21
          },
          arr: ['a', 'b', 'c', 'd']
        })

        let num1 = ref(30)

        let clickNum = (val) => {
          console.log(val)
          console.log(data.num)
        }

        let clickNum1 = () => {
          // 访问ref定义的数据，要写数据名.value
          console.log(num1.value)
        }

        let num3 = ref(15)
        let num4 = ref(16)
        let sum = computed(() => {
          // 必须返回一个值
          // 逻辑代码
          
          return num4.value + num3.value
        })

        return{
          // num,
          // arr
          data,
          num1,
          clickNum,
          clickNum1,
          num3,
          num4,
          sum,
        }
      }
  })
</script>

<style scoped lang="scss">

</style>