import { BsFillSunFill, BsCloudSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

export const getGreeting = (fullname: string) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
        return <h1><BsFillSunFill /> Good morning, {fullname}!</h1>;
    } else if (currentHour >= 12 && currentHour < 17) {
        return <h1><BsCloudSunFill /> Good afternoon, {fullname}!</h1>;
    } else {
        return <h1><BsFillMoonStarsFill /> Good evening, {fullname}!</h1>;
    }
}