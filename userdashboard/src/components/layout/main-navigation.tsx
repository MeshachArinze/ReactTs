import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import "./main-navigation.css";

function MainNavigation() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  function logoutHandler() {
    signOut();
  }
  return (
    <header className="header">
      <Link href="/">
        <a>
          <div className="logo">Dashboard</div>
        </a>
      </Link>
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
