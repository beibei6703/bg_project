<template>
    <div class="box">
      <img src="../assets/image/err.png" alt="">
    </div>
</template>

<script>
  import router  from '@/router'
  window.onload = function () {
    if (navigator.onLine) {
      router.push({
        path: '/'
      })
    } else {
    }
  };
    export default {
        name: "err",
      data(){
          return{

          }
      },
    }
</script>

<style scoped>
.box{
  width: 100%;

}
.box>img{
  display: block;
  margin:0 auto;
}

</style>
