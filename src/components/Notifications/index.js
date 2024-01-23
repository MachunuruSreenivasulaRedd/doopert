/* eslint-disable jsx-a11y/anchor-is-valid */
import {Component} from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import {BiSolidLeftArrowAlt} from 'react-icons/bi' 
import {FiChevronLeft} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'
import Header from '../Header'
import './index.css'

const notification_list=[
    {
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696493145/Label_Initials_wl8mk8.png",
        description:"John(DHA) has assigned you Doctor for your symptoms for fever and other issue",
        date:"25-07-2023",
        time:"05:10 AM",
    },

    {
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696493164/Avatar_yv5pky.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"03:30 PM",
    },

    {
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696493635/Avatar_1_mnu51v.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"01:10 PM",
    },
    {
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696516731/Avatar_5_tfnkln.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"21 Jan",
    },
    {
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696493145/Label_Initials_wl8mk8.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"05:10 PM",
    },{
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696516754/Avatar_4_ea1wfy.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"05:10 PM",
    },{
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696493164/Avatar_yv5pky.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"03:30 PM",
    },

]

class Notifications extends Component{
    state={clearAll:false}

    onClickClearAll=()=>{
        this.setState({
            clearAll:true
        })
    }
    
    renderNoNotifications=()=>(
         <div className='noNotificationContainer'>
            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1696518120/Group_102235592_aq25x1.png" alt="no notifications"/>
            <p className='noNotificationPara'>"No new notifications at the moment. Stay tuned for updates!"</p>
         </div>
    )

    onClickChangeSendQuotation=()=>(
    <Navigate to="/dashboard"/>
    )
    
    renderNotifications=()=>{
        const {clearAll}=this.state
        const finalNotifications=clearAll? []: notification_list
    
    return(

        <div className='border-t-[#DBDADE] border-t border-solid'>
        {finalNotifications.map(each=>(
                  <> 
                    <div className='flex justify-between items-center px-[15px] py-1 border-b-[#DBDADE] border-b border-solid'>
                        <div className='flex items-center'>
                            <img src={each.imgUrl} alt={each}/>
                            <p className='text-base text-[#5B6572] font-medium ml-2.5'>{each.description}</p>
                        </div>
                        <div className='flex items-center'>
                        <a className='font-normal text-[#b9b9be] text-base min-w-[100px] flex items-end ml-5'>{each.date}</a>
                        <a className='font-normal text-[#b9b9be] text-base min-w-[100px] flex items-end ml-5'>{each.time}</a>
                        </div>
                    </div>
                    </>
                ))}
        </div>

    )
    }

    render(){

        const {clearAll}=this.state
        return(
            <>
            <Header/>
            <div className='flex flex-col justify-start min-h-[85vh] bg-white mx-[60px] my-0'>
                <div className='flex items-center'>
                    <button className='text-3xl cursor-pointer mt-[30px] mb-5' onClick={this.onClickChangeSendQuotation}><NavLink to="/dashboard"><BiSolidLeftArrowAlt className='text-[black]'/></NavLink></button>
                    <h1 className='text-[22px] text-[#1A1C1F] font-bold'> Notifications</h1>
                </div>
                <hr className='cardHr1'/>
                <div className='flex text-end items-center justify-end px-0 py-[15px]'>
                    <a className='text-[#E40443] text-sm font-medium underline cursor-pointer mr-5'>Mark all as read</a>
                    <a className='text-[#E40443] text-sm font-medium underline cursor-pointer mr-5' onClick={this.onClickClearAll}>Clear all</a>
                    {clearAll?<a className='text-sm text-[#b9b9be] font-normal'>1-1 of 1</a>:<a className='text-sm text-[#b9b9be] font-normal'>1-10 of 10</a>}
                    <a className='font-medium ml-5 mt-[5px'><FiChevronLeft/></a>
                    <a className='font-medium ml-5 mt-[5px'><FiChevronRight/></a>
                </div>
                <hr className='cardHr1'/>
                {clearAll? this.renderNoNotifications(): this.renderNotifications()}
            </div>
            </>
        )
    }
}

export default Notifications