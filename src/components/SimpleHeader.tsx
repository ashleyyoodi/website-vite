import { useState } from 'react';
import { Container, Group, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/photos', label: 'Photos' },
  { link: '/coconut', label: 'Coconut' }
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(findActivePage());

  const items = links.map((link) => (
    <a
      key={link.label}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        window.location.href = link.link;
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Text>Yoodi</Text>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );

  function findActivePage() {
    let url: string = window.location.href;
    let currentPage: string = url.slice(url.lastIndexOf('/'));
    return currentPage;
  }

}