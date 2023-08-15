import { GetServerSidePropsContext } from "next";
import { DefaultSession, NextAuthOptions, Session } from "next-auth";
import NextAuth, { getServerSession } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: number;
      role: string;
      email: string;
      password: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    email: string;
    password: string;
    data: any;
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const user = token.data;

      if (session) {
        session.user.id = user?.id;
        session.user.role = user?.role;
        session.user.email = user?.email;
        session.user.password = user?.password;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.data = user;
      }

      return token;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const authResponse = await axios.post(
          `${process.env.NEXTAUTH_URL}/api/v1/users/authenticate`,
          {
            email: credentials?.email,
            password: credentials?.password,
          }
        );

        const user = authResponse.data || null;

        if (!user) throw new Error(JSON.stringify(authResponse.data));

        return { ...user };
      },
    })
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 24 * 60 * 60, // 24 hours
  },
  session: {
    maxAge: 24 * 60 * 60, // 24 hours
  },
};

export default NextAuth(authOptions);

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};