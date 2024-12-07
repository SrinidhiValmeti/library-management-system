import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Grandalayam</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    The Library Management System is a modern web-based application designed to
                    streamline and automate the daily operations of libraries. This system simplifies 
                    the management of books, members, and transactions, enabling library staff to efficiently 
                    handle book checkouts, returns, and inventory tracking. <br/>
                        <br/>
                        With an intuitive interface, the system offers functionalities such as searching for 
                        books, managing member profiles, and tracking overdue items. Developed using technologies 
                        like Node.js, Express, MongoDB, and React, this system ensures a seamless and robust experience 
                        for both librarians and users.<br/>
                        <br/>
                        The Library Management System is a comprehensive solution for managing libraries, making it 
                        easy to track resources, maintain user records, and generate useful reports for effective 
                        library management.<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
