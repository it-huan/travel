//获取数据持久化
// let user = localStorage.getItem('user');
let userinfo={ username:'',isLogin:false,token:''} 
// if(user){
//     userinfo = JSON.parse(user)
// }
   
export default {
    namespaced:true,//开启会命名空间
    state:{
        userinfo
    },
    mutations:{
        //设置用户名称
        setUser(state,payload){
            state.userinfo=payload
        },
        //清空用户名称
        deleteUser(state){
            state.userinfo={
                username:'',
                isLogin:false,
                token:''
            }
        }
    },
    actions:{

    }
}