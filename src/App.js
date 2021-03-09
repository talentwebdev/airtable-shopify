import React from 'react';
import { base } from 'common/lib/airtable';

function App() {
    const [locations, setLocations] = React.useState([]);

    const customerName = window.customerName;

    React.useEffect(() => {
        // fetch airtable data
        base('Job Leads')
            .select({
                maxRecords: 3,
                view: 'All Positions',
                filterByFormula: `{Company}='${
                    window.customerName || 'Tim De Vries'
                }'`
            })
            .eachPage((records, fetchNextPage) => {
                // read location info for each record

                const locations = records.map((record) =>
                    record.get('Location')
                );

                setLocations(locations);

                // fetch next page
                fetchNextPage();
            });
    }, []);
    return (
        <div className="App">
            <h1>{customerName}'s Locations</h1>
            {locations.map((location) => (
                <h2 key={location}>{location}</h2>
            ))}
        </div>
    );
}

export default App;
