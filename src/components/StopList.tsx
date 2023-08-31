import React, {useEffect, useState} from "react";

interface StopListProps {
    latitude: number;
    longitude: number;
}

interface StopPoint {
    naptanId: string;
    commonName: string;
    distance: number;
}

interface StopPointsResponse {
    stopPoints: StopPoint [];
}

export const StopList: React.FC<StopListProps> = ({latitude, longitude}) => {
    const [stops, setStops] = useState<any[]>();
    const radius = 1000;

    useEffect(
        () => {
            fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${latitude}&lon=${longitude}&stopTypes=NaptanPublicBusCoachTram&radius=${radius}`)
            .then(response => response.json())
            .then(result => setStops((result as StopPointsResponse).stopPoints));
        },
        [latitude, longitude]
    );

    if (stops === undefined) {
        return <p>Loading Stops...</p>
    }

    return (
        <ul>
            {stops.map(stop => <li key={stop.naptanId}>{stop.naptanId}: {stop.commonName}</li>)}
        </ul>
    )

}