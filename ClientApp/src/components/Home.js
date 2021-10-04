import React, { useState, useEffect } from 'react'

export default function () {
    const [myData, setMyData] = useState(null);

    useEffect(() => {
        async function getData() {
            const resp = await fetch('mydata');
            const data = await resp.json();
            setMyData(data);
            console.log('Mydata ::: ', myData)
        }
        getData();
    }, []);

    return <div className="persons-container">
        <h3>This is the api rendered data</h3>
        {!myData && <div>Loading ... </div>}
        {!!myData && (
            <div className="persons">
                {myData.map(person => (
                    <div className="person" key={person.email}>
                        <label htmlFor="name">Name</label>
                        <span name="name">{person.name}</span>

                        <label htmlFor="email">Name</label>
                        <span name="email" >{person.email}</span>
                    </div>
                )
                )}
            </div>
        )}
    </div>
}