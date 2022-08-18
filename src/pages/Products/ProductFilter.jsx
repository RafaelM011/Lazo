import React from "react";

const ProductFilter = () => {
    return(
        <>
            <div className="basis-1/4 h-full"> 
                <div className="h-96 w-10/12 mt-10 ml-6 rounded-3xl px-5">
                    <p className="text-end text-black text-lg font-semibold tracking-wider pt-4">FILTER</p>
                    <hr/>
                    <details>
                        <summary className="text-black text-lg font-semibold tracking-wide list-none my-2 hover:cursor-pointer">SIZE</summary>
                        <input className="ml-2 hover:cursor-pointer" type='checkbox'/>1
                        <input className="ml-2 hover:cursor-pointer" type='checkbox'/>2
                    </details>
                    <hr/>
                    <details>
                        <summary className="text-black text-lg font-semibold tracking-wide list-none my-2 hover:cursor-pointer">COLOR</summary>
                        <input className="ml-2 hover:cursor-pointer" type='checkbox'/>Red
                        <input className="ml-2 hover:cursor-pointer" type='checkbox'/>Blue
                    </details>
                    <hr/>
                    <details>
                        <summary className="text-black text-lg font-semibold tracking-wide list-none my-2 hover:cursor-pointer">GENDER</summary>
                        <input className="ml-2 hover:cursor-pointer" type='checkbox'/>Male
                        <input className="ml-2 hover:cursor-pointer" type='checkbox'/>Female
                    </details>
                    <hr/>
                    <hr/>
                </div>
            </div>
        </>
    )
}

export default ProductFilter;