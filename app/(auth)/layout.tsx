import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex min-h-screen flex-col  md:flex-row ">
      <section className="flex-1 bg-brand p-10 flex justify-center ">
        <div>
          <div className="mt-5 space-y-5 text-white">
            <h1 className="text-5xl">Manage your files effortlesly.</h1>
          </div>
        </div>
      </section>
      <div className="flex-1 bg-white p-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
