import React from 'react';
import { FaChevronDown,FaInbox,FaRegCalendarAlt,FaRegCalendar } from 'react-icons/fa';
export const Sidebar =()=> <div className="sidebar" data-test-id="sidebar">
    <ul className="sidebar__generic">
        <li><span> <FaInbox/> </span> <span>Inbox</span> </li>
        <li><span> <FaRegCalendar/> </span> <span>Today</span></li>
        <li><span> <FaRegCalendarAlt/> </span> <span>Next 7 days</span></li>
    </ul>
    <div className="sidebar__middle">
        <span><FaChevronDown/></span>
        <h2>Labels</h2>
    </div>
    <ul className="sidebar__labels">
        Labels will be here
    </ul>
    Add Projects Components
</div>;