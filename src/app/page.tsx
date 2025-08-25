// page.tsx
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

export default function Home() {

	return (
		<div className="h-screen">
			<main className="flex min-h-full">
				<Sidebar />
				<Main />
			</main>
		</div>
	);
}
