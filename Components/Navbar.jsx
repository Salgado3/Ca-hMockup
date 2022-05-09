import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar_Container">
      <h1>
        <Link href="/">CashDrop 🚀</Link>
      </h1>
      <ul className="ul_Navbar">
        {/* <li>
          <Link href="/">Home</Link>
        </li> */}
        <li>
          {" "}
          <a href="https://www.instagram.com/cashdrop.biz/">instagram</a>
        </li>
        <li>
          {" "}
          <a href="https://twitter.com/cashdrop">Twitter</a>
        </li>
        <li>
          <Link href="/jobs">Jobs</Link>
        </li>
        <li>
          <Link href="/demo">Demo</Link>
        </li>
        <li>
          <Link href="/testimonial">Testimonial</Link>
        </li>
        <li>
          <a href="https://apps.apple.com/us/app/cashdrop/id1478976218">
            Get the App
          </a>
        </li>
      </ul>
    </div>
  );
}
