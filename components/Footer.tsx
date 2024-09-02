import { Copyright } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <section className="container bg-primary mt-6">
      <div className="flex gap-2 text-sm text-gray-200 w-full items-center justify-center">
        <Copyright className="text-sm"></Copyright>
        <a href="http://">Oraimutia Engineering | All rights reserved</a>
      </div>
    </section>
  );
};

export default Footer;
