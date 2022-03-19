<template>
  <div class="form">
        <h1>Edit Secret</h1>
        <form @submit.prevent="update">
            <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title" v-model="title">
            </div>

            
            
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Body</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" v-model="body"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Update</button>

        </form>
    </div>
    <h1>Id:{{id}}</h1>
</template>

<script>
export default {
    
    created(){
        
        this.Set_title_and_body()
    
    },
    props:['id'],
    data(){
        return{
            title:'',
            body:''
        }
    },
    methods:{
        Set_title_and_body()
        {
            const ret=this.$store.getters.getNotebyId(this.id)
            this.title=ret.title
            this.body=ret.body
        },
        async update(){
            try {
                const body={
                    idd:this.id,
                    title:this.title,
                    body:this.body
                }
                await this.$store.dispatch('editNote',body)
                // alert('Updated Successfully')
                this.$swal({
                    icon:'success',
                    title:'Successfully Updated'
                })
                this.$router.push('/secrets')
            } catch (er) {
                console.log(er)
            }
        }
    }

}
</script>

<style scoped> 
.form{
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 5%;

}
</style>