import { useMemo ,useState } from "react";
import React from 'react'
import Loader from './Loader'
const ShowCardForm = ({
  productId,
  googlePosition,
  googleFlexShrink,
  googleTop,
  googleLeft,
}) => {
const formStyle = useMemo(() => {
    return {
      position: googlePosition,
      flexShrink: googleFlexShrink,
      top: googleTop,
      left: googleLeft,
    };
}, [googlePosition, googleFlexShrink, googleTop, googleLeft]);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [token, setToken] = useState(null); // state to store the JWT token
const [loading , setLoading] = useState(false) 

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const res = await fetch("https://fitnesswebapp-backend-production.up.railway.app/users/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });
//   // handle response here
// };

const handleSubmit=async(event)=> {
  event.preventDefault(); // prevent default form submission
  // setLoading(true)
  async function registerUser() {
    setLoading(true);
    try {
      const response = await fetch(
        'https://fitnesswebapp-backend-production.up.railway.app/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email,password}),
        }
      );

      const data = await response.json();
      // Store the JWT token in the browser's local storage
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setLoading(false)
      const storedToken = localStorage.getItem('token');
      console.log(data);
    } catch (error) {
      console.error(error);
      setLoading(false )
    }
  }

  registerUser();
}


  return (
      <>
        <form className="flex-1 relative w-[370px]" style={formStyle} onSubmit={handleSubmit}>
      <div className="absolute top-[10.5px] left-[0px] w-[370px] h-[87px]">
        <label className="absolute top-[0px] left-[0px] text-sm leading-[21px] font-semibold font-roboto text-gray-800 text-left">
          Email or phone
        </label>
        <input
        onChange={(e)=>{setEmail(e.target.value)}}
          className="bg-[transparent] absolute top-[28px] left-[0px] rounded box-border w-[370px] h-[59px] border-[1px] border-solid border-gray-800"
          type="text"
        />
      </div>

      <div className="absolute top-[111.5px] left-[0px] w-[370px] h-[101px] flex flex-col items-start justify-start gap-[9px]">
        <label className="relative text-smi leading-[21px] font-semibold font-roboto text-gray-800 text-left">
          Password
        </label>
        <input
          onChange={(e)=>{setPassword(e.target.value)}}
          className="font-semibold font-roboto text-base bg-[transparent] self-stretch relative rounded box-border h-[59px] shrink-0 border-[1px] border-solid border-gray-800"
          type="password"
        />
      </div>

      <a className="[text-decoration:none] absolute top-[236.5px] left-[0px] text-base leading-[20px] font-semibold font-roboto text-dodgerblue text-left flex items-center w-[129.22px] h-[25px]">
        Forgot password?
      </a>

      <button type="submit" className="cursor-pointer [border:none] p-0 bg-dodgerblue absolute top-[283.5px] left-[calc(50%_-_185px)] rounded-3xl w-[363px] h-[51px]">
        <div className="absolute top-[13px] left-[175.06px] text-base font-semibold font-roboto text-white text-center flex items-center justify-center w-[50.08px] h-[25px]">
          Sign in
        </div>
      </button>

      <div className="absolute top-[342.5px] left-[-19px] w-[389px] h-[55px]">
        <div className="absolute top-[calc(50%_-_4.5px)] left-[0px] bg-gray-700 w-[181.78px] h-px" />
        <div className="absolute top-[15px] left-[197.78px] text-smi leading-[21px] font-roboto text-gray-600 text-center flex items-center justify-center w-[12.65px] h-[22px]">
          or
        </div>
        <div className="absolute top-[calc(50%_-_4.5px)] left-[226px] bg-gray-700 w-[182px] h-px" />
      </div>
      
      <button className="cursor-pointer p-0 bg-white absolute top-[403.5px] left-[0px] rounded-xl box-border w-[363px] h-10 overflow-hidden border-[1px] border-solid border-gainsboro-100">
        <div className="absolute top-[11px] left-[165.92px] text-sm tracking-[0.25px] font-medium font-inter text-darkslategray text-center">{`Google Login `}</div>
        <img
          className="absolute h-[45%] w-[4.52%] top-[27.5%] right-[62.71%] bottom-[27.5%] left-[32.77%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={productId}
        />
      </button>
     
      <button className="cursor-pointer [border:none] p-0 bg-gray-900 absolute top-[459.5px] left-[0px] rounded-3xl shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.75)] w-[363px] h-12 overflow-hidden">
        <a
          className="absolute top-[11px] left-[106.17px] text-base leading-[24px] font-semibold font-roboto text-gray-800 text-center flex items-center justify-center w-[195.84px] h-[25px] [text-decoration:none]"
          href="/form"
        >
          New to BeFit? Join now
        </a>
      </button>
    </form>
    {loading && <Loader/>}
      </>
  );
};

export default ShowCardForm;

// const ShowCardForm = ({
//   productId,
//   googlePosition,
//   googleFlexShrink,
//   googleTop,
//   googleLeft,
// }) => {
//   const formStyle = useMemo(() => {
//     return {
//       position: googlePosition,
//       flexShrink: googleFlexShrink,
//       top: googleTop,
//       left: googleLeft,
//     };
//   }, [googlePosition, googleFlexShrink, googleTop, googleLeft]);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     console.log(email , password)
//     e.preventDefault();
//     const res = await fetch("https://fitnesswebapp-backend-production.up.railway.app/users/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email:email, password:password }),
//     });
//     // handle response here
//   };

//   return (
//     <form className="flex-1 relative w-[370px]" style={formStyle} onSubmit={handleSubmit}>
//       <div className="absolute top-[10.5px] left-[0px] w-[370px] h-[87px]">
//         <label className="absolute top-[0px] left-[0px] text-sm leading-[21px] font-semibold font-roboto text-gray-800 text-left">
//           Email or phone
//         </label>
//         <input
//           className="bg-[transparent] absolute top-[28px] left-[0px] rounded box-border w-[370px] h-[59px] border-[1px] border-solid border-gray-800"
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="absolute top-[111.5px] left-[0px] w-[370px] h-[101px] flex flex-col items-start justify-start gap-[9px]">
//         <label className="relative text-smi leading-[21px] font-semibold font-roboto text-gray-800 text-left">
//           Password
//         </label>
//         <input
//           className="font-semibold font-roboto text-base bg-[transparent] self-stretch relative rounded box-border h-[59px] shrink-0 border-[1px] border-solid border-gray-800"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>

//       <a className="[text-decoration:none] absolute top-[236.5px] left-[0px] text-base leading-[20px] font-semibold font-roboto text-dodgerblue text-left flex items-center w-[129.22px] h-[25px]">
//         Forgot password?
//       </a>

//       <button className="cursor-pointer [border:none] p-0 bg-dodgerblue absolute top-[283.5px] left-[calc(50%_-_185px)] rounded-3xl w-[363px] h-[51px]" type="submit">
//         <div className="absolute top-[13px] left-[175.06px] text-base font-semibold font-roboto text-white text-center flex items-center justify-center w-[50.08px] h-[25px]">
//           Sign in
//         </div>
//      </button>
//       </form>
//   );
// }

// export default ShowCardForm;