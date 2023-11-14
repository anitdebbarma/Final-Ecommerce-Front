import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <FooterWrapper>
      <FooterContent>
        {/* Customize your footer content here */}
        <CopyrightText>
          &copy; {currentYear} by{" "}
          <StyledLink href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            MyShop
          </StyledLink>{" "}
          | All Rights Reserved
        </CopyrightText>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
