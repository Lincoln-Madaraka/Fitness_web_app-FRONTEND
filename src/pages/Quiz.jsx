import { useState } from "react";
import NameCard from "../components/Quiz/name";
import WeightCard from "../components/Quiz/weight";

const Quiz = () =>{

    const [Info, setInfo] = useState({
        name:'',
        height: '',
        weight: '',
        allergies: [],
        goal:''
    });

    const [Index, setIndex] = useState(0);


    const handleNext= () =>{
        if(Index < options.length-1)
            setIndex(Index + 1);
        console.log(Info);
    }

    const handlePrev= () =>{
        if(Index > 0)
            setIndex(Index - 1);
    }

    const setName = (name) =>{
        setInfo({...Info, name});
    }

    const setWeight = (weight) =>{
        setInfo({...Info, weight});
    }

    const options=[
        <NameCard name={Info.name} setName={setName}/>, 
        <WeightCard weight={Info.weight} setWeight={setWeight}/>
    ]



    return(
        <>
            {options[Index]}
            <button 
            className="cursor-pointer [border:none] p-0 bg-royalblue absolute top-[777px] left-[1104px] rounded-[18px] w-[199px] h-[34px]">
            <b className="absolute top-[6px] left-[65px] text-lg font-inter text-white text-left">
                Submit
            </b>
            </button>

            <button 
            onClick={handlePrev}
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[678px] left-[151px] w-[199px] h-[34px]">
            <div className="absolute top-[6px] left-[45px] text-lg font-semibold font-inter text-royalblue text-left">
                Previous
            </div>
            </button>
            
            <button 
            onClick={handleNext}
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[678px] left-[1104px] w-[199px] h-[34px]">
            <div className="absolute top-[6px] left-[82px] text-lg font-semibold font-inter text-royalblue text-left">
                Next
            </div>
            </button>
        </>
        
    );
}

export default Quiz;