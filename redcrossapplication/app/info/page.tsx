import React from "react";
import Sidebar from "../components/Sidebar";

function page() {
  return (
    <div>
      <Sidebar />
      <p className="ml-90 text-lg font-medium text-gray-900 dark:text-white">
        {/* BEGIN: ed8c6549bwf9 */}
        <h2>Plan for the emergencies that are most likely to happen where you live</h2>
        <ul>
          <li>Be familiar with natural disaster risks in your community.</li>
          <li>Consider how you will respond to emergencies that can happen anywhere, such as home fires and floods.</li>
          <li>Consider how you will respond to emergencies that are unique to your region, such as volcanoes, tsunamis or tornadoes.</li>
          <li>Think about emergencies that may require your family to shelter in place (such as a winter storm), vs. emergencies that may require evacuation (such as a hurricane).</li>
          <li>Consult our emergency resource library for tips on preparing for, responding to, and recovering from specific disasters.</li>
        </ul>
        <h2>Plan what to do in case you are separated during an emergency</h2>
        <ul>
          <li>Choose two places to meet up:</li>
          <ul>
            <li>Right outside your home in case of a sudden emergency, such as a fire</li>
            <li>Outside your neighborhood, in case you cannot return home or are asked to evacuate</li>
          </ul>
          <li>Choose an out-of-area emergency contact person. It may be easier to text or call long distance if local phone lines are overloaded or out of service. Everyone should carry emergency contact information in writing and saved on their cell phones. Make sure places where your children spend time also have these contact numbers, like at school or daycare.</li>
          <li>Your plan should account for family members who may live elsewhere during the year, such as members of the military on deployment or students away at college, or those who travel frequently.</li>
          <li>How will you need to adapt your plan if they are at home?</li>
          <li>What will you need to do differently if they are away?</li>
        </ul>
        {/* END: ed8c6549bwf9 */}
      </p>
    </div>
  );
}

export default page;
