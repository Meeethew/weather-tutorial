export const WeatherTile = ({ weatherType, minTemp, maxTemp}) => {
    return (
        <div className='weatherTile'>
            <div>Type: {weatherType}</div>
            <div>Temp: {minTemp} / {maxTemp}</div>
        </div>
    )
}