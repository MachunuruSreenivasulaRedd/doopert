/* eslint-disable jsx-a11y/alt-text */
import React ,{Component} from 'react'
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { IoMdInformationCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import './index.css'
import Header from '../Header'

class Profile extends Component {
  state={selectedSection:""}

  renderEdit = () => {
    this.setState({selectedSection: "BasicDetails"})
  }
  renderProfile = () => (
    <div className="flex min-h-screen items-center flex-col justify-center bg-[#f4f4f4] -mt-5">
      <div className="gap-4 w-full flex items-start shrink-0 flex-col bg-[#f4f4f4] pt-0 pb-12 px-[120px] ml-[60px]">
        <div className="gap-2 flex self-stretch items-center shrink-0 pt-6 pb-2 px-0">
          <span className="text-[color:var(--dl-color-grey-grey01)] h-auto grow text-left leading-8 HeadingHeading04">
            <span className='text-[28px] ml-[30px]'>My Profile</span>
          </span>
        </div>
        <div className="flex items-start flex-col bg-white -mt-5 p-[38px] rounded-2xl">
          <div className="gap-4 w-[390px] flex relative items-center shrink-0 pt-3 pb-5 px-0;">
            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593168/Rectangle_619_z0cubg.svg" alt="Ellipse22278" className="w-[60px] h-[60px] object-cover rounded-[40px]" />
            <button className="ml-[-33px] flex z-[1] items-center justify-center mt-[25px] p-1.5 rounded-[80px] border-[none]" type="button" onClick={()=>this.renderEdit()}>
            <MdOutlineModeEdit className='bg-[green] text-[white] w-5 h-5 -ml-2.5 mt-2.5 p-1.5 rounded-[40px]'/>
            </button>
            <div className="gap-1 w-[286px] flex z-[2] grow items-start shrink-0 flex-col">
              <div className="gap-2 flex self-stretch items-center shrink-0">
                <span className="text-[color:var(--dl-color-grey-grey01)] h-auto text-left leading-[115.99999666213989%] SmallSemiBold">
                 Jaydip Sakhiya
                </span>
              </div>
              <span className="text-[color:var(--dl-color-grey-grey03)] h-auto self-stretch text-left leading-[115.99999666213989%] SmallMedium">
                <span>Balance : 2000INR</span>
              </span>
            </div>
            <div className="-ml-8 gap-2 flex z-[3] items-center justify-center bg-[color:var(--dl-color-grey-grey10)] p-1 rounded-3xl">
              <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703160277/Arrow_Line_Down_jycfvv.png" className="w-5 h-5"/>
            </div>
          </div>
          <div className="gap-4 w-[390px] flex items-center shrink-0 px-0 py-5 border-[rgba(238,240,243,1)] border-solid border-[1px_0]">
          <FaUserAlt />
            <span className="maincontent-text06 NormalMedium">
              <span>Edit Profile</span>
            </span>
            <div className="maincontent-ic1">
            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703160277/Arrow_Line_Down_jycfvv.png" className="w-5 h-5"  onClick={()=>this.renderEdit()}/>
            </div>
          </div>
          <div className="text-[color:var(--dl-color-grey-grey01)] h-auto grow text-left leading-[110.00000238418579%]">
          <FaWallet />
            <span className="text-[color:var(--dl-color-grey-grey01)] h-auto grow text-left leading-[110.00000238418579%] NormalMedium">
              <span>My Earnings</span>
            </span>
            <div className="gap-2 flex items-center justify-center bg-[color:var(--dl-color-grey-grey10)] p-1 rounded-3xl">
            <NavLink to="/myearnings"><img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703160277/Arrow_Line_Down_jycfvv.png" className="w-5 h-5"/></NavLink>
            </div>
          </div>
          <div className="gap-4 w-[390px] flex items-center shrink-0 px-0 py-5 border-[rgba(238,240,243,1)] border-solid border-[0_0_1px]">
          <FaPhoneAlt />
            <span className="text-[color:var(--dl-color-grey-grey01)] h-auto grow text-left leading-[110.00000238418579%] NormalMedium">
              <span>Contact Us</span>
            </span>
            <div className="gap-2 flex items-center justify-center bg-[color:var(--dl-color-grey-grey10)] p-1 rounded-3xl">
            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703160277/Arrow_Line_Down_jycfvv.png" className="w-5 h-5"/>
            </div>
          </div>
          <div className="gap-4 w-[390px] flex items-center shrink-0 px-0 py-5 border-[rgba(238,240,243,1)] border-solid border-[0_0_1px]">
         <MdPrivacyTip/>
            <span className="text-[color:var(--dl-color-grey-grey01)] h-auto grow text-left leading-[110.00000238418579%] NormalMedium">
              <span>Privacy Policy</span>
            </span>
            <div className="gap-2 flex items-center justify-center bg-[color:var(--dl-color-grey-grey10)] p-1 rounded-3xl">
            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703160277/Arrow_Line_Down_jycfvv.png" className="w-5 h-5"/>
            </div>
          </div>
          <div className="gap-4 w-[390px] flex items-center shrink-0 px-0 py-5 border-[rgba(238,240,243,1)] border-solid border-[0_0_1px]">
          <RiPagesFill />
            <span className="text-[color:var(--dl-color-grey-grey01)] h-auto grow text-left leading-[110.00000238418579%] NormalMedium">
              <span>Terms &amp; Conditions</span>
            </span>
            <div className="gap-2 flex items-center justify-center bg-[color:var(--dl-color-grey-grey10)] p-1 rounded-3xl">
            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703160277/Arrow_Line_Down_jycfvv.png" className="w-5 h-5"/>
            </div>
          </div>
          <div className="gap-4 w-[390px] flex items-center shrink-0 px-0 py-5 border-[rgba(238,240,243,1)] border-solid border-[0_0_1px]">
          <IoMdInformationCircle/>
            <span className="text-[color:var(--dl-color-grey-grey01)] h-auto grow text-left leading-[110.00000238418579%] NormalMedium">
              <span>About Us</span>
            </span>
            <div className="gap-2 flex items-center justify-center bg-[color:var(--dl-color-grey-grey10)] p-1 rounded-3xl">
            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703160277/Arrow_Line_Down_jycfvv.png" className="w-5 h-5"/>
            </div>
          </div>
          <div className="gap-4 w-[390px] flex items-center shrink-0 px-0 py-5 border-[rgba(238,240,243,1)] border-solid border-[0_0_1px]">
           <FaStar />
            <span className="text-[color:var(--dl-color-grey-grey01)] h-auto grow text-left leading-[110.00000238418579%] NormalMedium">
              <span>Rate Us</span>
            </span>
            <div className="gap-2 flex items-center justify-center bg-[color:var(--dl-color-grey-grey10)] p-1 rounded-3xl">
            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703160277/Arrow_Line_Down_jycfvv.png" className="w-5 h-5"/>
            </div>
          </div>
          <div className="gap-4 w-[390px] flex items-center shrink-0 px-0 py-5 border-[rgba(238,240,243,1)] border-solid border-[0_0_1px]">
          <RiLogoutCircleRFill />
            <span className="text-[color:var(--dl-color-grey-grey01)] h-auto grow text-left leading-[110.00000238418579%] NormalMedium">
              <span>Logout</span>
            </span>
            <div className="gap-2 flex items-center justify-center bg-[color:var(--dl-color-grey-grey10)] p-1 rounded-3xl">
            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703160277/Arrow_Line_Down_jycfvv.png" className="w-5 h-5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  onClickSelectSection = section => {
    this.setState({selectedSection: section})
  }

  onBasicDetailsSubmit =() => {
    this.setState({selectedSection: "MyAssociation"})
  }

  onDocumentsSubmit =() =>{
    this.setState({selectedSection: "BankInfo"})
  }
  renderBasicDetails = () => {
   return(
    <form className='formContainer'>
      <div className='flex flex-col justify-between m-2.5'>
      <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='name'>Full name</label>
        <input type="text" id="name" />
      </div>
      <div className='flex flex-col justify-between m-2.5'>
      <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='number'>Mobile number</label>
        <input type="integer" id="number" className='bg-[#f4f4f4] bg-[#F8F8F8]' />
      </div>
      <div className='flex flex-col justify-between m-2.5'>
      <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='photo'>Pharmacy photo</label>
        <span><input type="file" id="photo" className='text-transparent cursor-pointer w-[420px] border-2 border-solid border-[#EEF0F3]'/>
        <TbEdit className='absolute w-6 h-6 ml-[-50px] text-[#4B465C] p-2.5'/>
        </span>
      </div>
      <div className='flex flex-col justify-between m-2.5'>
      <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='PharName'>Pharmacy Name</label>
        <input type="text" id="PharName" />
      </div>
      <div className='flex flex-col justify-between m-2.5'>
      <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='PharAddress'>Pharmacy Address</label>
        <input type="text" id="mb-3" />
        <input type="text" id="mb-3"/>
        <input type="text" id="mb-3" />
      </div>
      <button type="submit" className='w-[136px] h-11 text-base gap-3 bg-[#41B079] text-[white] font-semibold ml-[25px] pl-6 pr-[24px,] py-[0px,] rounded-lg' onClick={()=>this.onBasicDetailsSubmit()}>Save Details</button>
      
    </form>
   )
  }

  renderMyAssociation = () => {
   return(
    <form className='bg-white pl-[90px] p-[25px]'>
      <div className='flex flex-col justify-between m-2.5'>
      <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='HosName'>Hospital Name</label>
        <input type="text" id="HosName" className='bg-[#f4f4f4] bg-[#F8F8F8]'/>
      </div>
      <div className='flex flex-col justify-between m-2.5'>
      <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='HosAddress'>Hospital Address*</label>
        <input type="text" id="mb-3" className='bg-[#f4f4f4] bg-[#F8F8F8]'/>
        <input type="text" id="mb-3" className='bg-[#f4f4f4] bg-[#F8F8F8]'/>
        <input type="text" id="mb-3" className='bg-[#f4f4f4] bg-[#F8F8F8]'/>
        <input type="text" id="mb-3" className='bg-[#f4f4f4] bg-[#F8F8F8]'/>
      </div>
      </form>
   )
  }

  renderBankInfo =() => {
   return(
    <form className='formContainer'>
    <div className='flex flex-col justify-between m-2.5'>
    <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='BankNAme'>Bank Name</label>
      <input type="text" id="BankName" />
    </div>
    <div className='flex flex-col justify-between m-2.5'>
    <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2'  htmlFor='AccNumber'>Account Number</label>
      <input type="integer" id="AccNumber" />
    </div>
    <div className='flex flex-col justify-between m-2.5'>
    <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='IFSCcode'>IFSC code</label>
      <input type="integer" id="IFSCcode" />
    </div>
    <div className='flex flex-col justify-between m-2.5'>
    <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='BnkStmt'>upload bank statement/cancel cheque</label>
      <span><input type="file" id="BnkStmt" className='text-transparent cursor-pointer w-[420px] border-2 border-solid border-[#EEF0F3]'/>
      <TbEdit className='absolute w-6 h-6 ml-[-50px] text-[#4B465C] p-2.5'/>
      </span>
    </div>
    </form>
   )
  }

  renderDocuments =()=>{
    return(
      <form className='formContainer'>
      <div className='flex flex-col justify-between m-2.5'>
      <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2'  htmlFor='photo'>Pharmacy photo</label>
        <span><input type="file" id="photo" className='text-transparent cursor-pointer w-[420px] border-2 border-solid border-[#EEF0F3]'/>
        <TbEdit className='absolute w-6 h-6 ml-[-50px] text-[#4B465C] p-2.5'/>
      </span>
      </div>
      <div className='flex flex-col justify-between m-2.5'>
      <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='photo'>Pharmacy photo</label>
        <span><input type="file" id="photo" className='text-transparent cursor-pointer w-[420px] border-2 border-solid border-[#EEF0F3]'/>
        <TbEdit className='absolute w-6 h-6 ml-[-50px] text-[#4B465C] p-2.5'/>
      </span>
      </div>

      <div className='flex flex-col justify-between m-2.5'>
      <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2' htmlFor='photo'>Pharmacy photo</label>
        <span><input type="file" id="photo" className='text-transparent cursor-pointer w-[420px] border-2 border-solid border-[#EEF0F3]'/>
        <TbEdit className='absolute w-6 h-6 ml-[-50px] text-[#4B465C] p-2.5'/>
      </span>
      </div>

      <div className='flex flex-col justify-between m-2.5'>
      <label className=' text-[color:var(--Grey-Grey-04,#8D98A4)] text-xs not-italic font-medium leading-[116%] pb-2'  htmlFor='photo'>Pharmacy photo</label>
        <span><input type="file" id="photo" className='text-transparent cursor-pointer w-[420px] border-2 border-solid border-[#EEF0F3]'/>
        </span>
      </div>
      <button type="submit" className='w-[136px] h-11 text-base gap-3 bg-[#41B079] text-[white] font-semibold ml-[25px] pl-6 pr-[24px,] py-[0px,] rounded-lg' onClick={()=>this.onDocumentsSubmit()}>Save Details</button>
      </form>
    )
  }

  renderEditSections=()=>{
    const {selectedSection}=this.state

     switch (selectedSection) {
        case "BasicDetails":
            return this.renderBasicDetails()
        case "MyAssociation":
            return this.renderMyAssociation()
        case "Documents":
            return this.renderDocuments()
        case "BankInfo":
            return this.renderBankInfo()
        default:
            return null;
     }
}

  GoBack = () =>{
    this.setState({selectedSection:""})
  }

  renderEditHeader = () => {
    const {selectedSection} = this.state
    const basicDetails=selectedSection==="BasicDetails"?"mt-0 mb-3 mx-0":"text-base font-medium text-[#adb1b4] flex justify-center items-center text-center bg-transparent cursor-pointer mr-[15px] pt-0 pb-[5.5px] px-2.5"
    const myAssociation=selectedSection==="MyAssociation"?"selectemt-0 mb-3 mx-0":"text-base font-medium text-[#adb1b4] flex justify-center items-center text-center bg-transparent cursor-pointer mr-[15px] pt-0 pb-[5.5px] px-2.5"
    const documents=selectedSection==="Documents"?"mt-0 mb-3 mx-0":"text-base font-medium text-[#adb1b4] flex justify-center items-center text-center bg-transparent cursor-pointer mr-[15px] pt-0 pb-[5.5px] px-2.5"
    const bankInfo=selectedSection==="BankInfo"?"mt-0 mb-3 mx-0":"text-base font-medium text-[#adb1b4] flex justify-center items-center text-center bg-transparent cursor-pointer mr-[15px] pt-0 pb-[5.5px] px-2.5"
    return(
    <div id='ml-5 mt-0 p-[30px]'>
      <div className='pl-[30px] flex flex-row justify-start'>
      <button type="button" onClick={()=>this.GoBack()}><img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703743351/arrow_left_bee0uq.svg" alt="goBack" className='w-[30px] h-[30px]'/></button>
      <h1 className='text-[22px] font-bold not-italic leading-8'>Edit Profile</h1>
      </div>
      <div className='flex justify-start items-center h-[25px] pl-[-40px] border-b-[#E1E5E8] border-b border-solid'>
                        <div className={`${basicDetails} sectionflex flex-col justify-between m-2.5`} onClick={()=>this.onClickSelectSection("BasicDetails")}>
                            Basic Details
                        </div>
                        <div className={myAssociation} onClick={()=>this.onClickSelectSection("MyAssociation")}>
                            My Association
                        </div>
                        <div className={documents} onClick={()=>this.onClickSelectSection("Documents")}>
                            Documents
                        </div>
                        <div className={bankInfo} onClick={()=>this.onClickSelectSection("BankInfo")}>
                            Bank Info
                        </div>
                    </div>
    </div>
  )
    }

  render(){
    const {selectedSection} = this.state
    
  return (
    <div>
    <Header />
    <div className='w-screen bg-white'>
    {selectedSection!==""&&this.renderEditHeader()}
    {selectedSection===""?this.renderProfile(): this.renderEditSections()}
    </div>
    </div>
  )
}
}

export default Profile
