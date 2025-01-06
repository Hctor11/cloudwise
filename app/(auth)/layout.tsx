import React from "react";
/* eslint-disable tailwindcss/classnames-order */

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <section className="flex flex-1 justify-center p-2 bg-brand rounded-lg">
        <div className="flex size-full p-2 bg-[url('/UI/login/bg-min.png')] bg-cover bg-center bg-no-repeat rounded-lg">
          <div className="mt-5 space-y-5 text-white">
            <h1 className="text-5xl">Manage your files effortlessly.</h1>
          </div>
        </div>
      </section>
      <div className="flex flex-1 items-center justify-center p-10 bg-white">
        {children}
      </div>
    </div>
  );
};

export default Layout;
