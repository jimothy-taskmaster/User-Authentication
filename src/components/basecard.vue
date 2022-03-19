<template>
    

    <div class="card border-dark" >
        
        <div class="card-body">
            <h3 class="card-title">{{title}}</h3>
            
            
            <p class="card-text">{{text}}</p>
            
            
            
            <router-link class="btn btn-link" :to="{name:'edit',params:{id:_id}}">Edit</router-link>
            <router-link class="btn btn-link" :to="{name:'readmore',params:{id:_id}}"> Read More</router-link>
            
            <button type="button" class="btn btn-link" @click="$emit('deleteNote')">Delete</button>
        </div>
        
    </div>
</template>

<script>
export default {
    props:['title','body','_id'],
    computed:{
        text(){
            let n=Math.min(this.body.length,50);
            let text=this.body.slice(0,n);
            return text
            
        }
    }
}
</script>

<style scoped>
.card{
    margin-left:12%;
    margin-right: 12%;
    margin-bottom: 2%;
}
.card-text,
.card-title
{
    /* height: 50px;
    width: 50px; */
    overflow: hidden;
    
}
</style>