[21:53, 08/03/2024] Haritha: :root {

    /**
     * colors
     */
  
    --rich-black-fogra-29_50: hsl(210, 26%, 11%, 0.5);
    --rich-black-fogra-29-1: hsl(210, 26%, 11%);
    --rich-black-fogra-29-2: hsl(210, 50%, 4%);
    --silver-metallic: hsl(212, 9%, 67%);
    --coquelicot_20: hsla(12, 98%, 52%, 0.2);
    --coquelicot_10: hsla(12, 98%, 52%, 0.1);
    --sonic-silver: hsl(0, 0%, 47%);
    --cadet-gray: hsl(214, 15%, 62%);
    --light-gray: hsl(0, 0%, 80%);
    --coquelicot: hsl(12, 98%, 52%);
    --gainsboro: hsl(0, 0%, 88%);
    --white_20: hsl(0, 0%, 100%, 0.2);
    --white_10: hsl(0, 0%, 100%, 0.1);
    --black_10: hsl(0, 0%, 0%, 0.1);
    --white: hsl(0, 0%, 100%);
  
    /**
     * typography
     */
  
    --ff-catamaran: 'Catamaran', sans-serif;
    --ff-rubik: 'Rubik', sans-serif;
  
    --fs-1: 3.8rem;
    --fs-2: 3rem;
    --fs-3: 2.5rem;
    --fs-4: 2rem;
    --fs-5: 1.8rem;
    --fs-6: 1.5rem;
  
    --fw-900: 900;
    --fw-800: 800;
    --fw-700: 700;
    --fw-500: 500;
  
    /**
     * spacing
     */
  
    --section-padding: 80px;
  
    /**
     * shadow
     */
  
    --shadow-1: 0 0 20px var(--black_10);
    --shadow-2: 0px 10px 24px var(--coquelicot_20);
  
    /**
     * border radius
     */
  
    --radius-10: 10px;
    --radius-8: 8px;
    --radius-5: 5px;
  
    /**
     * transition
     */
  
    --transition-1: 0.25s ease;
    --transition-2: 0.5s ease;
    --cubic-in: cubic-bezier(0.51, 0.03, 0.64, 0.28);
    --cubic-out: cubic-bezier(0.33, 0.85, 0.4, 0.96);
  
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  li { list-style: none; }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  a,
  img,
  span,
  input,
  button,
  strong,
  ion-icon { display: block; }
  
  img { height: auto; }
  
  input,
  button {
    background: none;
    border: none;
    font: inherit;
  }
  
  input { width: 100%; }
  
  button { cursor: pointer; }
  
  ion-icon { pointer-events: none; }
  
  address { font-style: normal; }
  
  html {
    font-family: var(--ff-rubik);
    font-size: 10px;
    scroll-behavior: smooth;
  }
  
  body {
    background-color: var(--white);
    color: var(--sonic-silver);
    font-size: 1.6rem;
    line-height: 1.6;
  }
  
  :focus-visible { outline-offset: 4px; }
  
  ::-webkit-scrollbar { width: 5px; }
  
  ::-webkit-scrollbar-track { background-color: var(--light-gray); }
  
  ::-webkit-scrollbar-thumb { background-color: var(--coquelicot); }
  
  ::-webkit-scrollbar-thumb:hover { background-color: var(--rich-black-fogra-29-1); }

  .container { padding-inline: 15px; }
  
  .section { padding-block: var(--section-padding); }
  
  .bg-dark {
    background-color: var(--rich-black-fogra-29-1);
    color: var(--silver-metallic);
  }
  
  .has-bg-image {
    background-repeat: no-repeat;
    background-position: top left;
  }
  
  .has-before,
  .has-after {
    position: relative;
    z-index: 1;
  }
  
  .has-before::before,
  .has-after::after {
    content: "";
    position: absolute;
  }
  
  .h1,
  .h2,
  .h3 {
    font-family: var(--ff-catamaran);
    line-height: 1.25;
  }
  
  .h1 {
    color: var(--white);
    font-size: var(--fs-1);
    font-weight: var(--fw-900);
  }
  
  .h2,
  .h3 {
    color: var(--rich-black-fogra-29-1);
    font-weight: var(--fw-800);
  }
  
  .h2 { font-size: var(--fs-2); }
  
  .h3 { font-size: var(--fs-4); }
  
  .section-text { font-size: var(--fs-6); }
  
  .btn {
    max-width: max-content;
    font-size: var(--fs-6);
    text-transform: uppercase;
    font-weight: var(--fw-500);
    padding: 15px 35px;
    border-radius: var(--radius-8);
    transition: var(--transition-1);
  }
  
  .btn-primary {
    background-color: var(--coquelicot);
    color: var(--white);
  }
  
  .btn-primary:is(:hover, :focus) {
    background-color: var(--white);
    color: var(--coquelicot);
    box-shadow: var(--shadow-2);
  }
  
  .btn-secondary {
    background-color: var(--white);
    color: var(--coquelicot);
  }
  
  .btn-secondary:is(:hover, :focus) { background-color: var(--rich-black-fogra-29-1); }
  
  .w-100 { width: 100%; }
  
  .circle,
  .abs-img { position: absolute; }
  
  .circle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -56%);
    width: 100%;
    z-index: -1;
    animation: rotate360 15s linear infinite;
  }
  
  @keyframes rotate360 {
    0% { transform: translate(-50%, -56%) rotate(0); }
    100% { transform: translate(-50%, -56%) rotate(1turn); }
  }
  
  .circle-2 { animation-direction: reverse; }
  
  .hero-subtitle,
  .section-subtitle {
    font-family: var(--ff-catamaran);
    font-weight: var(--fw-700);
    text-transform: uppercase;
    max-width: max-content;
  }
  
  .section-subtitle {
    background-color: var(--coquelicot_10);
    color: var(--coquelicot);
    padding: 8px 20px;
    border-radius: var(--radius-8);
  }
  
  .section-title { margin-block: 18px 35px; }
  
  .btn-link {
    --color: var(--white);
  
    color: var(--color);
    font-size: var(--fs-6);
    font-weight: var(--fw-500);
    text-transform: uppercase;
    max-width: max-content;
    transition: var(--transition-1);
  }
  
  .btn-link::before {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color);
    transition: var(--transition-1);
  }
  
  .btn-link:is(:hover, :focus) { --color: var(--coquelicot); }
  
  .text-center { text-align: center; }
  
  .img-holder {
    aspect-ratio: var(--width) / var(--height);
    background-color: var(--light-gray);
    overflow: hidden;
  }
  
  .img-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .has-scrollbar {
    display: flex;
    gap: 25px;
    overflow-x: auto;
    padding-block-end: 30px;
    scroll-snap-type: inline mandatory;
  }
  
  .scrollbar-item {
    min-width: 100%;
    scroll-snap-align: start;
  }
  
  .has-scrollbar::-webkit-scrollbar { height: 10px; }
  
  .has-scrollbar::-webkit-scrollbar-track,
  .has-scrollbar::-webkit-scrollbar-thumb { border-radius: 50px; }
  
  .has-scrollbar::-webkit-scrollbar-thumb:hover { background-color: var(--coquelicot); }
  
  .has-scrollbar::-webkit-scrollbar-button { width: calc(25% - 25px); }
  
  
  
  
  
  /HEADER/
  
  .header .btn { display: none; }
  
  .header {
    background-color: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-block: 10px;
    box-shadow: var(--shadow-1);
    z-index: 4;
  }
  
  .header > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    color: var(--rich-black-fogra-29-1);
    font-family: var(--ff-catamaran);
    font-size: 3.5rem;
    font-weight: var(--fw-900);
    display: flex;
    align-items: center;
    margin-inline-start: -8px;
  }
  
  .logo ion-icon {
    color: var(--coquelicot);
    font-size: 40px;
    transform: rotate(90deg) translate(-2px, -5px);
  }
  
  .nav-open-btn {
    background-color: var(--coquelicot);
    padding: 20px 15px;
    border-radius: var(--radius-8);
  }
  
  .nav-open-btn .line {
    background-color: var(--white);
    width: 30px;
    height: 3px;
  }
  
  .nav-open-btn .line:not(:last-child) { margin-block-end: 6px; }
  
  .nav-open-btn .line:nth-child(2) {
    width: 25px;
    margin-inline-start: auto;
  }
  
  .navbar {
    background-color: var(--coquelicot);
    color: var(--white);
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    visibility: hidden;
    transition: 0.25s var(--cubic-in);
  }
  
  .navbar.active {
    visibility: visible;
    transform: translateY(-100%);
    transition: 0.5s var(--cubic-out);
  }
  
  .nav-close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    background-color: var(--rich-black-fogra-29-1);
    color: var(--white);
    font-size: 40px;
    padding: 10px;
    border-radius: var(--radius-8);
  }
  
  .navbar-link {
    font-family: var(--ff-catamaran);
    font-size: var(--fs-4);
    text-align: center;
    padding-block: 10px;
    margin-block-end: 20px;
    transition: var(--transition-1);
  }
  
  .navbar-link:is(:hover, :focus, .active) { color: var(--rich-black-fogra-29-1); }
  
  
  
  
  
  /HERO/
  
  .hero {
    color: var(--cadet-gray);
    text-align: center;
    padding-block-start: calc(var(--section-padding) + 80px);
    padding-block-end: 0;
    overflow: hidden;
  }
  
  .hero::after {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 240px;
    background-color: var(--coquelicot);
    z-index: -1;
  }
  
  .hero-content { margin-block-end: 90px; }
  
  .hero-subtitle {
    background-color: var(--white_10);
    color: var(--white);
    margin-inline: auto;
    padding: 5px;
    padding-inline-end: 15px;
    border-radius: var(--radius-8);
  }
  
  .hero-subtitle .strong {
    display: inline-block;
    background-color: var(--coquelicot);
    padding: 2px 15px;
    margin-inline-end: 15px;
    border-radius: var(--radius-5);
  }
  
  .hero-title { margin-block: 30px 8px; }
  
  .hero .section-text { margin-block-end: 40px; }
  
  .hero .btn { margin-inline: auto; }
  
  .hero-banner { position: relative; }
  
  .abs-img-1 {
    top: 20px;
    right: -50px;
    width: 190px;
  }
  
  .abs-img-2 {
    bottom: -50px;
    left: -40px;
    width: 280px;
  }
  
  .hero .abs-img { animation: move 3s linear infinite alternate; }
  
  @keyframes move {
    0% { transform: translate(0, 0); }
    50% { transform: translate(-5px, 10px); }
    100% { transform: translate(5px, 20px); }
  }
  
  .hero .abs-img-2 { animation-direction: alternate-reverse; }
  
  
  
  
  
  /ABOUT/
  
  .about { overflow: hidden; }
  
  .about-banner { margin-block-end: 50px; }
  
  .about-banner::after {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: var(--coquelicot);
    border-radius: var(--radius-10);
    z-index: -2;
  }
  
  .about-banner .abs-img {
    bottom: 0;
    left: 0;
    z-index: -1;
    animation: moveUp 2.5s ease infinite;
  }
  
  @keyframes moveUp {
    0%,
    30%,
    60%,
    100% { transform: translateY(0); }
  
    20% { transform: translateY(-30px); }
  
    40% { transform: translateY(-15px); }
  }
  
  .about .section-text:not(:last-of-type) { margin-block-end: 15px; }
  
  .about .wrapper { margin-block-start: 30px; }
  
  .about-coach {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-block-end: 30px;
  }
  
  .about .coach-avatar {
    overflow: hidden;
    border-radius: 50%;
  }
  
  .about .coach-name {
    font-weight: var(--fw-700);
    margin-block-end: 5px;
  }
  
  .about .coach-title { font-size: var(--fs-6); }
  
  .about .btn-primary:is(:hover, :focus) {
    background-color: var(--rich-black-fogra-29-1);
    color: var(--white);
    box-shadow: none;
  }
  
  
  
  
  
  /VIDEO/
  
  .video {
    padding-block: 0;
    margin-block-end: -250px;
  }
  
  .video-card {
    background-color: var(--light-gray);
    background-size: cover;
    background-position: center;
    height: 500px;
    border-radius: var(--radius-10);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .video-card::before {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--rich-black-fogra-29_50);
    z-index: -1;
  }
  
  .video-card .card-title {
    color: var(--white);
    font-size: var(--fs-3);
  }
  
  .play-btn {
    background-color: var(--coquelicot);
    color: var(--white);
    width: max-content;
    font-size: 30px;
    padding: 25px;
    border-radius: 50%;
    margin-block: 25px 35px;
    animation: pulse 2s ease infinite;
  }
  
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 var(--coquelicot); }
    100% { box-shadow: 0 0 0 40px transparent; }
  }
  
  
  
  
  
  /CLASS/
  
  .class { padding-block-start: calc(var(--section-padding) + 250px); }
  
  .class .section-subtitle { margin-inline: auto; }
  
  .class .section-title { color: var(--white); }
  
  .class-card {
    background-color: var(--white);
    border-radius: var(--radius-10);
    height: 100%;
    overflow: hidden;
  }
  
  .class-card .card-banner img { transition: var(--transition-2); }
  
  .class-card:is(:hover, :focus-within) .card-banner img {
    transform: scale(1.1);
  }
  
  .class-card .card-content { padding: 24px; }
  
  .class-card .title-wrapper {
    display: flex;
    align-items: center;
  }
  
  .class-card .title-icon {
    padding-inline-end: 20px;
    margin-inline-end: 20px;
    min-width: max-content;
    border-inline-end: 1px solid var(--gainsboro);
  }
  
  .class-card .card-title { transition: var(--transition-1); }
  
  .class-card .card-title:is(:hover, :focus) { color: var(--coquelicot); }
  
  .class-card .card-text {
    color: var(--sonic-silver);
    font-size: var(--fs-6);
    margin-block: 16px 12px;
  }
  
  .class-card .progress-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--ff-catamaran);
    color: var(--rich-black-fogra-29-1);
    font-size: var(--fs-6);
    font-weight: var(--fw-800);
    margin-block-end: 8px;
  }
  
  .class-card .progress-bg {
    background-color: var(--coquelicot_10);
    border-radius: 50px;
  }
  
  .class-card .progress-bar {
    background-color: var(--coquelicot);
    height: 10px;
    border-radius: inherit;
  }
  
  
  
  
  
  /BLOG/
  
  .blog .section-subtitle { margin-inline: auto; }
  
  .blog-card {
    background-color: var(--white);
    border: 1px solid var(--light-gray);
    border-radius: var(--radius-10);
    height: 100%;
    overflow: hidden;
  }
  
  .blog-card .card-banner { position: relative; }
  
  .blog-card .card-banner img { transition: var(--transition-2); }
  
  .blog-card:is(:hover, :focus) .card-banner img {
    transform: scale(1.1);
  }
  
  .blog-card .card-meta {
    background-color: var(--coquelicot);
    color: var(--white);
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 8px 20px;
    font-size: var(--fs-6);
    font-weight: var(--fw-500);
    text-transform: uppercase;
  }
  
  .blog-card .card-content { padding: 25px; }
  
  .blog-card .card-title { transition: var(--transition-1); }
  
  .blog-card .card-title:is(:hover, :focus) { color: var(--coquelicot); }
  
  .blog-card .card-text {
    font-size: var(--fs-6);
    margin-block: 8px 12px;
  }
  
  .blog-card .btn-link { --color: var(--coquelicot); }
  
  .blog-card .btn-link:is(:hover, :focus) { --color: var(--rich-black-fogra-29-1); }
  
  
  
  
  
  /FOOTER/
  
  .footer { font-size: var(--fs-6); }
  
  .footer-top .container {
    display: grid;
    gap: 50px;
  }
  
  .footer .logo { color: var(--white); }
  
  .footer-brand-text { margin-block: 25px; }
  
  .footer-top .wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }
  
  .footer-brand-list li:not(:last-child) { margin-block-end: 15px; }
  
  .footer-brand-title,
  .footer-list-title {
    color: var(--white);
    font-family: var(--ff-catamaran);
  }
  
  .footer-list-title {
    font-size: var(--fs-4);
    font-weight: var(--fw-800);
    margin-block-end: 28px;
  }
  
  .footer-list-title::before {
    bottom: 0;
    width: 70px;
    height: 1px;
    background-color: var(--coquelicot);
  }
  
  .footer-list > li:not(:first-child) { margin-block-start: 12px; }
  
  .footer-link { transition: var(--transition-1); }
  
  .footer-link:not(.address):is(:hover, :focus) { color: var(--coquelicot); }
  
  .footer-list-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
  
  .footer-list-item .icon {
    background-color: var(--coquelicot);
    color: var(--white);
    font-size: 24px;
    padding: 8px;
    border-radius: 50px;
  }
  
  .footer-form {
    position: relative;
    margin-block-end: 30px;
  }
  
  .footer-form .input-field {
    background-color: var(--white);
    color: var(--rich-black-fogra-29-1);
    padding-block: 18px;
    padding-inline: 30px 80px;
    border-radius: var(--radius-10);
  }
  
  .footer-form .btn {
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    padding: 0;
    font-size: 26px;
    padding-inline: 12px;
  }
  
  .footer-form .btn-primary:is(:hover, :focus) {
    background-color: var(--rich-black-fogra-29-1);
    color: var(--white);
    box-shadow: none;
  }
  
  .social-list {
    display: flex;
    gap: 15px;
  }
  
  .social-link {
    background-color: var(--white_20);
    color: var(--white);
    padding: 13px;
    border-radius: 50%;
    transition: var(--transition-1);
  }
  
  .social-link:is(:hover, :focus) { background-color: var(--coquelicot); }
  
  .footer-bottom {
    background-color: var(--rich-black-fogra-29-2);
    color: var(--white);
    text-align: center;
    padding-block: 15px;
  }
  
  .copyright-link {
    display: inline-block;
    color: var(--coquelicot);
  }
  
  .footer-bottom-list {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-block-start: 10px;
  }
  
  .footer-bottom-link {
    padding-inline-start: 20px;
    transition: var(--transition-1);
  }
  
  .footer-bottom-link::before {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 10px;
    height: 10px;
    background-color: var(--coquelicot);
    border-radius: 50%;
  }
  
  .footer-bottom-link:is(:hover, :focus) { color: var(--coquelicot); }
  
  
  
  
  
  /BACK TO TOP/
  
  .back-top-btn {
    position: fixed;
    bottom: 20px;
    right: 40px;
    background-color: var(--coquelicot);
    color: var(--rich-black-fogra-29-1);
    font-size: 20px;
    padding: 11px;
    border-radius: 50%;
    border: 2px solid var(--rich-black-fogra-29-1);
    visibility: hidden;
    opacity: 0;
    transition: var(--transition-1);
    z-index: 4;
  }
  
  .back-top-btn.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(-10px);
  }
  
  
  
  
  
  /MEDIA QUERIES/
  
  /**
   * responsive for larger than 575px screen
   */
  
  @media (min-width: 575px) {
  
    /**
     * CUSTOM PROPERTY
     */
  
    :root {
  
      /**
       * typography
       */
  
      --fs-1: 5.8rem;
      --fs-2: 4rem;
  
    }
  
  
  
    /**
     * REUSED STYLE
     */
  
    .container {
      max-width: 540px;
      width: 100%;
      margin-inline: auto;
    }
  
    .hero-subtitle,
    .section-subtitle { font-size: var(--fs-5); }
  
  
  
    /**
     * HEADER
     */
  
    .header .container {
      max-width: unset;
      padding-inline: 30px;
    }
  
  
  
    /**
     * HERO
     */
  
    .hero-content { padding-inline: 40px; }
  
    .hero-subtitle .strong { padding-block: 6px; }
  
    .hero::after { height: 340px; }
  
    .abs-img-1 {
      top: 130px;
      right: -10px;
      width: 230px;
    }
  
    .abs-img-2 {
      bottom: 20px;
      left: -40px;
      width: 310px;
    }
  
  
  
    /**
     * ABOUT
     */
  
    .about .wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 40px;
    }
  
    .about-coach { margin-block-end: 0; }
  
  
  
    /**
     * VIDEO
     */
  
    .video-card .card-title { --fs-3: 3.5rem; }
  
  
  
    /**
     * FOOTER
     */
  
    .footer-top .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 25px;
    }
  
  }
  
  
  
  
  
  /**
   * responsive for larger than 768px screen
   */
  
  @media (min-width: 768px) {
  
    /**
     * CUSTOM PROPERTY
     */
  
    :root {
  
      /**
       * typography
       */
  
      --fs-2: 4.5rem;
  
    }
  
  
  
    /**
     * REUSED STYLE
     */
  
    .container { max-width: 720px; }
  
    .scrollbar-item { min-width: calc(50% - 12.5px); }
  
  
  
    /**
     * HERO
     */
  
    .hero-banner {
      max-width: max-content;
      margin-inline: auto;
    }
  
    .abs-img-1 {
      top: 140px;
      right: 50px;
    }
  
  
  
    /**
     * FOOTER
     */
  
    .footer-bottom .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .footer-bottom-list { margin-block-start: 0; }
  
  }
  
  
  
  
  
  /**
   * responsive for larger than 992px screen
   */
  
  @media (min-width: 992px) {
  
    /**
     * REUSED STYLE
     */
  
    .container,
    .header .container { max-width: 960px; }
  
    
  
    /**
     * HEADER
     */
  
    .nav-open-btn,
    .nav-close-btn { display: none; }
  
    .header .btn { display: block; }
  
    .header {
      background-color: transparent;
      box-shadow: none;
      padding-block: 30px;
      transition: var(--transition-1);
    }
  
    .header.active {
      transform: translateY(-100%);
      background-color: var(--white);
      padding-block: 20px;
      box-shadow: var(--shadow-1);
      animation: slideIn 0.5s ease forwards;
    }
  
    @keyframes slideIn {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(0); }
    }
  
    .header .container { gap: 30px; }
  
    .header .logo { color: var(--white); }
  
    .header.active .logo { color: var(--rich-black-fogra-29-1); }
  
    .navbar,
    .navbar.active {
      all: unset;
      margin-inline-start: auto;
    }
  
    .navbar-list {
      display: flex;
      gap: 10px;
    }
  
    .navbar-link {
      color: var(--white);
      font-size: unset;
      padding: 0 10px;
      margin-block-end: 0;
    }
  
    .header.active .navbar-link { color: var(--rich-black-fogra-29-1); }
  
    .header .navbar-link:is(:hover, :focus, .active) { color: var(--coquelicot); }
  
    .header.active .btn {
      background-color: var(--coquelicot);
      color: var(--white);
    }
  
    .header.active .btn:is(:hover, :focus) { background-color: var(--rich-black-fogra-29-1); }
  
  
  
    /**
     * HERO
     */
  
    .hero {
      background-size: contain;
      text-align: left;
    }
  
    .hero::before {
      content: "";
      position: absolute;
      top: -1000px;
      left: -500px;
      width: 1500px;
      height: 1500px;
      background-image: radial-gradient(circle, var(--coquelicot_20) 20%, transparent 70% 100%);
      z-index: -1;
    }
  
    .hero .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 25px;
    }
  
    .hero-content {
      padding-inline: 0;
      margin-block-end: 0;
    }
  
    .hero-subtitle,
    .hero .btn { margin-inline: 0; }
  
    .hero::after {
      width: 330px;
      height: 100%;
      left: auto;
      right: 0;
    }
  
  
  
    /**
     * ABOUT
     */
  
    .about .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 50px;
    }
  
    .about-banner { margin-block-end: 0; }
  
    .about .wrapper { gap: 30px; }
  
  
  
    /**
     * FOOTER
     */
  
    .footer-top .container {
      grid-template-columns: 0.85fr 0.5fr 1fr 0.85fr;
      column-gap: 50px;
    }
  
  }
  
  
  
  
  
  /**
   * responsive for larger than 1200px screen
   */
  
  @media (min-width: 1200px) {
  
    /**
     * CUSTOM PROPERTY
     */
  
    :root {
  
      /**
       * typography
       */
  
      --fs-1: 7rem;
      --fs-2: 5.5rem;
      --fs-4: 2.2rem;
      --fs-5: 2rem;
  
      /**
       * spacing
       */
  
      --section-padding: 120px;
  
    }
  
  
  
    /**
     * REUSED STYLE
     */
  
    .container,
    .header .container { max-width: 1140px; }
  
    .btn {
      padding: 18px 45px;
      border-radius: var(--radius-10);
    }
  
    .section-subtitle { --fs-5: 2.2rem; }
  
    .has-scrollbar { gap: 30px; }
  
    .scrollbar-item { min-width: calc(33.33% - 20px); }
  
  
  
    /**
     * HEADER
     */
  
    .header .container { padding-inline: 0; }
  
  
  
    /**
     * HERO
     */
  
    .hero::after { width: 420px; }
  
    .hero .section-text { --fs-6: 1.8rem; }
  
    .abs-img-1 {
      top: 170px;
      right: -30px;
      width: 260px;
    }
  
    .abs-img-2 {
      bottom: 60px;
      left: -80px;
      width: 360px;
    }
  
  
  
    /**
     * ABOUT
     */
  
    .about .wrapper { gap: 40px; }
  
  
  
    /**
     * CLASS, BLOG
     */
  
    :is(.class-card, .blog-card) .card-content { padding: 30px; }
  
    .blog-card .card-meta { padding: 15px 30px; }
  
  
  
    /**
     * FOOTER
     */
  
    .footer-top .container { grid-template-columns: 1fr 0.6fr 0.9fr 1fr; }
  
  }]
[21:53, 08/03/2024] Haritha: css
[21:53, 08/03/2024] Haritha: 'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});