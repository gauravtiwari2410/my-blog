<template>
  <div class="post-list"></div>
  <div v-for="post in posts" :key="post.id">
  <!-- <h1>{{ post.title }}</h1></div> -->
  <SinglePost :post="post" />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import SinglePost from './SinglePost.vue';
export default {
  components: { SinglePost },
props:['posts'],
setup(props){
console.log(props.posts);
onMounted(()=>console.log("component mounted"))
}
}
</script>

<style>

</style>