/* eslint-disable jsx-a11y/anchor-is-valid */
import './index.css'
import {NavLink} from 'react-router-dom'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {RiNotification3Line} from 'react-icons/ri'
import {HiPhone} from 'react-icons/hi'



const Header=()=>(
    <div className="NavContainer">
        <div className='bg-white flex justify-between items-center w-screen h-[125px] box-border pl-[60px] pr-[38px] pt-[38px] pb-[30px] border-b-[#E1E5E8] border-b border-solid'>
        <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593222/Logo_ftx3tl.svg" alt="header" className="w-[123.538px] h-9 shrink-0" />
        <div className="flex items-center justify-self-center">
            <a className='text-[#8D98A4] text-sm font-medium leading-[16.24px] tracking-normal text-left ml-6'>Dooper At Home</a>
            <a className='text-[#8D98A4] text-sm font-medium leading-[16.24px] tracking-normal text-left ml-6'>Lab Tests</a>
            <div className='flex items-center justify-self-center'>
                <a className='text-[#8D98A4] text-sm font-medium leading-[16.24px] tracking-normal text-left ml-6'>Our Network</a>
                <a className='text-[11px] text-[#8D98A4] cursor-pointer mr-6 mt-1.5'><AiOutlineCaretDown/></a>
            </div>
            <a className='text-[#8D98A4] text-sm font-medium leading-[16.24px] tracking-normal text-left ml-6'>About Us</a>
            <a className='text-[#8D98A4] text-sm font-medium leading-[16.24px] tracking-normal text-left ml-6'>Contact Us</a>
            <div className='flex items-center justify-self-center'>
                <a className='text-[#8D98A4] text-sm font-medium leading-[16.24px] tracking-normal text-left ml-6'>Join Us</a>
                <a className='text-[11px] text-[#8D98A4] cursor-pointer mr-6 mt-1.5'><AiOutlineCaretDown/></a>
            </div>
            <div className='bg-[#F5F6F7] h-[30px] flex justify-center items-center min-w-[30px] text-[rgb(45,43,43)] font-normal cursor-pointer mr-5 p-[5px] rounded-[7px]'>
            <NavLink to="/profile" className="visited:no-underline bg-[white]"><img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593168/Rectangle_619_z0cubg.svg" alt="profile img" className="no-underline bg-transparent"/></NavLink>
                <NavLink to="/profile" className='text-sm font-medium no-underline min-w-[120px] ml-2.5 visited:bg-inherit visited:text-[black]'>Jaydip Sakhiya</NavLink>
                <a className='text-[11px] text-[#262728] cursor-pointer ml-2 mt-1.5'><AiOutlineCaretDown/></a>
            </div>

            <div className='bg-[#F5F6F7] h-[30px] flex justify-center items-center min-w-[30px] text-[rgb(45,43,43)] font-normal cursor-pointer mr-5 p-[5px] rounded-[7px]'>
                <NavLink to="/notifications"><RiNotification3Line/></NavLink>
            </div>
            <div className='iconContainer'>
                <HiPhone/>
            </div>
        </div>
        
    </div>
    </div>
)


export default Header;