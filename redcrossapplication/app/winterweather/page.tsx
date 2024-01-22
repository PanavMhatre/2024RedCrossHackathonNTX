import React from 'react';
import Sidebar from '../components/Sidebar';


function Page() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="ml-90 p-5 bg-white">
                <h1 className="text-lg font-medium text-gray-900 dark:text-white">Winter Storm Warning</h1>
                <p className="paragraph">
                    Issued when hazardous winter weather in the form of heavy snow, heavy freezing rain, or heavy sleet is imminent or occurring. Winter Storm Warnings are usually issued 12 to 24 hours before the event is expected to begin.
                </p>
                <h1 className="text-lg font-medium text-gray-900 dark:text-white">Winter Storm Watch</h1>
                <p className="paragraph">
                    Alerts the public to the possibility of a blizzard, heavy snow, heavy freezing rain, or heavy sleet. Winter Storm Watches are usually issued 12 to 48 hours before the beginning of a Winter Storm.
                </p>
                <h1 className="text-lg font-medium text-gray-900 dark:text-white">Winter Storm Advisory</h1>
                <p className="paragraph">
                    Issued for accumulations of snow, freezing rain, freezing drizzle, and sleet which will cause significant inconveniences and, if caution is not exercised, could lead to life-threatening situations.
                </p>
            </div>
        </div>
    );
}

export default Page;
