import React from "react";
import Input from "../../components/Input"; 
import Button from "../../components/Button";

const Login: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center h-screen gap-2">
        <div className="max-w-[456px] lg:min-w-[456px] flex flex-col gap-8 py-4">
          <div>
            <img src="/img/brand.png" alt="Brand" />
          </div>
          <div>
            <h1 className="font-semibold text-[38px] text-Secondary">
              Get Started
            </h1>
            <p className="text-lg font-medium text-[#71747D]">
              Welcome to Werkbron ATS - Enter your credentials to continue
            </p>
          </div>
          <hr className="m-0 p-0 border-[#F3F4F6]" />
          <form className="flex flex-col gap-8 w-full">
            <Input type="email" placeholder="Enter Email">
              Email
            </Input>
            <Input type="password" placeholder="Enter Password">
              Password
            </Input>
            <Button>Login</Button>
          </form>
        </div>
        <div className="relative w-full h-screen lg:flex items-center justify-end hidden overflow-hidden">
          <div className="relative max-h-screen">
            <img
              className="rounded-md max-h-screen object-contain"
              src="/img/Rectangle 591.png"
              alt="Background"
            />
            <img
              className="absolute bottom-0 right-0 z-10 max-h-full object-contain"
              src="/img/Browser.png"
              alt="Browser UI"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
