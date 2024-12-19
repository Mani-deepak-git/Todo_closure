fetchData().then(data=>process(data))
.then(result=> save(result))
.then(()=>console.log('Done!'))
.catch(error => console.error(error));