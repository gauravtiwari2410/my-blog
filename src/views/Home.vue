
<template>
<div class="home">
  <!-- <h1 ref="p">May name is {{ name }} and age is {{ age }}</h1>
  <h1>May name is {{ name }} and age is {{ age }}</h1> 
  <button @click="handleButton">click me</button>
  <button @click="age++">add 1 to age</button>
  <input type="text" v-model="name">
  <h1>Home</h1>
  <h2>Refs</h2>
  <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
  <button @click="updateNinjaOne">update ninja one</button>
  <h2>Reactive</h2>
  <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
  <button @click="updateNinjaTwo">update ninja two</button> -->
  <h1>Home</h1>
  <p></p>
  <postList v-if="showPost" :posts="posts"/>
  <button @click="showPost = !showPost">toggle post</button>
</div>
</template>

<script>
import {ref,reactive} from "vue"
import PostList from '@/components/PostList.vue';

export default {
  components: { PostList },
  name: 'Home',
  data(){
    return{
      age:50
    }
  },
  setup(){
    console.log("set up...");
        const posts = ref([{title:'welcome to the blog',body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur dolorum ab corrupti voluptates explicabo aut animi accusantium, adipisci ipsam optio est saepe facilis, recusandae ea, laborum architecto minima doloremque expedita ducimus quaerat illum reprehenderit. Adipisci ex modi, praesentium similique tempora ut unde soluta veniam necessitatibus ab accusamus voluptatibus voluptatem excepturi rerum nihil iste eius consectetur nam at sequi, placeat error autem animi. Consectetur, dolor nostrum itaque minus at ducimus earum similique cupiditate aliquam ipsum unde excepturi culpa maiores quisquam blanditiis alias est nihil aut quasi deserunt magni facere quas in autem? Architecto ex repudiandae ipsum officia eligendi eveniet quo!',id:1},
                    {title:'top 5 css tips',body:'lorem ipsum',id:2}
                    ])
                    const showPost =ref(true)
        return {posts,showPost}            
        // return {names,
    // const p =ref(null)
    // let name="mario";
    // let age =30;
    // let name =ref("mario");// now this is converted to reactive value
    // let age =ref(30);
    // let ninjaOne=ref({name:"mario",age:30});
    // const ninjaTwo = reactive({name:"james",age:35})
    // const handleButton =()=>{
    //   name.value="Glenn"
    //   console.log("you clicked me...")
    //   console.log(p,p.value);
    //   p.value.classList.add("test")
    //   p.value.textContent = "hello, ninjas"
    // }
    // return{name1:name,age1:age};

    // const updateNinjaOne = () =>{
    //   ninjaOne.value.age = 40;
    // }
    // const updateNinjaTwo = () =>{
    //   ninjaTwo.age = 45;
    // }
    // return{name,age,handleButton};
    // return{ninjaOne,updateNinjaOne,ninjaTwo,updateNinjaTwo};
  },
  created(){
    console.log("created...");
  },
  mounted(){
    console.log("mounted...");
  }
}
</script>
