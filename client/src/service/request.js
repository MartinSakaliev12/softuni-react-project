
async function request(method, url, data, options ={}){
    if(method !== "GET"){
        options.method = method;
    }

    if(data){
        options = {
            ...options,
            headers:{
                "Content-Type": "application/json",
                ...options.headers,
            },
            body:JSON.stringify(data)
        }
    }
    
    try{

        const response = await fetch(url,options)
        
        if(response.status === 204 || response.status > 400){
            console.log("error")
            return response;
        }
        const result = await response.json();
        
        
        return result;
    }catch(err){
        console.log("errr")
    }
}


export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE')
}