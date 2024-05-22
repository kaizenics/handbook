import { Sidebar } from "~/components/sidebar";

export default function Start() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 relative">
        <h1 className="text-black">Start</h1>
      </div>
    </div>
  );
}
