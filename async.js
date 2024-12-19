async function handleData() {
try {
    const data=await fetchData();
    const result=await process(data);
    await save(result);
} catch (error) {
    console.error(error)
}    
}
handleData();