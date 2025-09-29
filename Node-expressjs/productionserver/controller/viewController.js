
exports.GetPostData=async(req,res)=>{
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        res.json(data)
    }catch(e){
        console.log(e)
    }
}