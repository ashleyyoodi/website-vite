import { PasswordInput, Popover, UnstyledButton } from '@mantine/core';
import './Footer.css';
import React, { useEffect } from 'react';

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

  const adminAuthorizeUrl = import.meta.env.VITE_API_URL + "/admin/authorize";
  const passwordInput = React.useRef<HTMLInputElement>(null);

  return (
    <div className="footer">
      <div className="inner">
        {
            /* <Group className="links">{items}</Group> */
            <div className='login'>
                <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
                    <Popover.Target>
                        <UnstyledButton>Login</UnstyledButton>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <PasswordInput 
                            ref={passwordInput}
                            label="Password" 
                            placeholder="" 
                            size="xs" 
                            onKeyDown={onKeyDown}/>
                    </Popover.Dropdown>
                </Popover>
            </div>
        }
      </div>
    </div>
  );

  function onKeyDown(e: { key: string; }) {
    if (e.key === "Enter") {
        checkPassword(passwordInput.current?.value);
    }
  }

  function checkPassword(input: string | undefined) {
        fetch(adminAuthorizeUrl + "?input=" + input)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
  }

}