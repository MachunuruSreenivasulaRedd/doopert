// /* eslint-disable jsx-a11y/anchor-is-valid */
// import {CiCalendarDate} from 'react-icons/ci'
// import {BiTimeFive} from 'react-icons/bi'
// const CardItem = props => {
//     const {QuotationStatus,delivered,onClickChangeSendQuotation,onClickChangeQuotationStatus}=props
//     const dateClass=delivered?"dateDelivered":"date"
//     console.log(onClickChangeSendQuotation);
//     return(
//         <div className='card' onClick={()=>onClickChangeSendQuotation}>
//                     <div className='adiv'>
//                         <a className='adivInner'>
//                             <p className='patientId'>#123456</p>
//                             <div className='adivInner'>
//                             <p className={dateClass}><span className='spanIcon'><CiCalendarDate/></span>  13 June, 2023   </p>
//                             <p className={dateClass}><span className='spanIcon'><BiTimeFive/></span>  09:00AM</p>
//                             </div>
//                         </a>
//                         <a className='vaccines' >
//                             <p className='vaccine'>Vaccine 1</p>
//                             <hr className='vaccineHr'/>
//                             <p className='vaccine'>Vaccine 2</p>
//                             <hr className='vaccineHr'/>
//                             <p className='vaccine'>Vaccine 3</p>
//                         </a>
//                     </div>
//                     <hr className='cardHr'/>
//                     <div className='middleCardContainer'>
//                         <div className='profileImgContainer'>
//                             <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593193/Ellipse_2_orggq9.svg" alt="profileImg"/>
//                             <div className='detailsContainer'>
//                                 <a className='patientName' >Patient Name</a><br/>
//                                 {delivered?<div><a className='details'>Age : 32 | Gender: Male | Blood Group: O+</a><br/>
//                                 <a className='details' >Height : 6” 3 inches | Weight : 76</a></div>:<a className='address' href='/#'>XYZ,streetname,<span classsName="city">city</span></a>}
//                             </div>
//                         </div>
//                         {delivered?<button className='delivered'>Delivered</button>:QuotationStatus?<button className='accepted'>Accepted</button>:<button className='requested'>Quotation Requested</button>}
//                     </div>
//                     <hr className='cardHr'/>
//                     <div className='QuotationBtn'>
//                         {QuotationStatus?<div className='adivInner'><p>Quotation :</p><p>Rs 500</p></div>:<button className='sendQuotation' onClick={onClickChangeQuotationStatus}>Send Quotation</button>}
//                     </div>
//                 </div>
//     )
// }
// export default CardItem
