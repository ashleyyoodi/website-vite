import { PasswordInput, Popover, UnstyledButton } from '@mantine/core';
import './Footer.css';
import React, { useEffect } from 'react';
import { checkAdminAuthorized } from '../service/UserService';

// const links = [
//   { link: '#', label: 'Contact' },
//   { link: '#', label: 'Login' }
// ];

export function Footer() {
//   const items = links.map((link) => (
//     <Anchor
//       c="dimmed"
//       key={link.label}
//       href={link.link}
//       lh={1}
//       onClick={(event) => event.preventDefault()}
//       size="sm"
//     >
//       {link.label}
//     </Anchor>
//   ));

  const isLoggedIn = sessionStorage.getItem("isAuthorized");
  const passwordInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="footer">
      <div className="inner">
        {
            /* <Group className="links">{items}</Group> */
            <div className='login'>
              {
                isLoggedIn ?
                <p>Logged In</p>
                : <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
                    <Popover.Target>
                        <UnstyledButton>Login</UnstyledButton>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <PasswordInput 
                            ref={passwordInputRef}
                            label="Password" 
                            placeholder="" 
                            size="xs" 
                            onKeyDown={onKeyDown}/>
                    </Popover.Dropdown>
                </Popover>
              }
            </div>
        }
      </div>
    </div>
  );

  function onKeyDown(e: { key: string; }) {
    if (e.key === "Enter") {
        checkPassword(passwordInputRef.current?.value);
    }
  }

  function checkPassword(input: string | undefined) {
    sessionStorage.setItem("isAuthorized", JSON.stringify(checkAdminAuthorized(input)));
    location.reload();
  }

}