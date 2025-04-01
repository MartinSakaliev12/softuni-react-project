import request from "../service/request"
const baseUrl = "http://localhost:3030/data/likes";


export function useCreateLikesUser(){
    const createLikesUser =async(email,accessToken) =>{
        const options ={
            headers:{
                "X-Authorization":accessToken
            }
        }
        const response = await request.post(baseUrl,{email,liked:[]},options)
        return response
    }
    return {
        createLikesUser
    }
}


export function useLike(){
    const like =async(accessToken,likedUserId,data)=>{
        const options ={
            headers:{
                "X-Authorization":accessToken
            }
        }
        const response = await request.put(`${baseUrl}/${likedUserId}`,data,options)
        return response
    }
    return {
        like
    }
}

export function useFindUserLikes(){
    const findUserLikes =async(email)=>{
        const searchParams = new URLSearchParams({
            where: `email="${email}"`
        })
        const response = await request.get(`${baseUrl}?${searchParams.toString()}`)
        return response
    }
    return{
        findUserLikes
    }
}