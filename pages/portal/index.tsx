import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });
        console.log(session?.user.role)

        if (!session) {
            return {
                props: {},
                redirect: {
                    destination: "/",
                },
            };
        } else if (session?.user.role == "Admin") {
            return {
                props: {},
                redirect: {
                    destination: "/admin",
                },
            };
        } else if (session?.user.role == "Student") {
            return {
                props: {},
                redirect: {
                    destination: "/user",
                },
            };
        }

        return {
            props: {
                user: session.user,
            },
        };
    } catch (error) {
        return {
            props: {
                error: "Error",
            },
        };
    }
};

function Portal({ user }: { user: any; }) {
    return (<h1>Portal Page</h1>);
}

export default Portal;