/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
// import CardItem from '../CardItem'
import {FiPhone} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {CiCalendarDate} from 'react-icons/ci'
import {BiTimeFive} from 'react-icons/bi'
import {BiSolidLeftArrowAlt} from 'react-icons/bi'
import Header from '../Header'
import {HiPhone} from 'react-icons/hi'
import {TiLocation} from 'react-icons/ti'
import {RiUploadCloudLine} from 'react-icons/ri'
import Pagination from '../Pagination';
import OTPValidation from '../OTPValidation';
import './index.css' 


const inputStyles={
    height:40,
    width:40,
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


class Dashboard extends Component{
    state={availability:false,selectedSection:"Medicines", QuotationStatus:false,sendQuotation:false,prescription:false,addQuote:false, quoteStatus:"PENDING",deliveryStatus:"PENDING",startDelivery:false,deliveryPop:false,delivered:false}

    onClickChangeAvailability=()=>{
        this.setState(prevState=>({availability:!prevState.availability}))
    }
    
    onClickChangeQuotationStatus=()=>{
        this.setState({QuotationStatus:true})
    }

    renderMedicineSection = () => {
        const {QuotationStatus,delivered}=this.state
        const dateClass=delivered?"text-[#41B079] text-sm font-normal mr-2.5":"text-[#5B6572] text-sm font-medium mr-2.5"
    return (
       <div className='flex flex-col w-screen overflow-x-hidden bg-[#f4f4f4] mt-2.5'>
            <div className='flex w-screen flex-wrap bg-transparent overflow-x-hidden ml-[60px] mr-2.5 my-0'>
            <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]' onClick={this.onClickChangeSendQuotation}>
                    <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]'>
                        <a className='flex justify-between items-center self-stretch h-[21px]'>
                            <p className='text-lg font-bold text-[#E40443]'>#123456</p>
                            <div className='flex justify-between items-center self-stretch h-[21px]'>
                            <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><CiCalendarDate/></span>  13 June, 2023   </p>
                            <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><BiTimeFive/></span>  09:00AM</p>
                            </div>
                        </a>
                        <a className='flex items-center w-3/5 h-[21px]' >
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 1</p>
                            <hr className='h-[18px] w-px bg-[#E40443] border-[none];'/>
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 2</p>
                            <hr className='h-[18px] w-px bg-[#E40443] border-[none];'/>
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 3</p>
                        </a>
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                    <div className='flex justify-between bg-transparent pt-[5px] pb-2.5 px-4'>
                        <div className='flex'>
                            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593193/Ellipse_2_orggq9.svg" alt="profileImg"/>
                            <div className='-ml-1.5'>
                                <a className='text-lg text-black font-semibold leading-[22px] tracking-normal ml-[18px] font-monsterrat' >Patient Name</a><br/>
                                {delivered?<div><a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]'>Age : 32 | Gender: Male | Blood Group: O+</a><br/>
                                <a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]' >Height : 6” 3 inches | Weight : 76</a></div>:<a className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]' href='/#'>XYZ,streetname,<span classsName="city">city</span></a>}
                            </div>
                        </div>
                        {delivered?<button className='bg-[#DCFAEB] text-[#41B079] text-xs w-[90px] h-5 rounded-[10px] border-[none]'>Delivered</button>:QuotationStatus?<button className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>Accepted</button>:<button className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>Quotation Requested</button>}
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                    <div className='max-h-8 pt-[5px] pb-[13px] px-4'>
                        {QuotationStatus?<div className='flex justify-between items-center self-stretch pt-[-2px] text-base font-medium mb-[25px]'><p>Quotation :</p><p>Rs 500</p></div>:<button className='bg-[#FCE6EC] text-[#E40443] text-sm font-medium h-9 w-full flex justify-center items-center cursor-pointer mt-[5px] mb-[5p] mx-4 rounded-[10px] border-[none]' onClick={this.onClickChangeQuotationStatus}>Send Quotation</button>}
                    </div>
                </div>
            </div>
            <div className='w-screen flex flex-col self-center ml-[-450px]'>
                <Pagination/>
            </div>
        </div>
    )}

    renderVaccinationSection=()=> {
        const {QuotationStatus,delivered}=this.state
        const dateClass=delivered?"text-[#41B079] text-sm font-normal mr-2.5":"text-[#5B6572] text-sm font-medium mr-2.5"
    return (
       
       <div className='flex flex-row flex-wrap mt-1.5r'>
        <div className='flex flex-col w-screen overflow-x-hidden bg-[#f4f4f4] mt-2.5'>
            <div className='flex w-screen flex-wrap bg-transparent overflow-x-hidden ml-[60px] mr-2.5 my-0'>
                <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]' onClick={this.onClickChangeSendQuotation}>
                    <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]'>
                        <a className='flex justify-between items-center self-stretch h-[21px]'>
                            <p className='text-lg font-bold text-[#E40443]'>#123456</p>
                            <div className='flex justify-between items-center self-stretch h-[21px]'>
                            <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><CiCalendarDate/></span>  13 June, 2023   </p>
                            <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><BiTimeFive/></span>  09:00AM</p>
                            </div>
                        </a>
                        <a className='flex items-center w-3/5 h-[21px]'>
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 1</p>
                            <hr className='h-[18px] w-px bg-[#E40443] border-[none]'/>
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 2</p>
                            <hr className='h-[18px] w-px bg-[#E40443] border-[none]'/>
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 3</p>
                        </a>
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                    <div className='flex justify-between bg-transparent pt-[5px] pb-2.5 px-4'>
                        <div className='flex'>
                            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593193/Ellipse_2_orggq9.svg" alt="profileImg"/>
                            <div className='-ml-1.5'>
                                <a className='text-lg text-black font-semibold leading-[22px] tracking-normal ml-[18px] font-monsterrat' >Patient Name</a><br/>
                                {delivered?<div><a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]'>Age : 32 | Gender: Male | Blood Group: O+</a><br/>
                                <a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]'>Height : 6” 3 inches | Weight : 76</a></div>:<a className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>XYZ, streetname,city</a>}
                            </div>
                        </div>
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                        <span className='flex justify-between text-base font-medium pl-[23px] pr-5 pt-[15px] pb-2.5 mb-[15px]'>Quotation: <span>     </span>Rs 500</span>
                    </div>
                    

                    <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]' onClick={this.onClickChangeSendQuotation}>
                    <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]'>
                        <a className='flex justify-between items-center self-stretch h-[21px]'>
                            <p className='text-lg font-bold text-[#E40443]'>#123456</p>
                            <div className='flex justify-between items-center self-stretch h-[21px]'>
                            <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><CiCalendarDate/></span>  13 June, 2023   </p>
                            <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><BiTimeFive/></span>  09:00AM</p>
                            </div>
                        </a>
                        <a className='flex items-center w-3/5 h-[21px]' >
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 1</p>
                            <hr className='h-[18px] w-px bg-[#E40443] border-[none];'/>
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 2</p>
                            <hr className='h-[18px] w-px bg-[#E40443] border-[none];'/>
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 3</p>
                        </a>
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                    <div className='flex justify-between bg-transparent pt-[5px] pb-2.5 px-4'>
                        <div className='flex'>
                            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593193/Ellipse_2_orggq9.svg" alt="profileImg"/>
                            <div className='-ml-1.5'>
                                <a className='text-lg text-black font-semibold leading-[22px] tracking-normal ml-[18px] font-monsterrat' >Patient Name</a><br/>
                                {delivered?<div><a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]'>Age : 32 | Gender: Male | Blood Group: O+</a><br/>
                                <a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]' >Height : 6” 3 inches | Weight : 76</a></div>:<a className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]' href='/#'>XYZ,streetname,<span classsName="city">city</span></a>}
                            </div>
                        </div>
                        {delivered?<button className='bg-[#DCFAEB] text-[#41B079] text-xs w-[90px] h-5 rounded-[10px] border-[none]'>Delivered</button>:QuotationStatus?<button className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>Accepted</button>:<button className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>Quotation Requested</button>}
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                    <div className='max-h-8 pt-[5px] pb-[13px] px-4'>
                        {QuotationStatus?<div className='flex justify-between items-center self-stretch pt-[-2px] text-base font-medium mb-[25px]'><p>Quotation :</p><p>Rs 500</p></div>:<button className='bg-[#FCE6EC] text-[#E40443] text-sm font-medium h-9 w-full flex justify-center items-center cursor-pointer mt-[5px] mb-[5p] mx-4 rounded-[10px] border-[none]' onClick={this.onClickChangeQuotationStatus}>Send Quotation</button>}
                    </div>
                </div>

        <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]' onClick={this.onClickChangeSendQuotation}>
        <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]'>
            <a className='flex justify-between items-center self-stretch h-[21px]'>
                <p className='text-lg font-bold text-[#E40443]'>#123456</p>
                <div className='flex justify-between items-center self-stretch h-[21px]'>
                <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><CiCalendarDate/></span>  13 June, 2023   </p>
                <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><BiTimeFive/></span>  09:00AM</p>
                </div>
            </a>
            <a className='flex items-center w-3/5 h-[21px]'>
                <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 1</p>
                <hr className='h-[18px] w-px bg-[#E40443] border-[none];'/>
                <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 2</p>
                <hr className='h-[18px] w-px bg-[#E40443] border-[none];'/>
                <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 3</p>
            </a>
        </div>
        <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
        <div className='flex justify-between bg-transparent pt-[5px] pb-2.5 px-4'>
            <div className='flex'>
                <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593193/Ellipse_2_orggq9.svg" alt="profileImg"/>
                <div className='-ml-1.5'>
                    <a className='text-lg text-black font-semibold leading-[22px] tracking-normal ml-[18px] font-monsterrat'>Patient Name</a><br/>
                    {delivered?<div><a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]'>Age : 32 | Gender: Male | Blood Group: O+</a><br/>
                    <a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]'>Height : 6” 3 inches | Weight : 76</a></div>:<a className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>XYZ, streetname, city</a>}
                </div>
            </div>
        </div>
        <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
            <span className='flex justify-between text-base font-medium pl-[23px] pr-5 pt-[15px] pb-2.5 mb-[15px]'>Quotation: <span></span>Rs 500</span>
        </div>

        <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]' onClick={this.onClickChangeSendQuotation}>
                    <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]'>
                        <a className='flex justify-between items-center self-stretch h-[21px];'>
                            <p className='text-lg font-bold text-[#E40443]'>#123456</p>
                            <div className='flex justify-between items-center self-stretch h-[21px];'>
                            <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><CiCalendarDate/></span>  13 June, 2023   </p>
                            <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><BiTimeFive/></span>  09:00AM</p>
                            </div>
                        </a>
                        <a className='flex items-center w-3/5 h-[21px]' >
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 1</p>
                            <hr className='h-[18px] w-px bg-[#E40443] border-[none];'/>
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 2</p>
                            <hr className='h-[18px] w-px bg-[#E40443] border-[none];'/>
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 3</p>
                        </a>
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                    <div className='flex justify-between bg-transparent pt-[5px] pb-2.5 px-4'>
                        <div className='flex'>
                            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593193/Ellipse_2_orggq9.svg" alt="profileImg"/>
                            <div className='-ml-1.5'>
                                <a className='text-lg text-black font-semibold leading-[22px] tracking-normal ml-[18px] font-monsterrat' >Patient Name</a><br/>
                                {delivered?<div><a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]'>Age : 32 | Gender: Male | Blood Group: O+</a><br/>
                                <a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]' >Height : 6” 3 inches | Weight : 76</a></div>:<a className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]' href='/#'>XYZ,streetname,<span classsName="city">city</span></a>}
                            </div>
                        </div>
                        {delivered?<button className='bg-[#DCFAEB] text-[#41B079] text-xs w-[90px] h-5 rounded-[10px] border-[none]'>Delivered</button>:QuotationStatus?<button className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>Accepted</button>:<button className='bg-[#d1d9ea] text-[#437BE9] w-[130px] text-[10px] h-[22px] font-medium text-center ml-[5px] pl-3 pr-[0px,] py-[6px,] rounded-3xl border-[none]'>Quotation Requested</button>}
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                    <div className='max-h-8 pt-[5px] pb-[13px] px-4'>
                        {QuotationStatus?<div className='flex justify-between items-center self-stretch pt-[-2px] text-base font-medium mb-[25px]'><p>Quotation :</p><p>Rs 500</p></div>:<button className='bg-[#FCE6EC] text-[#E40443] text-sm font-medium h-9 w-full flex justify-center items-center cursor-pointer mt-[5px] mb-[5p] mx-4 rounded-[10px] border-[none]' onClick={this.onClickChangeQuotationStatus}>Send Quotation</button>}
                    </div>
                </div>
    
        </div>
        <div className='w-screen flex flex-col self-center ml-[-450px]'>
                <Pagination/>
            </div>
        </div>
        </div>
    )}

    renderStandaloneSection = () => {
            return(
                <div className='flex justify-center w-full'>
                <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1702579192/Frame_1000004060_pqxwxi.png" alt="imgno" className='w-[250px] h-[300px] justify-self-center'/>
            </div>
            )
    }
    onClickSelectSection=(section)=>{
        this.setState({selectedSection:section},this.renderSections)
    }
    
    onClickChangeSendQuotation=()=>{
        this.setState(prevState=>({
            sendQuotation:!prevState.sendQuotation
        }))
    }

    renderPopup=()=>(
        <div className='w-screen h-screen fixed flex flex-col items-center bg-[rgba(0,0,0,0.3)] justify-center items-center pl-6 pr-[24px,] py-[60px,]' >
            <div className='flex flex-col justify-center items-center bg-[white] w-[475px] h-[259px] text-lg font-semibold leading-[22px] tracking-normal text-center box-border px-6 py-[60px,24px,60px,] rounded-[10px] font-Monsterrat'>
                <p className='text-lg font-medium leading-[22px] text-black text-center w-[427px]'>Your <span className='text-[#E40443]'>Availability</span> is disabled. Please enable your Availability to get new bookings</p>
                <button className='bg-[#E40443] text-white text-sm not-italic font-semibold cursor-pointer flex w-[279px] h-[46px] justify-center items-center box-border mt-[49px] px-[9px] py-[15px] rounded-lg border-[none]' onClick={this.onClickChangeAvailability}>Enable Availability</button>            
            </div>
        </div>
    )

    renderSections = () => {
        const {selectedSection} = this.state
        switch(selectedSection){
            case "Vaccination":
                return this.renderVaccinationSection();
            case "Medicines":
                return this.renderMedicineSection();
            case "Standalone":
                return this.renderStandaloneSection();
            default:
                return null;
        }
    }

    onClickChangePrescription=()=>{
        this.setState(prevState=>({
            prescription:!prevState.prescription
        }))
    }

    renderPrescription=()=>(
        <div className='flex flex-col fixed w-screen h-full text-center bg-[rgba(0,0,0,0.3)] justify-center items-center' onClick={this.onClickChangePrescription}>
            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1696342167/image_201_qbntie.png" alt="prescription" className='h-[70%]'/>
        </div>
    )
    
    onClickAddQuotation=()=>{
        this.setState(prevState=>({
            addQuote:!prevState.addQuote
        }))
    }
    onClickGoToDb=()=>{
        this.setState(prevState=>({
            addQuote:!prevState.addQuote,startDelivery:!prevState.startDelivery
        }))
    }
    
    onClickSendQuote=()=>{
        this.setState({quoteStatus:"SEND"})
    }

    renderQuotationPopUp=()=>(
        <div className='popupContainer'>
            <div className='self-center bg-white w-[500px] h-[550px] px-[30px] py-2.5 rounded-[9px]'>
            <h1 className='text-[35px] font-bold text-center mb-[50px]'>Add Quotation</h1>
            <div className='w-[96%] flex border border-[color:var(--Grey-Grey-09,#EEF0F3)] flex-col items-center justify-center bg-transparent h-[60px] cursor-pointer mt-2.5 mb-[30px] mx-0 p-2.5 rounded-lg border-solid;
  background: var(--White, #fff)'>
                <label className='text-[#8D98A4] text-sm font-[400px]'>Upload Quotation</label>
                <div className='w-[96%] flex border border-[color:var(--Grey-Grey-09,#EEF0F3)] flex-col items-center justify-center bg-transparent h-[60px] cursor-pointer mt-2.5 mb-[30px] mx-0 p-2.5 rounded-lg border-solid'>
                    <span className='flex justify-start border-[none]'><input type="file" className='text-transparent w-[400px] z-[5] cursor-pointer ml-[-30px] self-start border-[none] border-0 border-solid border-transparent'/>
                        <RiUploadCloudLine className='ml-[-370px] w-[30px] h-6 mt-[15px]'/>
                        </span>
                        <p className='text-base text-[#5B6572] font-medium'>Place Holder</p>
                </div>
                <div className='w-full bg-[#D0D4D9] h-px flex items-center justify-center mt-2.5 mb-[30px] mx-0'>
                    <div className='h-[34px] w-[34px] flex justify-center items-center text-[#D0D4D9] text-base font-normal bg-white mb-2 rounded-[50%]'>
                        or
                    </div>
                </div>
                <div className='w-[96%] flex border border-[color:var(--Grey-Grey-09,#EEF0F3)] flex-col items-center justify-center bg-transparent h-[60px] cursor-pointer mt-2.5 mb-[30px] mx-0 p-2.5 rounded-lg border-solid;
  background: var(--White, #fff)'>
                    <label htmlFor='price' className='text-[#8D98A4] text-sm font-[400px]'>Price</label>
                    <div>
                        <input id="price" type="text" placeholder='Enter price' className='h-10 border w-[450px] mt-2.5 mb-[30px] mx-0 px-5 py-0 rounded-lg border-solid border-[#DBDDDF] min-w-[400px]'/>
                    </div>
                </div>

                <div className='w-[96%] flex border border-[color:var(--Grey-Grey-09,#EEF0F3)] flex-col items-center justify-center bg-transparent h-[60px] cursor-pointer mt-2.5 mb-[30px] mx-0 p-2.5 rounded-lg border-solid;
  background: var(--White, #fff)'>
                    <label htmlFor="discount"  className='text-[#8D98A4] text-sm font-[400px]'>Discount</label>
                    <div>
                        <input id="discount" type="text" placeholder='Enter discount' className='h-10 border w-[450px] mt-2.5 mb-[30px] mx-0 px-5 py-0 rounded-lg border-solid border-[#DBDDDF] min-w-[400px]'/>
                    </div>
                </div>
                <button className='bg-[#E40443] text-white h-10 w-full flex items-center justify-center cursor-pointer font-medium text-base mt-2.5 mb-5 mx-0 rounded-lg border-[none]' onClick={this.onClickSendQuote}>Send</button>
            </div>
        </div>
        </div>
    )
    
    
    renderQuoteSuccessPopup=()=>(
        <div className='popupContainer'>
                <div className='successImgContainer bg-white w-[500px] py-8 rounded-2xl'>
                    <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695027900/Group_tubb6n.png" alt="successful img" className='h-[85px] w-[90px]'/>
                    <a className='successful text-[28px]'>Quotation Sent</a>
                    <a className='text-base font-normal'>Quotation for request #12345 is sent successfully</a>
                    <button className='successBtn w-[90%] font-semibold mx-2.5' onClick={this.onClickGoToDb}>Go To Dashboard</button>
                </div>
        </div>
    )

    renderAddQuotationPopUp=()=>{
         const {quoteStatus}=this.state

         switch (quoteStatus) {
            case "PENDING":
                return this.renderQuotationPopUp()
            case "SEND":
                return this.renderQuoteSuccessPopup()
            default:
                return null;
         }
    }


    renderMedicinesContainer=()=>{

        const {QuotationStatus,delivered}=this.state
        const dateClass=delivered?"text-[#41B079] text-sm font-normal mr-2.5":"text-[#5B6572] text-sm font-medium mr-2.5"
    return (
       <><div className='flex flex-col w-screen overflow-x-hidden bg-[#f4f4f4] mt-2.5'>
            <div className='flex w-screen flex-wrap bg-transparent overflow-x-hidden ml-[60px] mr-2.5 my-0'>
                <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]' onClick={this.onClickChangeSendQuotation}>
                    <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]'>
                        <a className='flex justify-between items-center self-stretch h-[21px]'>
                            <p className='text-lg font-bold text-[#E40443]'>#123456</p>
                            <div className='flex justify-between items-center self-stretch h-[21px]'>
                                <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><CiCalendarDate /></span>  13 June, 2023   </p>
                                <p className={dateClass}><span className='ml-1 mr-0 mt-0 mb-8'><BiTimeFive /></span>  09:00AM</p>
                            </div>
                        </a>
                        <a className='flex items-center w-3/5 h-[21px]'>
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 1</p>
                            <hr className='h-[18px] w-px bg-[#E40443] border-[none]' />
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 2</p>
                            <hr className='h-[18px] w-px bg-[#E40443] border-[none]' />
                            <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 3</p>
                        </a>
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]' />
                    <div className='flex justify-between bg-transparent pt-[5px] pb-2.5 px-4'>
                        <div className='flex'>
                            <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593193/Ellipse_2_orggq9.svg" alt="profileImg" />
                            <div className='text-start -ml-2.5'>
                                <a className='text-lg text-black font-semibold leading-[22px] tracking-normal ml-[18px] font-monsterrat'>Patient Name</a><br />
                                {delivered ? <div><a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]'>Age : 32 | Gender: Male | Blood Group: O+</a><br />
                                    <a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]'>Height : 6” 3 inches | Weight : 76</a></div> : <a className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>XYZ,streetname,city</a>}
                            </div>
                        </div>
                        {delivered ? <button className='bg-[#DCFAEB] text-[#41B079] text-xs w-[90px] h-5 rounded-[10px] border-[none]'>Delivered</button> : QuotationStatus ? <button className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>Accepted</button> : <button className='bg-[#d1d9ea] text-[#437BE9] w-[130px] text-[10px] h-[22px] font-medium text-center ml-[5px] pl-3 pr-[0px,] py-[6px,] rounded-3xl border-[none]'>Quotation Requested</button>}
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]' />
                    <div className='max-h-8 pt-[5px] pb-[13px] px-4'>
                        {QuotationStatus ? <div className='flex justify-between items-center self-stretch h-[21px]'><p>Quotation :</p><p>Rs 500</p></div>:<button className='bg-[#FCE6EC] text-[#E40443] text-sm font-medium h-9 w-full flex justify-center items-center cursor-pointer mt-[5px] mb-[5p] mx-4 rounded-[10px] border-[none]' onClick={this.onClickChangeQuotationStatus}>Send Quotation</button>}
                </div>
            </div>
        </div><div className='w-screen flex flex-col self-center ml-[-450px]'>
                <Pagination />
            </div>
        </div>
        </>
    )
    }

    renderVaccineContainer=()=>{

        const {QuotationStatus}=this.state

        return (
            <div className='flex flex-col w-screen overflow-x-hidden bg-[#f4f4f4] mt-2.5'>
                 <div className='flex w-screen flex-wrap bg-transparent overflow-x-hidden ml-[60px] mr-2.5 my-0'>
                     <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]d' onClick={this.onClickChangeSendQuotation}>
                         <div className='flex flex-col w-[370px] h-[230px] bg-white ml-0 mr-5 mt-0 mb-5 p-0 rounded-xl border-[1.1px] border-solid border-[#D3D3D3]'>
                             <a className='flex justify-between items-center self-stretch h-[21px]'>
                                 <p className='text-lg font-bold text-[#E40443]'>#123456</p>
                                 <div className='flex justify-between items-center self-stretch h-[21px]'>
                                 <p className='text-[#5B6572] text-sm font-medium mr-2.5'><span className='ml-1 mr-0 mt-0 mb-8'><CiCalendarDate/></span>  13 June, 2023   </p>
                                 <p className='text-[#5B6572] text-sm font-medium mr-2.5'><span className='ml-1 mr-0 mt-0 mb-8'><BiTimeFive/></span>  09:00AM</p>
                                 </div>
                             </a>
                             <a className='flex items-center w-3/5 h-[21px]'>
                                 <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 1</p>
                                 <hr className='h-[18px] w-px bg-[#E40443] border-[none];'/>
                                 <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 2</p>
                                 <hr className='h-[18px] w-px bg-[#E40443] border-[none];'/>
                                 <p className='text-xs text-[#E40443] font-semibold not-italic leading-[116%]'>Vaccine 3</p>
                             </a>
                         </div>
                         <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                         <div className='flex justify-between bg-transparent pt-[5px] pb-2.5 px-4'>
                             <div className='flex'>
                                 <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593193/Ellipse_2_orggq9.svg" alt="profileImg"/>
                                 <div>
                                     <a className='text-lg text-black font-semibold leading-[22px] tracking-normal ml-[18px] font-monsterrat'>Patient Name</a><br/>
                                     <a className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>XYZ, streetname, city</a>
                                 </div>
                             </div>
                             {QuotationStatus?<button className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>Accepted</button>:<button className='bg-[#d1d9ea] text-[#437BE9] w-[130px] text-[10px] h-[22px] font-medium text-center ml-[5px] pl-3 pr-[0px,] py-[6px,] rounded-3xl border-[none]'>Quotation Requested</button>}
                         </div>
                         <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                         <div className='max-h-8 pt-[5px] pb-[13px] px-4'>
                             {QuotationStatus?<div className='flex justify-between items-center self-stretch h-[21px]'><p>Quotation :</p><p>Rs 500</p></div>:<button className='bg-[#FCE6EC] text-[#E40443] text-sm font-medium h-9 w-full flex justify-center items-center cursor-pointer mt-[5px] mb-[5p] mx-4 rounded-[10px] border-[none]' onClick={this.onClickChangeQuotationStatus}>Send Quotation</button>}
                         </div>
                     </div>
                 </div>
                 <div className='w-screen flex flex-col self-center ml-[-450px]'>
                    <Pagination/>
                 </div>
             </div>
         )
    }
    
    onClickVerifyOtp=()=>{
        this.setState({
            deliveryStatus:"SEND"
        })
    }
    

    renderVerifyPopUp=()=>{
        const {OTP}=this.state
    return(
        <div className='popupContainer' >
            <div className='otpContainer w-[600px] h-[310px] bg-white p-8 rounded-2x'>
                <a className='verify'>Verify</a>
                <a className='pb-10'>Ask patient for OTP</a>
                <div className='pb-10'><OTPValidation/></div>
                <button className='verifyBtn' onClick={this.onClickVerifyOtp}>Verify OTP</button>
            </div>
        </div>
    )
    }

    renderOTPSuccessPopup=()=>(
        <div className='popupContainer'>
                <div className='successImgContainer bg-white w-[500px] py-8 rounded-2xl'>
                    <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695027900/Group_tubb6n.png" alt="successful img" className='h-[85px] w-[90px]'/>
                    <a className='successful text-[28px]'>Successful</a>
                    <a className='text-base font-normal'>OTP is verified successfully</a>
                    <button className='successBtn w-[90%] font-semibold mx-2.5' onClick={this.onClickLater}>Give Feedback</button>
                    <a onClick={this.onClickLater} className='text-[#8D98A4] text-[15px] cursor-pointer font-normal mt-2'>Later</a>
                </div>
        </div>
    )

    renderStartDeliveryPopup=()=>{
        const {deliveryStatus}=this.state

         switch (deliveryStatus) {
            case "PENDING":
                return this.renderVerifyPopUp()
            case "SEND":
                return this.renderOTPSuccessPopup()
            default:
                return null;
         }
    }
    
    onClickStartDelivery=()=>{
        this.setState(prevState=>({
            deliveryPop:!prevState.deliveryPop
        }))
    }
    
    onClickLater=()=>{
        this.setState(prevState=>({
            deliveryPop:!prevState.deliveryPop,delivered:!prevState.delivered
        }))
    }

    renderAddQuotation=()=>{
        const {startDelivery}=this.state

    return (
        <div className='min-h-[350px] bg-[#f4f4f4] -mt-5 mb-[5px] mx-[60px]'>
            <div className='flex items-center'>
                <div className='text-3xl cursor-pointer mt-[30px] mb-5' onClick={this.onClickChangeSendQuotation}><BiSolidLeftArrowAlt/></div>
                <h1 className='text-[22px] text-[#1A1C1F] font-bold'> Case #123456</h1>
            </div>
            <div className='flex items-start bg-[#f4f4f4] mb-10'>
                <div className='min-w-[650px] bg-white rounded-lg w-[30%]'>
                    <div className='flex justify-between items-center self-stretch h-28'>
                        <div className='flex margin'>
                            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1696333379/Ellipse_2_w3cjwe.png" className='h-[90px] w-[90px]' alt="profileImg"/>
                            <div className='-ml-1.5'>
                                <a className='text-lg text-black font-semibold leading-[22px] tracking-normal ml-[18px] font-monsterrat'>Patient Name</a><br/>
                                <a className='text-[13px] font-medium text-[#5B6572] ml-[18px] pl-[15px]'>XYZ, streetname, city</a><br/>
                                <a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]'>Age : 32 | Gender: Male | Blood Group: O+</a><br/>
                                <a className='text-[#5B6572] text-[9px] font-medium text-start ml-[18px]'>Height : 6” 3 inches | Weight : 76</a>
                            </div>
                        </div>
                        <div className='flex self-center justify-between'>
                                <div className='bg-[#FCE6EC] h-10 flex justify-center items-center min-w-[40px] text-[#E40443] font-normal cursor-pointer mr-[15px] rounded-lg'>
                                    <HiPhone/>
                                </div>
                                <div className='bg-[#FCE6EC] h-10 flex justify-center items-center min-w-[40px] text-[#E40443] font-normal cursor-pointer mr-[15px] rounded-lg'>
                                    <TiLocation/>
                                </div>
                        </div>
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                    <div className='adivInner margin'>
                        <div className='flex items-center w-3/5 h-[21px]'>
                            <button className='border font-medium text-[15px] bg-transparent cursor-pointer ml-0 mr-2 mt-2.5 mb-1 px-3 py-2 rounded-lg border-solid border-[#DBDDDF]'>Vaccine 1</button>
                            <button className='border font-medium text-[15px] bg-transparent cursor-pointer ml-0 mr-2 mt-2.5 mb-1 px-3 py-2 rounded-lg border-solid border-[#DBDDDF]'>Vaccine 2</button>
                            <button className='border font-medium text-[15px] bg-transparent cursor-pointer ml-0 mr-2 mt-2.5 mb-1 px-3 py-2 rounded-lg border-solid border-[#DBDDDF]'>Vaccine 3</button>
                        </div>
                        <button className='font-medium text-[15px] bg-[#E40443] text-white cursor-pointer mt-2.5 mb-1 mx-0 px-3 py-2 rounded-lg border-[none]' onClick={this.onClickChangePrescription}>View Prescription</button>
                    </div>
                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>

                    <div className='mx-5 my-[15px]'>
                        <a>Need</a>
                        <a className='flex items-center justify-start'>
                            <div className='flex items-center'>
                                <div className='text-[#5B6572] text-sm font-medium mr-2.5'><CiCalendarDate/></div>
                                <p className='date mb-[19px]'>  13 June, 2023   </p>
                            </div>
                            <div className='flex items-center self-center ml-[200px]'>
                                <div className='text-[#5B6572] text-sm font-medium mr-2.5'><BiTimeFive/></div>
                                <p className='text-[#5B6572] text-sm font-medium mr-2.5 mb-[19px]'>   09:00AM</p>
                            </div>
                        </a>
                    </div>

                    <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                    {startDelivery?<div className='mx-5 my-[15px]'>
                            <label>Dosage Instruction</label>
                            <input type="text" className='w-[95%] h-[100px] border mt-2 mb-[25px] mx-0 p-[15px] rounded-lg border-solid border-[#DBDDDF]'/>
                            <button className='font-medium text-[15px] bg-[#E40443] text-white cursor-pointer mt-0 mb-5 mx-0 px-3 py-2 rounded-lg border-[none]' onClick={this.onClickStartDelivery}>Start Delivery</button>
                    </div>:<div className='flex items-center justify-start margin'>
                        <button className='bg-[#41B079] font-medium text-[15px] text-white cursor-pointer mt-0 mb-[15px] mx-0 px-3 py-2 rounded-lg border-[none]' onClick={this.onClickAddQuotation}>
                            Add Quotation
                        </button>
                    </div>}
                </div>
                {startDelivery&& (
                    <div id="bg-[#f4f4f4] h-full">
                    <div className='bg-white min-w-[400px] ml-[50px] p-[15px] rounded-lg'>
                        <p className='text-lg font-semibold'>Payment Received</p>
                        <div className='flex justify-between items-center self-stretch h-[21px]'>
                            <p className='text-[#8D98A4] text-[15px] font-normal'>Sub Total</p>
                            <p className='text-[15px] font-normal'>Rs. 600</p>
                        </div>
                        <div className='flex justify-between items-center self-stretch h-[21px]'>
                            <p className='text-[#8D98A4] text-[15px] font-normal'>Discount</p>
                            <p className='text-[15px] font-normal'>Rs. 100</p>
                        </div>
                        <hr className='w-full h-[0.5px] bg-[#E4E4E4] border-[none]'/>
                        <div className='flex justify-between items-center self-stretch h-[21px]'>
                            <p className='text-base font-medium'>Total</p>
                            <p className='text-base font-medium'>Rs 500</p>
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
    )
    }

    renderDashboardSections = () => {
        const {availability,selectedSection,sendQuotation,prescription,addQuote,deliveryPop}=this.state 
        const availableBtn=availability&&"bg-[#DCFAEB] w-9 h-[15px] cursor-pointer relative flex justify-self-end items-center ml-[5px] rounded-[80px] border-[none] w-9 h-[15px] cursor-pointer relative flex justify-self-start items-center ml-[5px] rounded-[80px] border-[none] before:absolute"
        const Medicines=selectedSection==="Medicines"?"text-[15px] font-medium text-[#1A1C1F] flex justify-center items-center text-center bg-transparent border cursor-pointer leading-[17.6px] mr-[15px] pt-0 pb-[5.5px] px-2.5 border-solid border-[#E40443] border-[0px_0px_1px_0px]":"text-base font-medium leading-[18px] tracking-normal text-[#adb1b4] flex justify-center items-center border text-center bg-transparent cursor-pointer mr-[15px] pt-0 pb-[5.5px] px-2.5 border-solid border-[#e6eaed] border-[0px_0px_1px_0px] font-Montserrat"
        const Vaccination= selectedSection==="Vaccination"?"text-[15px] font-medium text-[#1A1C1F] flex justify-center items-center text-center bg-transparent border cursor-pointer leading-[17.6px] mr-[15px] pt-0 pb-[5.5px] px-2.5 border-solid border-[#E40443] border-[0px_0px_1px_0px]":"section"
        return(
            <div className='dashHeaderSection'>
            <div className='flex justify-between items-center h-16 box-border mx-[60px] my-0 pt-6 pb-2 px-0;
'>
                        <h2 className='text-[22px] not-italic font-bold leading-8 font-monsterrat'>Dashboard</h2>
                        <div className='flex items-center'>
                            <p className='text-base font-semibold'>Availability</p>
                            <div type="button" className={availableBtn} onClick={this.onClickChangeAvailability}></div>
                        </div>
                    </div>
                    <div className='flex justify-start items-center h-[90px] w-[91%] box-border ml-10 mr-[60px] mt-4 mb-0 pl-[30px]'>
                        <div className={Medicines} onClick={()=>this.onClickSelectSection("Medicines")}>
                            Medicines
                        </div>
                        <div className={Vaccination} onClick={()=>this.onClickSelectSection("Vaccination")}>
                            Vaccination
                        </div>
                    </div>
                    </div>
        )
    }

    render() {
        const {availability,selectedSection,sendQuotation,prescription,addQuote,deliveryPop}=this.state 
        
        return(
            <>
             {availability?null: this.renderPopup()}
             {prescription?this.renderPrescription():null}
             {addQuote?this.renderAddQuotationPopUp():null}
             {deliveryPop?this.renderStartDeliveryPopup():null}
             
            <Header/>
            <div className='flex flex-col justify-between max-w-[100vw] overflow-x-hidden min-h-[85.7vh] bg-[#f4f4f4]'>
                    {!sendQuotation&&this.renderDashboardSections()}
                <div className='flex justify-start items-center min-h-[60vh] w-screen overflow-x-hidden bg-transparent'>
                    {sendQuotation?this.renderAddQuotation():this.renderSections()}
                </div>
                
                <div className='flex items-center flex-col justify-start bg-[#B60336] h-[350px] overflow-hidden'>
                    <div className='flex items-start justify-between w-[90%] mx-[60px] my-5'>
                    <div className='flex flex-col items-start justify-start'>
                        <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1702576617/dooperWhite_ib2lb0.png" className='w-[150px] h-10 ml-[-15px] bg-transparent m-5' alt="footer dooper"/>
                        <div className='flex items-center mb-5'>
                            <div className='bg-white h-10 flex justify-center items-center min-w-[40px] text-[#E40443] font-normal cursor-pointer mr-[15px] rounded-lg'>
                                <FiPhone/>
                            </div>
                            <div>
                                <a className='text-[17px] text-white font-normal'>Phone</a><br/>
                                <a className='conttext-[17px] text-white font-normalact'>+1 23 456 7980</a>
                            </div>
                        </div>
                        <div className='icon-text'>
                            <div className='whiteContainer'>
                                <FiMail/>
                            </div>
                            <div>
                                <a className='text-[17px] text-white font-normal'>Mail</a><br/>
                                <a className='text-[17px] text-white font-normal'>inf@2dooper.com</a>
                            </div>
                        </div>
                    </div>  
                    <div className='itemsContainer'>
                        <p className='text-xl font-semibold text-white'>Quick Links</p>
                        <ul>
                            <li className='text-[15px] text-white font-normal no-underline mt-0 mb-2.5 mx-0'>Pricing</li>
                            <li className='listtext-[15px] text-white font-normal no-underline mt-0 mb-2.5 mx-0Item'>Doctors</li>
                            <li className='listIttext-[15px] text-white font-normal no-underline mt-0 mb-2.5 mx-0em'>Services</li>
                            <li className='text-[15px] text-white font-normal no-underline mt-0 mb-2.5 mx-0'>Testimonials</li>
                            <li className='text-[15px] text-white font-normal no-underline mt-0 mb-2.5 mx-0'>FAQs</li>
                        </ul>
                    </div>
                    <div className='itemsContainer'>
                        <p className='text-xl font-semibold text-white'>Other</p>
                        <ul>
                            <li className='text-[15px] text-white font-normal no-underline mt-0 mb-2.5 mx-0'>Make Appointment</li>
                            <li className='text-[15px] text-white font-normal no-underline mt-0 mb-2.5 mx-0'>Emergency Call</li>
                            <li className='text-[15px] text-white font-normal no-underline mt-0 mb-2.5 mx-0'>Testimonials</li>
                        </ul>
                    </div>
                    <div className='itemsContainer'>
                        <p className='text-xl font-semibold text-white'>Links</p>
                        <ul>
                            <li className='text-[15px] text-white font-normal no-underline mt-0 mb-2.5 mx-0'>Blogs</li>
                            <li className='text-[15px] text-white font-normal no-underline mt-0 mb-2.5 mx-0'>Privacy Policy</li>
                            <li className='text-[15px] text-white font-normal no-underline mt-0 mb-2.5 mx-0'>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div className='itemsContainer'>
                        <p className='text-xl font-semibold text-white'>Quick Links</p>
                        <div className='icon-text'>
                            <div className='whiteContainer'>
                                <AiFillInstagram/>
                            </div>
                            <div className='whiteContainer'>
                                <BsFacebook/>
                            </div>
                            <div className='whiteContainer'>
                                <BsLinkedin/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <hr className='w-[99.9%] border-[1.5px_0px_0px_0px] border-white'/>
                    <div className='flex items-center justify-center bg-[#B60336] text-white text-base font-normal text-center p-2.5'>
                    Copyright © 2023 | All rights reserved by dooper
                    </div>
                </div>
            </div>

            </>
        
        )
    }
}
    
    
    

export default Dashboard;
