import { Sidebar } from "~/components/sidebar";

export default function Threads() {
  return (
    <div className="flex">
        <Sidebar />
      <div className="flex-1 relative">
        <h1 className="text-black">Threads</h1>
      </div>
    </div>
  );
}
