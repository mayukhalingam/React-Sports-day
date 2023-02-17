export const FetchEventData = () => {
    return fetch("https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a")
    .then(
      (response) => {
        if(response.ok === true){
          return response.json()
        }
        else{
            throw new Error("Invalid Response");
        }
      }
    )
} 