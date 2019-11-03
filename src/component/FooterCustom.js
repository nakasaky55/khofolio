import React from "react";

export default function FooterCustom() {
  return (
    <footer id="footer">
      <div>Nguyen Anh Khoa</div>
      <div className="social-link">
        <h2>Keep in touch with me via</h2>
        <a href="https://fb.com/anhkhoa8436" target="_blank">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://github.com/nakasaky55" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/khoa-anh-a9159915b/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}
