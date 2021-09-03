import { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/Link";
import { useRouter } from "next/dist/client/router";


interface ActiveLinkProps extends LinkProps{
  children:ReactElement;
  activeClassName:string;
}
export function ActiveLink({children,activeClassName,...props}:ActiveLinkProps) {
  const {asPath} = useRouter();

  const className = asPath ===props.href
  ?activeClassName
  :'';

  return(
    <Link {...props}>
      {cloneElement(children,{
        className
      })}
    </Link> 
  );
}