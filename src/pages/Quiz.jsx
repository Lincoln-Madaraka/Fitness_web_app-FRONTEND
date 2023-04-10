import { useState } from "react";
import NameCard from "../components/Quiz/name";
import WeightCard from "../components/Quiz/weight";
import GoalsCard from "../components/Quiz/Goal";
import HeightCard from "../components/Quiz/height";

const Quiz = () =>{

    const [Info, setInfo] = useState({
        name:'',
        height: {
            feet:'',
            inch:''
        },
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

    const setHeight= ()=>{

    }

    const setGoal= (goal)=>{
        setInfo({...Info, goal});
    }

    const options=[
        <NameCard name={Info.name} setName={setName}/>, 
        <WeightCard weight={Info.weight} setWeight={setWeight}/>,
        <HeightCard/>,
        <GoalsCard goal={Info.goal} setGoal={setGoal}/>
    ]

    return (
        <div className="relative bg-white w-full overflow-hidden flex flex-col py-0 px-[137px] box-border items-center justify-center gap-[38px]">
          <div className="self-stretch flex flex-row py-5 px-0 items-center justify-center gap-[38px] lg:self-stretch lg:w-auto">
            
            <button 
            onClick={handlePrev}
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-start justify-start gap-[10px]">
              <img
                className="relative w-4 h-[15.46px] shrink-0 object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <div className="relative text-lg font-semibold font-inter text-royalblue text-left flex items-center w-[76px] h-[21.26px] shrink-0">
                Previous
              </div>
            </button>
            
            <button 
            onClick={handleNext}
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-start justify-end gap-[10px]">
              <div className="self-stretch relative text-lg font-semibold font-inter text-royalblue text-left flex items-center w-[41px] shrink-0">
                Next
              </div>
              <img
                className="relative w-4 h-4 shrink-0 object-cover"
                alt=""
                src="/vector1@2x.png"
              />
            </button>
          
          </div>
          
          <div className="bg-white w-[567px] h-[307px] shrink-0 overflow-hidden flex flex-row items-center justify-center">
            {options[Index]}
          </div>
          
          <button className="cursor-pointer [border:none] py-1.5 px-[65px] bg-royalblue rounded-lg w-[193px] h-[34px] shrink-0 flex flex-row box-border items-end justify-end">
            <b className="relative text-lg font-inter text-white text-left">
              Submit
            </b>
          </button>
        
        </div>
      );

    // return (
    //     <div className="relative bg-white w-full overflow-hidden flex flex-col py-0 px-[137px] box-border items-center justify-center gap-[38px] text-left text-lg text-royalblue font-inter">
          
    //       <div className="self-stretch flex flex-row py-5 px-0 items-center justify-center gap-[38px] lg:self-stretch lg:w-auto">
            
    //         <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
    //           <img
    //             className="relative w-4 h-[15.46px] shrink-0 object-cover"
    //             alt=""
    //             src="/vector@2x.png"
    //           />
    //           <div className="relative font-semibold flex items-center w-[76px] h-[21.26px] shrink-0">
    //             Previous
    //           </div>
    //         </div>
            
    //         <button className="flex-1 flex flex-row items-start justify-end gap-[10px]">
    //           <div className="self-stretch relative font-semibold flex items-center w-[41px] shrink-0">
    //             Next
    //           </div>
    //           <img
    //             className="relative w-4 h-4 shrink-0 object-cover"
    //             alt=""
    //             src="/vector1@2x.png"
    //           />
    //         </button>
          
    //       </div>
          
    //       <div className="bg-white w-[567px] h-[307px] shrink-0 overflow-hidden flex flex-row items-center justify-center">
    //         {options[Index]}
    //       </div>
    //       <button className="cursor-pointer [border:none] py-1.5 px-[65px] bg-royalblue rounded-lg w-[193px] h-[34px] shrink-0 flex flex-row box-border items-end justify-end">
    //         <b className="relative text-lg font-inter text-white text-left">
    //           Submit
    //         </b>
    //       </button>
    //     </div>
    //   );

    // return(
    //     <>
    //         {options[Index]}
    //         <button 
    //         className="cursor-pointer [border:none] p-0 bg-royalblue absolute top-[777px] left-[1104px] rounded-[18px] w-[199px] h-[34px]">
    //         <b className="absolute top-[6px] left-[65px] text-lg font-inter text-white text-left">
    //             Submit
    //         </b>
    //         </button>

    //         <button 
    //         onClick={handlePrev}
    //         className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[678px] left-[151px] w-[199px] h-[34px]">
    //         <div className="absolute top-[6px] left-[45px] text-lg font-semibold font-inter text-royalblue text-left">
    //             Previous
    //         </div>
    //         </button>
            
    //         <button 
    //         onClick={handleNext}
    //         className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[678px] left-[1104px] w-[199px] h-[34px]">
    //         <div className="absolute top-[6px] left-[82px] text-lg font-semibold font-inter text-royalblue text-left">
    //             Next
    //         </div>
    //         </button>
    //     </>
        
    // );
}



export default Quiz;