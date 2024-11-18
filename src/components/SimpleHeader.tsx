import { useState } from 'react';
import { Container, Group, Burger, Text, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import { Link } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  { link: '/blog', label: 'Blog' },
  { link: '/photos', label: 'Photos' },
  { link: '/about', label: 'About' }
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(findActivePage());

  const items = links.map((link) => (
    <Link
      to={link.link}
      key={link.label}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Flex className={classes.inner}>
        <a className={classes.title} href="/">
            <img 
                src="/static/assets/yoodimigo.png"
                className={classes.image}
            />
        </a>
        <Group className={classes.navigation} gap={5} visibleFrom="xs">
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