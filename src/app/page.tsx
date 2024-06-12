import InfoCard from "@/components/InfoCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 p-10">
      <section>
        <h1 className="text-teal-500 font-semibold text-[3.5rem] tracking-tight px-8 my-10">
          Passwords app
        </h1>
        <div className="grid grid-cols-2 gap-8 mt-6">
          <InfoCard
            tintColor="#14b8a6"
            title="All your credentials in one place"
            description="From passwords to verifications and security alerts, find them all
        securely stored in the Passwords app."
            detailContent="Backed by secure end-to-end encryption and seamless syncing, the
              Passwords app safely stores all your credentials. It lets you
              filter and sort accounts by recently created, credential type, or
              whether an account is in a shared group, to quickly find accounts
              you're looking for."
          >
            <div className="relative h-full w-4/5 mx-auto mt-20">
              <Image
                src="/iphone-mock.png"
                alt="Passwords app"
                fill
                sizes="50vh"
                className="object-cover object-top"
              />
            </div>
          </InfoCard>
          <InfoCard
            tintColor="#14b8a6"
            title="Securely synced across devices and apps"
            detailContent="Access the Passwords app on iPhone, iPad, Mac, and Apple Vision Pro, and on Windows with the iCloud for Windows app. All the passwords sync securely across your devices, and if you use AutoFill, your passwords will automatically be added to the Passwords app."
          >
            <div className="w-full mt-[50%]">
              <p className="text-[3.5rem] font-medium leading-tight tracking-tight">
                Works across iPhone, iPad, Mac, Apple Vision Pro, and Windows.
              </p>
            </div>
          </InfoCard>
        </div>
      </section>
    </main>
  );
}
