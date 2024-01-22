import React from 'react';
import Sidebar from '../components/Sidebar';

function page() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="ml-90 p-5 bg-white">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                    Basic First Aid Items in Your Kit:
                </h2>
                <ul className="list-disc ml-4">
                    <li>Sterile gloves</li>
                    <li>Sterile dressings</li>
                    <li>Soap and antibiotic towelettes</li>
                    <li>Antibiotic ointment</li>
                    <li>Adhesive bandages in a variety of sizes</li>
                    <li>Eye wash solution</li>
                    <li>Thermometer</li>
                    <li>Prescription medications you take every day</li>
                    <li>Prescribed medical supplies such as glucose and blood pressure monitoring equipment and supplies</li>
                    <li>First Aid book</li>
                    <li>Non-prescription drugs (aspirin or non-aspirin pain reliever, anti-diarrhea medication, antacid, laxative)</li>
                </ul>
                <p className="text-lg font-medium text-gray-900 dark:text-white mt-5">
                    Sanitation
                </p>
                <p>
                    Adequate sanitation is a significant environmental concern after a disaster. When sewer pipes are damaged or the sanitation system goes off-line, entire communities, including people and habitats are at risk. Be prepared to take care of your waste for the same period of time as you’ve prepared food and water.
                </p>
            </div>
        </div>
    );
}

export default page;