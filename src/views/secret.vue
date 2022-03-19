<template>
    <div class="form">
        <h1>Your Secrets</h1>
        <form @submit.prevent="add">
            <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title" v-model="title">
            </div>

            
            
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Body</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" v-model="body"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Add</button>

        </form>
    </div>
    
    <div v-if="!$store.getters.hasSecret">
        <h1>You have no secrets</h1>
    </div>
    <div v-else>

        <div v-for="s in secret" :key="s._id" >

            <base-card :title=s.title :body=s.body :_id=s._id  @delete-note="DeleteNote(s._id) "> </base-card>

        </div>

    </div>
    

    
</template>

<script>
// import axios from 'axios'
export default {
    data(){
        return{
            title:'',
            body:'',
            // secret:[]
        }
    },
    computed:{
        secret(){
            return this.$store.getters.secret
        }
    },
    created(){
        this.$store.dispatch('getAll')
    }
    ,
    methods:{
        async add(){
            const payload={
                title:this.title,
                body:this.body
            }
            try {
                await this.$store.dispatch('add',payload);    
                this.title=''
                this.body=''
                this.$swal({
                    icon:'success',
                    title:'Successfully Added'
                })
            } catch (e) {
                console.log(e)
            }
            
        },
        
        async DeleteNote(_id)
        {
            // console.log('Note Id is:',_id)
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                    if (result.isConfirmed) {
                        this.$store.dispatch('deleteNote',_id)
                        this.$swal({
                            icon:'success',
                            title:'Successfully Deleted'
                        })
                    }
            })
            
            
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
#temp{
    border:2px solid black
}
h1{
    text-align: center;
    font-weight: bold;
    margin-top: 2%;
}
.card-group{
    margin-left: 5.95%;
    margin-right: 5%;
}
</style>