<template>
    <h1>Register</h1>
    <div v-if="this.$store.getters.isLoggedIn">
        <h2>You are already logged in. !!</h2>
    </div>
    <div v-else class="form">
        <form @submit.prevent="submit">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
            <router-link to="/login" style="margin-left:2%">Login Instead</router-link>
            </form>
    </div>
    

</template>

<script>
import axios from 'axios'

// const log=console.log;
export default {
    
    data(){
        return{
            email:'',
            password:'',
            error:''
        }
    },
    methods:{
        async submit(){
            
            await axios.post('http://127.0.0.1:3000/register',{
                email:this.email,
                password:this.password               
                
            }).then((res)=>{
                console.log(res)
                this.$store.dispatch('setUser',res.data.user)
                this.$store.dispatch('setToken',res.data.token)
                // alert('Successfully Registered')
                this.$swal({
                    icon:'success',
                    title:'Successfully Registered'
                })

                this.$router.push('/secrets')
            }).catch((error)=>{

                alert(error.response.data.Error)
                
            })
            
        }
    }
}
</script>

<style scoped>
/* h2{
    margin-left: 10%;
    margin-right: 10%;
} */
.form{
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;

}
h1,h2{
    text-align: center;
    font-weight: bold;
    margin-top: 3%;
}
</style>