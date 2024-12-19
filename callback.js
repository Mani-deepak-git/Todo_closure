function fetchData(callback){
   setTimeout(()=>{
    callback('Data recieved');
   },1000);
    
}
fetchData(data =>{console.log(data)});
// function fetchData(data){
//  process((data,result)=>{
//     save(result,()=>{
//         console.log('Done!');
//     })
//  })
// }+
 
//  fetchData(data =>{console.log(data)});