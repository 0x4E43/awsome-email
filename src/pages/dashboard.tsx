import SideNav from "../components/sidenav";

export default function Dashboard() {
  return (
    <>
      <div className="w-full flex h-screen">
        <SideNav />
        <div className="flex-1 font-sans mt-5 ml-5">
          <h1>Hello Dashboard</h1>
        </div>
      </div>
    </>
  );
}
