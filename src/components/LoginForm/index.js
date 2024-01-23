/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {NavLink,Navigate} from 'react-router-dom'
import OTPInput, { ResendOTP } from "otp-input-react";
import PhoneNumberValidation from '../PhoneNumberValidation'
import OTPValidation from '../OTPValidation';
import Dashboard from '../Dashboard';
// import './index.css'

const LoginForm=()=>{
  
    const [status,setStatus]=useState('LOGIN')
    const [OTP, setOTP] = useState("");
    const [dashboard,setDashboard]=useState(false)

    const onClickGetOtp=()=>{
        setStatus("VERIFY")
    }
    
    const onClickVerify=()=>{
        setStatus("SUCCESS")
    }

    const onClickContinue=()=>{
        setDashboard(true)
    }


    const renderLogin=()=>(
        <div className='flex flex-col items-center justify-between min-h-90vh w-[900px]'>
            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593222/Logo_ftx3tl.svg" alt="dooper img" className='dooperImg'/>
                <div className='flex flex-col justify-center items-center text-center'>
                    <a className='text-[30px] font-weight-700 text-[#1A1C1F]'>Welcome</a>
                    <a className='text-[16px] font-weight-400 text-[#1A1C1F] mt-10'>Welcome to <span className='text-E40443'>DOOPER</span>, please enter your details</a>
                    <div className='flex flex-col items-start'> 
                        <label className='text-[#8D98A4] text-[13px] mb-5'>Phone Number</label>
                        {<PhoneNumberValidation/>}
                        <button className='bg-[#E40443] text-[white] p-10 w-[300px] border-none rounded-md text-[15px] mt-10 h-[20px] cursor-pointer' onClick={onClickGetOtp}>Send OTP</button>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center -ml-2.5'>
                        <input type='checkbox' className='h-[18px] w-[18px] mr-[13px]'/>
                        <p className='agree'>By signing up you agree to <span className='text-[#E40443]'>Terms of use</span></p>
                    </div>
                    <div className='flex items-center -ml-2.5'>
                        <input type='checkbox' className='h-[18px] w-[18px] mr-[13px]'/>
                        <p>By signing up you agree to <span className='text-[#E40443]'>Marketing condition</span></p>
                    </div>
                </div>
                <p className='text-[#5B6576] text-lg font-normal text-center w-4/5 self-center'>Join the community of smart and experienced doctors.
                 Login to access your personalized dashboard,
                 track your record or process and get informed by our services</p>
        </div>
    )
    
    const inputStyles={
        height:40,
        width:60,
        borderRadius:8,
        placeHolder:'-',
        borderWidth:0.8,
        borderColor:"#E3E6E8",
        marginTop:20,
        marginRight:6,
        marginLeft:6,
        marginBottom:10,
    }
    const places=["-","-","-","-"]

    const renderVerify=()=>(
            <div className='flex flex-col items-center justify-between min-h-[90vh] w-[900px]'>
                <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593222/Logo_ftx3tl.svg" alt="dooper img" className='dooperImg'/>
                <div className='flex flex-col items-center text-center w-[500px]'>
                    <a className='text-3xl font-bold text-[#1A1C1F]'>Verify</a>
                    <a className='text-base font-normal text-[#1A1C1F] mt-2.5'>Enter OTP which we sent to you</a>
                    <OTPValidation/>
                    <button className='bg-[#E40443] text-white w-[90%] text-[15px] h-10 cursor-pointer mt-[10PX] p-2.5 rounded-lg border-[none]' onClick={onClickVerify}>Verify OTP</button>
                </div>
                <p className='text-[#5B6576] text-lg font-normal text-center w-4/5 self-center'>Join the community of smart and experienced doctors.
                     Login to access your personalized dashboard,
                     track your record or process and get informed by our services
                </p>
            </div>
    )

    const renderSuccess=()=>(
        <div className='min-h-[90vh] flex flex-col items-center justify-start w-[900px]'>
            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593222/Logo_ftx3tl.svg" alt="dooper img" className='dooperImg'/>
            <div className='flex flex-col justify-between items-center text-center mt-[100px]'>
                <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695027900/Group_tubb6n.png" alt="successful img"/>
                <a className='text-3xl font-bold text-[#1A1C1F] mt-5'>Successful</a>
                <a className='text-base font-medium text-[#1A1C1F] mt-2.5'>OTP Is verified successfully, Start your work as pharmacy</a>
                <button className='bg-[#FCE6EC] text-[#E40443] w-[400px] text-[15px] h-10 cursor-pointer mt-[20PX] mt-10 p-2.5 rounded-lg border-[none]' onClick={onClickContinue}><NavLink className="text-decoration-none text-E40443 font-weight-500" to="/dashboard">Continue</NavLink></button>
            </div>
        </div>
    )

    const renderReview=()=>(
        <div className='min-h-[90vh] flex flex-col items-center justify-start w-[900px]'>
            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593222/Logo_ftx3tl.svg" alt="dooper img" className='dooperImg'/>
            <div className='flex flex-col justify-center items-center text-center justify-self-center w-[410px] text-center mt-[150px]'>
                <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695039440/Frame_htzijd.png" alt="review img"/>
                <a className='text-3xl font-bold text-[#1A1C1F] mt-5'>Profile Under Review</a>
                <a className='text-base font-medium text-[#1A1C1F] mt-2.5'>You profile is under review, which will be shown if the sign-up is completed.</a>
            </div>
        </div>
    )



    const renderResult=()=>{
        switch (status) {
            case "LOGIN":
                return renderLogin()
            case "VERIFY":
               return renderVerify()
            case  "SUCCESS":
                return renderSuccess()
            case "REVIEW":
                return renderReview()
            default:
                return null;
        }
}



   return (
        <div className='overflow-hidden'>
            {dashboard? <Navigate to="/dashboard" />: <div className="flex justify-between items-center min-h-screen bg-white p-10 w-full overflow-hidden">
            <div className="flex flex-col justify-evenly bg-[#B60336] w-[600px] min-h-[89vh]  px-[45px] py-[15px] rounded-2xl">
                <p className='text-[white] text-[16px] font-weight-600 font-Montserrat leading-17.6'>DOOPER</p>
                <div className='flex flex-col justify-start items-start w-full md:w-[85px] flex-wrap flex-shrink-1'>
                    <h1 className='text-[white] text-[40px] font-weight-700 leading-54'>Start your journey with us</h1>
                    <p className='text-white text-[28px] font-weight-400 leading-38.4 font-Montserrat mt-[15]'>Discover the world's best community of doctors and DHAs</p>
                </div>
                <div className='rounded-md bg-white p-15 mr-20'>
                    <p className='text-[#1A1C1F] text-[16px]'>Simply unbelievable! I am really satisfied with the doctor
                    who treated me. This is absolutely wonderful!</p>
                    <div className='flex items-center'>
                        <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694709052/rating_img.png" alt="rating" className='ratingImg'/>
                        <div>
                            <p className='font-weight-500 text-black '>Timson K</p>
                            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1694713305/stars_c00urb.png" alt="stars" className='stars'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between p-20 min-w-full md:min-w-[50%]">
                {renderResult()}
           </div>
        </div>}
        </div>
    )
}

export default LoginForm