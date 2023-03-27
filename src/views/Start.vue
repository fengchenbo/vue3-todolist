<template>
    <!-- 开始页 -->
    <div>
        <button @click="start">开始任务</button>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    name: 'Start',
    setup(){
        let router = useRouter()
        let name = ref('jack')
        let num = ref(10)
        let obj = ref({
            msg: 'start'
        })
        let start = () => {
            //push 如果是传的对象的形式，就可以传递参数
            //query传参
            router.push({
                //query传参path和name都可以
                //params传参只能用name(路由中对应的name)
               path: '/home',
              //  name: 'Home',
                query: {
                    name: name.value,
                    num: num.value,
                    obj: JSON.stringify(obj)
                }
                // params: {
                //     name: name.value,
                //     num: num.value,
                //     obj: JSON.stringify(obj)
                // },
            })
        }
        return {
            start
        }
    }
})
</script>