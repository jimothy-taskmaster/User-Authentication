<template>
    <h1>Login</h1>
    <div class="form">
        
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            </div>
            
            <button type="submit" class="btn btn-primary">Login</button>
            <router-link to="/register" style="margin-left:2%">Register Instead</router-link>
            </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            email:'',
            password:''
            
        }
    },
    methods:{
        async login(){
            
            await axios.post('http://127.0.0.1:3000/login',{
                email:this.email,
                password:this.password               
                
            }).then((res)=>{
                console.log(res)
                this.$store.dispatch('setUser',res.data.user)
                this.$store.dispatch('setToken',res.data.token)
                // alert('Successfully Logged In')
                 this.$swal({
                    icon:'success',
                    title:'Successfully Logged In'
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
.form{
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;

}
h1{
    text-align: center;
    font-weight: bold;
    margin-top: 3%;
}

</style>