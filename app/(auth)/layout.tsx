import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex min-h-screen">
    <section className="bg-brand p-10">
      <div>
        <Image
          src="/icon.svg"
          alt="CloudWise Logo"
          width={24}
          height={24}
        />

        <div className="space-y-5 text-white">
          <h1 className="h1">Manage your files</h1>
          <p className="body-1">
            A safety place to store all your files
          </p>
        </div>
      </div>
    </section>
    {children}
    </div>;
};

export default Layout;
