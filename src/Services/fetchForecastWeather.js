export const BASE_URL_FC = "https://api.openweathermap.org/data/2.5/forecast?q="
export const API_ID_FC = "&appid=63148e19e12688fc8b4df8eef2fd6b5b&units=metric"

const filter12Data =(array)=>(
  array?.filter((item, key)=>(
    item?.dt_txt?.toLowerCase()?.endsWith("12:00:00")
  ))
) 

  const getForecast = async (city)=>{
    try{
    const data = await fetch(BASE_URL_FC + city + API_ID_FC)
    if(!data.ok){
       throw new Error("Bad network response from server")
    }
    else {
        const jsonData = await data.json()
        const filteredData = filter12Data(jsonData?.list)
        return filteredData
    }
    }
    catch(err){
       
    }
    
}

export default getForecast;