export const LOGIN_SUKSES= "LOGIN_SUKSES"
export const LOGIN_PENDING = "LOGIN_PENDING"
export const LOGIN_ERROR= "LOGIN_ERROR"

export const isloginSukses =(isloginSukses)=>{
    return{
        'type': LOGIN_SUKSES,
        isloginSukses
    }
}

export const isloginPending =(isloginPending)=>{
    return{
        'type': LOGIN_PENDING,
        isloginPending
    }
}

export const isloginError =(isloginError)=>{
    return{
        'type': LOGIN_ERROR,
        isloginError
    }
}
