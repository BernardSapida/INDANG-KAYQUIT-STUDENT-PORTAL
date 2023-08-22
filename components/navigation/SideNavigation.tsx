// React Modules
import { Dispatch, SetStateAction } from "react";

// Next-Auth Modules
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

// Next Modules
import Link from "next/link";

// React-Icons
import { AiFillUnlock, AiOutlineDashboard } from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { BiLogOutCircle } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { AiOutlineLogin } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdSubject, MdNotificationsActive, MdGrade, MdPassword } from 'react-icons/md';

// CSS
import style from "@/public/css/side-navigation.module.css";

function SideNavigation({
    showNavigation,
    setShowNavigation
}: {
    showNavigation: boolean,
    setShowNavigation: Dispatch<SetStateAction<boolean>>
}) {
    const router = useRouter();
    const { data: session } = useSession();
    const studentLinks = [
        {
            name: "Dashboard",
            path: "/student/dashboard",
            icon: <AiOutlineDashboard />,
            show: session?.user.role == "student",
        },
        {
            name: "My Profile",
            path: "/student/profile",
            icon: <BsFillPersonLinesFill />,
            show: session?.user.role == "student",
        },
        {
            name: "My Subjects",
            path: "/student/subjects",
            icon: <MdSubject />,
            show: session?.user.role == "student",
        },
        {
            name: "Class Announcements",
            path: "/student/announcements",
            icon: <MdNotificationsActive />,
            show: session?.user.role == "student",
        },
        {
            name: "My Grades",
            path: "/student/grades",
            icon: <MdGrade />,
            show: session?.user.role == "student",
        },
        {
            name: "Change Password",
            path: "/student/password",
            icon: <MdPassword />,
            show: session?.user.role == "student",
        }
    ];
    const teacherLinks = [
        {
            name: "Dashboard",
            path: "/teacher/dashboard",
            icon: <AiOutlineDashboard />,
            show: session?.user.role == "teacher",
        },
        {
            name: "My Profile",
            path: "/teacher/profile",
            icon: <BsFillPersonLinesFill />,
            show: session?.user.role == "teacher",
        },
        {
            name: "Subjects",
            path: "/teacher/subjects",
            icon: <MdSubject />,
            show: session?.user.role == "teacher",
        },
        {
            name: "Class Announcements",
            path: "/teacher/announcements",
            icon: <MdNotificationsActive />,
            show: session?.user.role == "teacher",
        },
        {
            name: "Student Grades",
            path: "/teacher/grades",
            icon: <MdGrade />,
            show: session?.user.role == "teacher",
        },
        {
            name: "Students",
            path: "/teacher/students",
            icon: <IoIosPeople />,
            show: session?.user.role == "teacher",
        },
        {
            name: "Reports",
            path: "/teacher/reports",
            icon: <HiOutlineDocumentReport />,
            show: session?.user.role == "teacher",
        },
        {
            name: "Change Password",
            path: "/teacher/password",
            icon: <MdPassword />,
            show: session?.user.role == "teacher",
        }
    ];
    const links = [
        {
            name: "Login",
            path: "/",
            icon: <AiOutlineLogin />,
            show: !session,
        },
        {
            name: "Forgot Password",
            path: "/forgot-password",
            icon: <AiFillUnlock />,
            show: !session,
        },
        ...studentLinks,
        ...teacherLinks,
    ];

    const signout = async () => {
        setShowNavigation(!showNavigation);
        signOut({ redirect: false });
        router.push("/");
    };

    return (
        <aside className={`${style.aside_navigation} ${showNavigation ? style.active : ''}`}>
            <h2>Navigation</h2>
            <ul>
                {
                    links.map((l, key) => (
                        l.show && <li key={l.path} className={`${l.path === router.route && style.active}`}>
                            <Link href={l.path} onClick={() => setShowNavigation(!showNavigation)}>{l.icon} {l.name}</Link>
                        </li>
                    ))
                }
                {
                    session && (
                        <li>
                            <Link href={"/"} onClick={() => signout()}><BiLogOutCircle /> Logout</Link>
                        </li>
                    )
                }
            </ul>
        </aside>
    );
}

export default SideNavigation;