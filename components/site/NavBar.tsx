// components/site/NavBar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function NavBar() {
return (
<header className="w-full border-b bg-background">
<nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
<Link href="/polls" className="font-semibold">Pollr</Link>
<div className="flex items-center gap-2">
<Button asChild variant="ghost">
<Link href="/polls">Polls</Link>
</Button>
<Button asChild variant="secondary">
<Link href="/login">Login</Link>
</Button>
</div>
</nav>
</header>
);
}