import React from 'react';
import { useDispatch } from 'react-redux';
import { saveResult } from '../redux/resultSlice';

function Result({ srcCode }) {
    const dispatch = useDispatch();

    const handleSaveResult = () => {
        console.log(srcCode);
        dispatch(saveResult(srcCode));
    };

    return (
        <div>
            <div className="bg-[#282c34] p-4 shadow mt-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2 text-white">
                    Result
                </h2>
                <iframe
                    className="w-full h-60 border border-gray-700 rounded-md"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                ></iframe>
            </div>
            <button onClick={handleSaveResult} className="bg-blue-500 text-white p-2 mt-2 rounded">
                Save
            </button>
        </div>
    );
}

export default Result;
