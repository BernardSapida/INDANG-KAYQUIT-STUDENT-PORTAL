// React-Icons
import { BsFillSunFill, BsCloudSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

export const getGreeting = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
        return <h1><BsFillSunFill /> Good morning, Bernard Sapida!</h1>;
    } else if (currentHour >= 12 && currentHour < 17) {
        return <h1><BsCloudSunFill /> Good afternoon, Bernard Sapida!</h1>;
    } else {
        return <h1><BsFillMoonStarsFill /> Good evening, Bernard Sapida!</h1>;
    }
}