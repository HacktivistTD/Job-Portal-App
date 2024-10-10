import { fetchProfileAction } from "@/actions";
import HomepageButtonControls from "@/components/homepage-button-controls";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Fragment } from "react";


const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]


async function Home() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  if (user && !profileInfo?._id) redirect("/onboard");

  return (
    <div>
      <Fragment>
        {/* Hero Section */}
        <section className="relative w-full h-full min-h-screen pb-10">
          <div className="w-full h-full relative">
            <div className="flex flex-col-reverse lg:flex-row gap-10 mt-16">
              <section className="w-full lg:w-[50%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10">
                <div className="w-full flex justify-start flex-col h-auto lg:pt-7">
                  <span className="flex space-x-2">
                    <span className="block w-14 mb-2 dark:border-green-500 border-b-2 border-gray-700"></span>
                    <span className="font-medium dark:text-white text-gray-600">
                      One Stop Solution to Find Jobs
                    </span>
                  </span>
                  <h1 className="text-3xl dark:text-green-500 mt-5 lg:text-7xl text-black font-extrabold">
                    Build your best job community starting from here.
                  </h1>
                  <div className="w-full mt-6 flex items-center text-white justify-start gap-2">
                    <HomepageButtonControls
                      user={JSON.parse(JSON.stringify(user))}
                      profileInfo={profileInfo}
                    />
                  </div>
                </div>
              </section>
              <section className="relative w-full lg:w-[50%] flex items-center justify-end">
                <img
                  src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                  alt="Hero"
                  className="h-full w-full object-contain z-10"
                />
              </section>
            </div>
          </div>
        </section>
      </Fragment>

      {/* Our Team Section */}
      <section className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-orange-500">Latest Job Openings</h2>
            <p className="mt-4 text-lg dark:text-white">
            Explore the newest job opportunities tailored to your skills and interests. Whether you're looking to start your career or take the next step, we've got a variety of roles available across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Job 1 */}
            <div className="text-center">
              <img
                className="w-40 h-40 mx-auto rounded-full object-cover"
                src="/images/dev.jpg"
                alt="dev"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-green-500">
              Software Development
              </h3>
              <p className="mt-2 text-sm text-gray-500">Full Stack, Front-End, Back-End, and DevOps roles.</p>
            </div>

            {/* Job 2 */}
            <div className="text-center">
              <img
                className="w-40 h-40 mx-auto rounded-full object-cover"
                src="/images/ui.jpg"
                alt="ui"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-green-500">
              Design and Creative
              </h3>
              <p className="mt-2 text-sm text-gray-500">UX/UI Designers, Graphic Designers, and Creative Directors.</p>
            </div>

            {/* Job  3 */}
            <div className="text-center">
              <img
                className="w-40 h-40 mx-auto rounded-full object-cover"
                src="/images/marketing.jpg"
                alt="marketing"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-green-500">
              Marketing and Sales
              </h3>
              <p className="mt-2 text-sm text-gray-500">Digital Marketers, Sales Executives, and Content Specialists.</p>
            </div>
          </div>
        </div>
      </section>
      <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 ">
              <dt className="text-base leading-7 text-gray-500">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-orange-500">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
  );
}

export default Home;
