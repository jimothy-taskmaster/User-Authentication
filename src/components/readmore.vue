<template>
    <h1>This is Read More</h1>
    <h1>{{title}} {{id}}</h1>

    <p>{{body}}</p>
</template>

<script>
export default {
    props:['id'],
    computed:{
        title(){
            const ret=this.$store.getters.getNotebyId(this.id)
            console.log(ret)
            return ret.title
        },
        body(){
            const ret=this.$store.getters.getNotebyId(this.id)
            // console.log(ret)
            return ret.body
        }
    }
    
    
}
</script>


<style scoped>
h1{
  text-align: center; 
  
  margin-top: 2%; 
  margin-bottom: 2%;
  margin-left: 2%;
  margin-right: 2%;
  border: 3px solid black;
}
p{
    text-align: center;
    border: 2px solid black;
    margin-left: 2%;
    margin-right: 2%;
}
</style>