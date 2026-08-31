import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { query } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        rollNumber: { label: "Roll Number", type: "text", placeholder: "e.g. 2101003" },
        password: { label: "Password/DOB", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.rollNumber || !credentials?.password) {
          return null;
        }

        try {
          const students = await query<any[]>(
            'SELECT * FROM Students WHERE roll_number = ?',
            [credentials.rollNumber]
          );

          const student = students[0];

          if (student) {
            return {
              id: student.id,
              name: student.full_name,
              email: student.email,
              role: "STUDENT"
            };
          }
          return null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET || "nitp-convocation-default-dev-secret"
};
