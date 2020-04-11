export async function _checkStatus(response:any){
    if(response.status >= 200 && response.status < 300){
        return response;
    } else {
        console.log("error", await response)
        // let res = await response.json()
        // console.log(res)
        // let error = new Error(res['message']);
        // error.message = res['message'];
        // throw error;
    }
}