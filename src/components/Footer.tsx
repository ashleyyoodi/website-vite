import { Anchor, Group } from '@mantine/core';
import './Footer.css';

const links = [
//   { link: '#', label: 'Contact' },
  { link: '#', label: 'Login' }
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className="footer">
      <div className="inner">
        <Group className="links">{items}</Group>
      </div>
    </div>
  );
}