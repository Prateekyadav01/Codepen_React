import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteResult } from './redux/resultSlice';
import Left from './Left';
// import { deleteResult } from '../redux/resultSlice';

const Home = () => {
    const results = useSelector((state) => state.result.results);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        return () => {
            dispatch(deleteResult(index));
        }
    }
    
    return (
       <div className='flex'>
        <Left/>
         <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-white">Stored Results</h2>
            {results.length === 0 ? (
                <p className="text-gray-400">No results stored yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {results.map((result, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <iframe
                                className="w-full h-60 border border-gray-700 rounded-md mb-4"
                                srcDoc={result}
                                title={`output-${index}`}
                                sandbox="allow-scripts"
                                width="100%"
                                height="100%"
                            ></iframe>
                            <button 
                                onClick={handleDelete(index)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
       </div>
    );
}

export default Home;
