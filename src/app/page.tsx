// page.tsx
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

export default function Home() {
	return (
		<div className="height-100%">
			<main className="flex">
				<Sidebar />
				<Main />
			</main>
		</div>
	);
}
