import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <section className="footer2">
          <div className="footer-logo">
            <h3 className="footer-logo-text">@KudoBoards</h3>
            <h3>Made by: Daniel C. Fuentes</h3>
          </div>

        </section>
        <section className="footer1">
          <ul className="footer-social">
            <li>
              <a
                href="https://www.facebook.com/kudoboard/"
                target="_blank"
                aria-label="Visit us on Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="39"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="m26.602 21.535.878-5.72h-5.488v-3.71c0-1.565.767-3.09 3.224-3.09h2.495v-4.87s-2.264-.386-4.428-.386c-4.52 0-7.474 2.74-7.474 7.698v4.359h-5.024v5.72h5.024V35.36h6.183V21.535h4.61Z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@kudoboard7945"
                target="_blank"
                aria-label="Visit us on YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M33.646 3.814a4.236 4.236 0 0 0-2.98-3C28.037.105 17.496.105 17.496.105s-10.54 0-13.17.71a4.236 4.236 0 0 0-2.98 2.999C.642 6.46.642 11.98.642 11.98s0 5.52.704 8.167c.388 1.46 1.53 2.561 2.98 2.951 2.63.71 13.17.71 13.17.71s10.541 0 13.17-.71c1.45-.39 2.593-1.492 2.98-2.951.705-2.646.705-8.167.705-8.167s0-5.52-.705-8.166ZM14.05 16.992V6.968l8.81 5.012-8.81 5.012Z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/kudoboard/"
                target="_blank"
                aria-label="Visit us on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="28"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M6.613 27.887H.88V9.425h5.733v18.462Zm-2.87-20.98c-1.833 0-3.32-1.518-3.32-3.352a3.32 3.32 0 1 1 6.64 0c0 1.834-1.487 3.352-3.32 3.352Zm24.326 20.98h-5.72V18.9c0-2.142-.044-4.889-2.981-4.889-2.98 0-3.437 2.327-3.437 4.735v9.14h-5.727V9.427h5.498v2.518h.08c.766-1.45 2.635-2.982 5.425-2.982 5.802 0 6.868 3.821 6.868 8.784v10.14h-.006Z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/kudoboard?lang=en"
                target="_blank"
                aria-label="Visit us on Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="27"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M10.834 26.515c12.033 0 18.614-9.97 18.614-18.615 0-.283 0-.565-.019-.846a13.311 13.311 0 0 0 3.264-3.386c-1.194.53-2.46.876-3.757 1.03a6.563 6.563 0 0 0 2.876-3.62c-1.285.763-2.69 1.3-4.155 1.589a6.548 6.548 0 0 0-11.149 5.966A18.575 18.575 0 0 1 3.025 1.798a6.547 6.547 0 0 0 2.026 8.733 6.484 6.484 0 0 1-2.97-.819v.083A6.545 6.545 0 0 0 7.33 16.21a6.529 6.529 0 0 1-2.954.112 6.551 6.551 0 0 0 6.112 4.543 13.124 13.124 0 0 1-9.682 2.712 18.523 18.523 0 0 0 10.028 2.933"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/kudoboard/"
                target="_blank"
                aria-label="Visit us on Pinterest"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="31"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M13.49.155C7.159.155.9 4.377.9 11.21c0 4.345 2.443 6.814 3.925 6.814.61 0 .963-1.703.963-2.185 0-.574-1.463-1.796-1.463-4.185 0-4.962 3.777-8.48 8.666-8.48 4.203 0 7.314 2.388 7.314 6.777 0 3.277-1.315 9.425-5.574 9.425-1.537 0-2.851-1.111-2.851-2.704 0-2.333 1.63-4.592 1.63-6.999 0-4.086-5.797-3.345-5.797 1.592 0 1.037.13 2.185.593 3.13-.852 3.666-2.592 9.129-2.592 12.906 0 1.167.166 2.315.277 3.481.21.235.105.21.426.093 3.111-4.259 3-5.092 4.407-10.666.76 1.445 2.722 2.222 4.278 2.222 6.555 0 9.499-6.388 9.499-12.147C24.6 4.154 19.305.155 13.49.155Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
