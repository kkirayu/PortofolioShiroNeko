"use client";

import { Footer } from "flowbite-react";
import danilAbout from "../asset/danilabout.png";

export function Foot() {
  return (
    <Footer container className="mt-16 bg-blue-50 py-6">
      <div className="container mx-auto text-center">
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://portofolio-shiro-neko.vercel.app/"
            src={danilAbout}
            alt="Flowbite Logo"
            name="Muhammad Danil"
          />
          <Footer.LinkGroup className="flex flex-wrap justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
            <Footer.Link href="#">Instagram</Footer.Link>
            <Footer.Link href="#">LinkedIn</Footer.Link>
            <Footer.Link href="#">TBA</Footer.Link>
            <Footer.Link href="#">TBA</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className="my-4" />
        <Footer.Copyright href="#" by="Muhammad Danil™" year={2025} />
      </div>
    </Footer>
  );
}
