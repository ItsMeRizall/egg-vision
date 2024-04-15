import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ href, children, childimg }) {
  return (
      <Link className='flex' to={href}>
          <div className={'flex items-center font-medium hover:underline transition-all hover:rounded-lg'}>
          <img src={childimg} alt=""/>
          {children}
          </div>
      </Link>
  );
}