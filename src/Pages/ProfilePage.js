import { Link, Outlet } from "react-router-dom"; //outlet is for render child elements

export default function ProfilePage() {
  return (
    <div>
      <h1>This is the Profile Page</h1>
      <ul>
        <li>
          <Link to="get">Get Profile</Link>
        </li>
        <li>
          <Link to="edit">Edit Profile</Link>
        </li>
      </ul>
      <p>Below will be components</p>
      <Outlet />
    </div>
  );
}
