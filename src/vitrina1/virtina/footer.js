import React from "react";

function Footer() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          {new Date().getFullYear()}  Footer
          </a>
        </div>
      </nav>
    </>
  );
}

export default Footer;
