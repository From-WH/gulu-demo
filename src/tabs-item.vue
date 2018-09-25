<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name:'GuluTabsItem',
    inject:['eventBus'],
    props:{
      desabled:{
        type:Boolean,
        default:false
      },
      name:{
        type: String | Number,
        require:true
      }
    },
    created(){
      this.eventBus.$on('update:selected',(name)=>{
        console.log(name);
      })
      console.log('爷爷给孙子的');
    },

    methods:{
      xxx(){
        this.eventBus.$emit('update:selected',this.name)

      }
    }
  }
</script>

<style lang="scss" scoped></style>