export {planetService};
export {planetInfoService};
export {planetDataService};

const API_PLANETS1 = "https://swapi.dev/api/planets/?page=1"
const API_PLANETS2 = "https://swapi.dev/api/planets/?page=2"
const API_PLANETS3 = "https://swapi.dev/api/planets/?page=3"
const API_PLANETS4 = "https://swapi.dev/api/planets/?page=4"
const API_PLANETS5 = "https://swapi.dev/api/planets/?page=5"
const API_PLANETS6 = "https://swapi.dev/api/planets/?page=6"
//const result = JSON.parse(json);
//result.results.push(...json.results);

function planetService(){
    return fetch(`${API_PLANETS1}`)
    .then(response => {
      return response.json()
    })
    .then(planetData => {return planetData});
}


function planetInfoService(){

  return planetService()
    .then(planetData => {
      const results = planetData.results;
      const mappedData = results.map(result => {
        return {
          Name: result.name,
          Climate: result.climate,
          Terrain: result.terrain,
          Population: result.population,
          Diameter: result.diameter
        };
      });
      return mappedData;
    })
  }

function planetDataService(name){

  return planetInfoService()
  .then(planets => {
    const planet = planets.find(item => item.Name === name);
    const planetJSON = JSON.stringify(planet);
    console.log("Info of planet:", planetJSON);

    //return
    addData(planetJSON);
  })
  .then(() => {
      console.log('Planet data added successfully');
  })
  .catch(error => {
      console.error('Error processing planet data:', error);
    //const dataTransfer = addData(planetJSON);
    //console.log(dataTransfer);
  
    //return dataTransfer;
  }


    //return sendDataToBackend(planetJSON);}
  )
  }


  /////////////////////////////  storing in json  
  // Function to fetch data from JSON file
  
  let planetData = [{
    "Name": "Earth",
    "Climate": "Terrestrial",
    "Terrain": "Moderate",
    "Population": "8100000000",
    "Diameter": "12742"
}];

  // Fetch existing data (in this case, just returns the in-memory data)
  function fetchData() {
      console.log("Data currently stored is:", planetData);
      //displayData(planetData);
  }
  
  // Display the current data
  //function displayData(data) {
    //  const currentData = document.getElementById('currentData');
    //  currentData.textContent = JSON.stringify(data, null, 2);}


  
  // Add new data (expects a JSON string as input)
  function addData(jsonString) {
      try {
          const newData = JSON.parse(jsonString);  // Parse the incoming JSON string
          planetData.push(newData);  // Add the new data to the in-memory array
          console.log('Data added successfully:');
          fetchData();  // Update the display
      } catch (error) {
          console.error('Error parsing JSON:', error);
      }
  }


















  /*const sendDataToBackend = (data) => {
    return fetch('/api/planets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
    .then(response => {
      if (response.ok) {
        return response.json(); // console.log(responseData); // Success message from backend Return the JSON data if the request is successful
      } else {
        throw new Error('Failed to send data to backend');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      throw error; // Propagate the error to the caller
    });
  };*/




//function nameService(){
//planetService()
//.then(planetData => {
//    var results = planetData.results;
//    results.forEach(result =>  result.name); })};