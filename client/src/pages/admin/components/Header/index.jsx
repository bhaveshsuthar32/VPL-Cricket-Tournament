  import { useEffect, useState } from 'react';
  import { Link } from "react-router-dom";
  import { io } from 'socket.io-client';

  const Header = () => {
    const [notifications, setNotifications] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false); // new state for dropdown visibility

    // const socket = io('http://localhost:4000'); // Initialize Socket.IO connection

    // const socket = io('https://vpl-cricket-tournament-server.vercel.app'); 
    // const socket = io('https://vpl-cricket-tournament-server.vercel.app');
    // const socket = io(
    //   process.env.NODE_ENV === 'production'
    //     ? 'https://vpl-cricket-tournament-server.vercel.app'
    //     : 'http://localhost:4000'
    // );
    const socket = io(
      window.location.hostname === 'localhost'
        ? 'http://localhost:4000'
        : 'https://vpl-cricket-tournament-server.vercel.app',  // Update with new WebSocket server URL if changed
      {
        path: '/socket.io/',
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      }
    );
    
    
  console.log('Socket connected:', socket.id);


    // Load notifications from localStorage on component mount
    useEffect(() => {
      const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
      setNotifications(storedNotifications);
    }, []);

    // Listen for new sponsor type notifications
    useEffect(() => {
      const handleNotificationSystem = (data) => {
        const newNotification = { message: data.message, id: Date.now() };
        const updatedNotifications = [...notifications, newNotification];

        // Update state and save notifications to localStorage
        setNotifications(updatedNotifications);
        localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
      };

      // Socket event listeners
      socket.on('newSponsorType', handleNotificationSystem);
      socket.on('deleteSponsorType', handleNotificationSystem);
      socket.on('newUserSignUp', handleNotificationSystem);

      // Clean up on component unmount
      return () => {
        socket.off('newSponsorType', handleNotificationSystem);
        socket.off('deleteSponsorType', handleNotificationSystem);
        socket.off('newUserSignUp', handleNotificationSystem);
      };
    }, [notifications]);

    // Remove notification handler
    const removeNotification = (id) => {
      const updatedNotifications = notifications.filter(notification => notification.id !== id);

      // Update state and localStorage
      setNotifications(updatedNotifications);
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    return (
      <div className="px-4 sm:ml-64 border-b-[1px] sticky top-0 bg-white z-10">
        <div className="nav justify-between items-center py-2 flex">
          <div className="left-side flex items-center">
            <Link to={"#"} className="text-gray-800 font-bold text-lg">
              Vishwakarma Premier League
            </Link>
          </div>
          <div className="right-side flex items-center space-x-4">
            {/* Notification Bell */}
            <div className="relative">
              <button 
                className="btn btn-ghost btn-circle avatar hover:bg-white" 
                onClick={toggleDropdown} // Toggle dropdown on click
              >
                {/* Display the number of notifications */}
                {notifications.length > 0 && (
                  <span className="badge badge-sm indicator-item bg-red-400 hover:bg-red-600 mb-[-30px] ml-4 text-white">{notifications.length}</span>
                )}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.5 14V11a6.5 6.5 0 00-13 0v3c0 .414-.16.794-.405 1.095L4 17h5m1 0a3 3 0 006 0m-6 0v2a1 1 0 001 1h4a1 1 0 001-1v-2m-6 0h6" />
                </svg>
              </button>
              {/* Dropdown for notifications */}
              {isDropdownOpen && ( // Conditionally render the dropdown
                <ul className="menu menu-sm absolute right-0 mt-2 bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  {notifications.length === 0 ? (
                    <li className="p-2 text-gray-500">No new notifications</li>
                  ) : (
                    notifications.map((notification) => (
                      <li key={notification.id} className="notification-item border-b-[1px] mb-1 grid grid-cols-10 py-2 hover:bg-slate-100 px-[1px]">
                        <p className='col-span-9 hover:bg-slate-100 text-[12px] p-0  leading-4'>

                        {notification.message}
                        </p>
                        <button
                          onClick={() => removeNotification(notification.id)}
                          className=" col-span-1 text-white text-[11px] hover:bg-red-600 bg-red-500 px-[4px] py-[0px] rounded-[2px] mx-auto font-bold h-5"
                        >
                          &#x2715;
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>
            {/* User Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <Link to={'/admin/profile'} className="justify-between">Profile</Link>
                </li>
                <li>
                  <Link onClick={() => {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                  }}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Header;





//   import { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
// import { io } from 'socket.io-client';

// const Header = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   // Initialize Socket.IO connection with polling fallback for compatibility
//   const socket = io('https://vpl-cricket-tournament-server.vercel.app', { transports: ['websocket'] });


//   // Log the socket ID for debugging
//   console.log('Socket connected:', socket.id);

//   useEffect(() => {
//     const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
//     setNotifications(storedNotifications);
//   }, []);

//   // Listen for notifications from server via Socket.IO
//   useEffect(() => {
//     const handleNotificationSystem = (data) => {
//       const newNotification = { message: data.message, id: Date.now() };
//       const updatedNotifications = [...notifications, newNotification];

//       setNotifications(updatedNotifications);
//       localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
//     };

//     // Event listeners for different notification types
//     socket.on('newSponsorType', handleNotificationSystem);
//     socket.on('deleteSponsorType', handleNotificationSystem);
//     socket.on('newUserSignUp', handleNotificationSystem);

//     return () => {
//       socket.off('newSponsorType', handleNotificationSystem);
//       socket.off('deleteSponsorType', handleNotificationSystem);
//       socket.off('newUserSignUp', handleNotificationSystem);
//     };
//   }, [notifications]);

//   const removeNotification = (id) => {
//     const updatedNotifications = notifications.filter(notification => notification.id !== id);
//     setNotifications(updatedNotifications);
//     localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="px-4 sm:ml-64 border-b-[1px] sticky top-0 bg-white z-10">
//       <div className="nav justify-between items-center py-2 flex">
//         <div className="left-side flex items-center">
//           <Link to={"#"} className="text-gray-800 font-bold text-lg">
//             Vishwakarma Premier League
//           </Link>
//         </div>
//         <div className="right-side flex items-center space-x-4">
//           <div className="relative">
//             <button 
//               className="btn btn-ghost btn-circle avatar hover:bg-white" 
//               onClick={toggleDropdown}
//             >
//               {notifications.length > 0 && (
//                 <span className="badge badge-sm indicator-item bg-red-400 hover:bg-red-600 mb-[-30px] ml-4 text-white">
//                   {notifications.length}
//                 </span>
//               )}
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.5 14V11a6.5 6.5 0 00-13 0v3c0 .414-.16.794-.405 1.095L4 17h5m1 0a3 3 0 006 0m-6 0v2a1 1 0 001 1h4a1 1 0 001-1v-2m-6 0h6" />
//               </svg>
//             </button>
//             {isDropdownOpen && (
//               <ul className="menu menu-sm absolute right-0 mt-2 bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
//                 {notifications.length === 0 ? (
//                   <li className="p-2 text-gray-500">No new notifications</li>
//                 ) : (
//                   notifications.map((notification) => (
//                     <li key={notification.id} className="notification-item border-b-[1px] mb-1 grid grid-cols-10 py-2 hover:bg-slate-100 px-[1px]">
//                       <p className='col-span-9 hover:bg-slate-100 text-[12px] p-0 leading-4'>
//                         {notification.message}
//                       </p>
//                       <button
//                         onClick={() => removeNotification(notification.id)}
//                         className=" col-span-1 text-white text-[11px] hover:bg-red-600 bg-red-500 px-[4px] py-[0px] rounded-[2px] mx-auto font-bold h-5"
//                       >
//                         &#x2715;
//                       </button>
//                     </li>
//                   ))
//                 )}
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
