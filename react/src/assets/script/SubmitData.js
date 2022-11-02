export const submitData = async (url, method, data, contentType = 'application/json') => {

    const result = await fetch (url, {
        method: method,
        headers:{
        'Content-Type': contentType
        },
        body: data
    })
        console.log(result)

            if (result.status === 200){
            return true
        }

        return false
}