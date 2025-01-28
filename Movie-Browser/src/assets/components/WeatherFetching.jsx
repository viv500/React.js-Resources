import { useState, useEffect} from 'react'

// REACT COMPONENTS AND FILES NEED TO BE PASCAL CASE, NOT CAMEL CASE


function WeatherFetching() {
    const [error, setError] = useState(null);

    const [data, setData] = useState(null);
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // async cuz we're making an api call, define it as a function
        const fetchData = async () => {
            try {

                // clearing the error log before our asynchronus process
                setError(null);

                setLoading(true);

                // promised api data
                const promise = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`);


                // converting promise to json file (also await)
                const weatherData = await promise.json();


                // finally setting data to weatherData

                setData(weatherData);
                console.log(weatherData)

            } catch(err) {
                console.log(err.message)
                setError(err)
            } finally {
                setLoading(false);
            }
        }

        // call the function
        fetchData();

        // empty dependancy array so component only mounts once
    }, [])

    
    // what to render
    return(
        <div>
            <ul>
                {/**checking that each of these terms exist, and then mapping */}
                {data?.hourly?.temperature_2m?.map((temp, index) => (
                    <li key={index}>Temperature: {temp}</li>
                ))}
            </ul>
        </div>
    )
}


export default WeatherFetching;