import { useState } from 'react';
import { Group, Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './SimpleHeader.css';
import { Link } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  { link: '/blog', label: 'Blog' },
  { link: '/photos', label: 'Photos' },
  { link: '/about', label: 'About' }
];

export default function SimpleHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(findActivePage());

  const items = links.map((link) => (
    <Link
      to={link.link}
      key={link.label}
      className="link"
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="header">
      <Flex className="inner">
        <a className="title" href="/">
            <img 
                src="/static/assets/yoodimigo.png"
                className="image"
            />
        </a>
        <Group className="navigation" gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Flex>
    </header>
  );

  function findActivePage() {
    let url: string = window.location.href;
    let currentPage: string = url.slice(url.lastIndexOf('/'));
    return currentPage;
  }

}