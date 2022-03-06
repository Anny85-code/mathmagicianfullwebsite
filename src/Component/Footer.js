import React from 'react';

const Footer = () => {
  const Foter = () => new Date().getFullYear();

  return (
    <footer>
      ©
      {Foter()}
      <a href="https://www.linkedin.com/in/aniekan-udo-665b65213/">

        &nbsp;Anny
      </a>
    </footer>
  );
};
export default Footer;
