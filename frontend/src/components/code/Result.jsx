import React from 'react'

function Result({srcCode}) {
    // console.log(srcCode)
    const handleSaveResult = () => {
        console.log(srcCode)
    }
    return (
        <div>
            <div className="bg-[#282c34] p-4 shadow mt-4 rounded-lg">
                <h2
                    className="text-lg font-semibold mb-2 text-white">
                    Result
                </h2>
                <iframe
                    className="w-full h-60 border border-gray-700 rounded-md"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
            <button onClick={handleSaveResult}>
                Save
            </button>
        </div>
    )
}

export default Result