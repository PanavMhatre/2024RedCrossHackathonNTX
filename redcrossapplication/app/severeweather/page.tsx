import React from 'react';
import Sidebar from '../components/Sidebar';

function page() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='ml-90 p-5 bg-white'>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
                One of the fundamental steps in emergency preparedness is creating a personalized plan tailored to your specific needs and capabilities. One size does not fit all, and your plan should reflect your unique circumstances, including mobility limitations, medical conditions, and communication preferences. Here’s a detailed breakdown of what to include in your personalized emergency plan:
            </p>
            <ul className="list-disc text-gray-900 dark:text-white">
                <li>Emergency Contacts: Compile a comprehensive list of essential contacts, including family members, friends, neighbors, and healthcare providers. Ensure that they are aware of your emergency plan and how to reach you during an emergency. Keep both digital and hard copies of this list in your emergency kit.</li>
                <li>Medications and Medical Supplies: If you have any chronic medical conditions, it’s crucial to ensure you have an ample supply of necessary medications, medical equipment, and any assistive devices you rely on. Maintain a list of medications, dosages, and allergies, and make sure it’s readily accessible. Keep a spare set of prescription glasses or contact lenses if you use them.</li>
                <li>Evacuation Route: Identify accessible evacuation routes from your home, workplace, or any other frequently visited locations. Also, research nearby shelter options that are accessible for individuals with disabilities. Inform a trusted friend or family member about your evacuation plan and establish a reliable means of communication.</li>
                <li>Mobility Aids and Assistive Devices: Make sure your mobility aids (e.g., wheelchairs, walkers, canes) are in good condition and have spare parts if needed. Ensure that your assistive devices (e.g., hearing aids, communication devices) are functioning correctly, and keep extra batteries or chargers in your emergency kit.</li>
                <li>Service Animals and Pets: If you have service animals or pets, have a plan in place for their care during an emergency. Ensure you have enough pet food, water, and any necessary medications for them as well.</li>
                <li>Emergency Alerts and Notifications: Sign up for emergency alerts and notifications through your local government, weather apps, or relevant agencies. Many offer text message alerts or automated phone calls. Research whether there are specific services available in your area for individuals with disabilities to receive alerts tailored to their needs.</li>
            </ul>
            </div>
        </div>
    );
}

export default page;