import React, { useState } from "react";
import {faqDataSet} from "./Data/faqData";

export default function Faqs(){
    let [showAns,setShowAns] = useState(faqDataSet[0].id);

    return(
    <div>
        <div>
            <h1 className="bg-gray-700 font-bold p-5 mb-5 text-white text-center rounded-md">Frequently Asked Question (FAQs)</h1>
            <div className="">
                
              {faqDataSet.map((faqDataItem,i)=>{
                return(
                    
                   <div className="border-2 mb-2">
                    <h2 onClick={()=>setShowAns(faqDataItem.id)} className="m-0 cursor-pointer p-5 text-lg bg-neutral-800 pl-8  shadow-black shadow-outer shadow-md rounded-full text-white text-left">{i+1}. {faqDataItem.question}</h2>     
                    <p className={showAns===faqDataItem.id ? 'left-6 text-left duration-500 text-white bg-[#7f57dc] pl-8 rounded-full pt-5 pb-5':'h-0 scale-y-0'}>Ans: {faqDataItem.answer}</p> 
                   </div>
                )
              })}

            </div>
        </div>
     </div>
    )
}