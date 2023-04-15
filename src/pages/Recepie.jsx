import { useState, useEffect } from 'react';
import Loader from '../components/Loader';

/**
 * A React component that allows users to search for low carb recipes based on a specified ingredient and maximum calorie intake.
 * The component fetches data from an external API and displays it in a responsive UI. 
 */

const Recepie = () => {
  const [data, setData] = useState(''); //this is the state where all the data from food api is stored 
  const [name, setName] = useState('');
  const [loader, setLoader] = useState(false);
  const [maxCalorie, setMaxCalorie] = useState('');

  const API = import.meta.env.VITE_API;
  
  useEffect(()=>{
    console.log(data);
  },[data])

  function getData(e) {
    e.preventDefault();
    setLoader(true);
    const url = `https://low-carb-recipes.p.rapidapi.com/search?name=${name}&maxCalories=${maxCalorie}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API,
        'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com',
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setLoader(false);
        setData(json);
      })
      .catch((err) => {
        console.error('error:' + err);
        setLoader(false)
      });
  }

   
  return (
    <div className='relative bg-white w-full overflow-hidden flex flex-col py-[100px] px-[157px] box-border items-center justify-center'>
      <div className='self-stretch flex flex-col items-center justify-start gap-[15px]'>
        <form
          onSubmit={getData}
          className='w-[321px] flex flex-col pt-1.5 px-0 pb-3 box-border items-center justify-center gap-[18px]'
        >
          <input
            className='bg-white self-stretch rounded-3xl box-border h-[70px] shrink-0 flex flex-row py-2.5 px-[15px] items-start justify-start border-[1px] border-solid border-gainsboro-300'
            type='text'
            placeholder='Search for ingredient'
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='bg-white self-stretch rounded-3xl box-border h-[70px] shrink-0 flex flex-row py-2.5 px-[15px] items-start justify-start border-[1px] border-solid border-gainsboro-300'
            type='text'
            placeholder='Search by Maximum Calorie you can intake'
            required
            onChange={(e) => setMaxCalorie(e.target.value)}
          />
          <button className='cursor-pointer py-1 px-[18px] bg-whitesmoke-100 self-stretch rounded-[15px] box-border h-[70px] shrink-0 flex flex-row items-center justify-center gap-[10px] border-[1px] border-solid border-whitesmoke-100 lg:hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
            <img
              className='relative w-[14.58px] h-[14.58px] shrink-0 object-cover'
              alt=''
              src='/vector@2x.png'
            />
            <div className='relative text-sm leading-[27px] font-roboto text-darkslategray text-center'>
              Recipe Search
            </div>
          </button>
        </form>
        <img
          className='relative w-[272px] h-[202.67px] shrink-0 object-cover'
          alt=''
          src='/recepie/eating.png'
        />
      </div>
      {loader && <Loader/>}
    </div>
  );
};

export default Recepie;
