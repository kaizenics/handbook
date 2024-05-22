import { Sidebar } from "~/components/sidebar";

export default function Start() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 relative">
        <h1 className="text-black">Start</h1>
        <p className="text-black text-3xl">Project IDX Test Run</p>
      </div>
    </div>
  );
}
