import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const results = useSelector((state) => state.result.results);

    return (
        <div>
            <h2 className="text-white">Stored Results</h2>
            {results.map((result, index) => (
                <div key={index} className="bg-gray-800 p-4 mt-4 rounded-lg">
                    <iframe
                        className="w-full h-60 border border-gray-700 rounded-md"
                        srcDoc={result}
                        title={`output-${index}`}
                        sandbox="allow-scripts"
                        width="100%"
                        height="100%"
                    ></iframe>
                </div>
            ))}
        </div>
    );
}

export default Home;
