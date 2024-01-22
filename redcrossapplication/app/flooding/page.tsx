import React from 'react';
import Sidebar from '../components/Sidebar';

function page() {
    return (
        <div>
            <Sidebar />
            <p className="ml-90 text-lg font-medium text-gray-900 dark:text-white">
                <ul>
                    <li>Learn about the types of flooding that can impact your home and community. Types of flooding include flash floods, river floods, storm surges, coastal floods, burn scars, debris flows, ice/debris jams, snowmelt, dry wash, dam breaks, and levee failures.</li>
                    <li>Reach out to your local office of emergency management for advice.</li>
                    <li>Know your home and community’s flood risk. Visit the FEMA Flood Map Service Center and search for your home using your address.</li>
                    <li>Flash floods can be sudden and violent. You may have little to no warning. Designate a place on higher ground that you can get to quickly. Plan to move to higher ground before flooding begins.</li>
                    <li>River floods: Know if you are in an area that is prone to river floods. Review your evacuation plan so that you can leave quickly if officials advise you to evacuate.</li>
                    <li>Storm surge: Be prepared to evacuate immediately if local officials advise. A storm surge can cause water levels to rise quickly and flood large areas in just minutes.</li>
                    <li>Coastal flooding: Be prepared to evacuate immediately if local officials advise. Move inland before flooding begins.</li>
                </ul>
            </p>
        </div>
    );
}

export default page;