import { Logo } from "@/components/icons";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className=" min-h-screen  bg-gray-50 text-black ">
      <div className="flex items-center h-fit justify-between w-full py-2 px-4">
        <Logo />
        <Link
          href="/sign-in"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-100 rounded-lg bg-black hover:text-white focus:ring-4 focus:ring-gray-600 "
        >
          Sign in
        </Link>
      </div>
      <section className="mt-16">
        <div className="py-6 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            This a demo project
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 ">
            Create an account or sign in to an already existing one
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="/sign-up"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-100 rounded-lg bg-black hover:text-white focus:ring-4 focus:ring-gray-600 "
            >
              Sign Up
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
