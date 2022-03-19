import { createStore } from "vuex";
import axios from "axios";


const store=createStore({
    state(){
        return{
            user:null,
            token:null,
            secret:[]
        }
        
    },
    getters:{
        
        isLoggedIn(state)
        {
            if(state.token!=null)
            {
                return true
            }
            return false
        },
        token(state)
        {
            return state.token
        },
        hasSecret(state)
        {
            if(state.secret.length===0) return false
            return true
        },
        secret(state)
        {
            return state.secret
        },
        getNotebyId:(state)=> (idd)=>{
            return state.secret.find(s => s._id===idd);
        },
        
        
    },
    mutations:{
        setUser(state,payload)
        {
            state.user=payload
            console.log('New State user:' ,state.user)
        },
        setToken(state,payload)
        {
            state.token=payload
            console.log('New State token:' ,state.token)
        },
        logOut(state)
        {
            state.token=null
        },
        setSecret(state,payload)
        {
            console.log('payload is:',payload)
            state.secret=payload
        },
        dummy()
        {
            console.log('Working fine')
        }
    },
    actions:{
        
        setUser(context,payload){
            context.commit('setUser',payload)
        },
        setToken(context,payload){
            context.commit('setToken',payload)
        },
        async getAll({commit,state})
        {
            const head={
                'Authorization':'Bearer ' + state.token
            }
            console.log(head)
            await axios.get('http://127.0.0.1:3000/secrets',{
                headers:head
            }).then((res)=>{
                console.log('Response Data', res.data)
                // commit('dummy')
                commit('setSecret',res.data)
                // this.secret=res.data
                // console.log('Response Data', res.data)
                // this.secret=r
            }).catch((err)=>{
                console.log('error h bhai',err.response)
            })
        },
        async add({dispatch,state},payload){
            const body={
                title:payload.title,
                body:payload.body
            }
            const head={
                'Authorization':'Bearer ' + state.token
            }
            // console.log(this.$store.getters.token)
            // console.log(head.Authorization)
            await axios.post('http://127.0.0.1:3000/secrets',body,{
                headers:head
            }).then(()=>{
                // this.title=''
                // this.body=''
                // console.log(body)
                // this.secret.push(body)
                // alert('Added new secret')
                // console.log(res)
                // console.log(this.secret.length)
                dispatch('getAll')
            }).catch((err)=>{
                console.log(err.response)
            })
        },
        async deleteNote({dispatch,state},_id){
            const head={
                'Authorization':'Bearer ' + state.token
            }
            const url='http://127.0.0.1:3000/secrets/' + _id.toString()
            await axios.delete(url,{
                headers:head
            }).then((res)=>{
                // alert('Response Data',res)
                console.log(res)
                dispatch('getAll')
            }).catch((err)=>{
                console.log(err.response)
            })
        },
        async editNote({state},payload){
            const url='http://127.0.0.1:3000/secrets/' + payload.idd.toString()
            const head={
                'Authorization':'Bearer ' + state.token
            }
            const body={
                title:payload.title,
                body:payload.body
            }
            await axios.patch(url,body,{
                headers:head
            }).then((res)=>{

                console.log(res)
            }).catch((er)=>{
                console.log(er.response)
            })
        }
        

        
    }
})

export default store