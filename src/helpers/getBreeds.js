//Obtenemos desde la api la lista de razas


const getBreeds = async() =>{
    const url = "https://api.thedogapi.com/v1/breeds"
    //Como es un proceso asincrono hay que usar un await
    const res = await fetch(url)

    if (!res.ok){

        const {url , status ,statusText} = res

        throw Error (`Error: ${status} ${statusText} in fecth ${url}`)
    }
    const breeds = await res.json()

    return breeds;

}


export default getBreeds 
