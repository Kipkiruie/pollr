// app/polls/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";


export default function PollsPage() {
return (
<div className="space-y-6">
<div className="flex items-center justify-between">
<h1 className="text-2xl font-semibold">Your Polls</h1>
<Button asChild>
<Link href="/polls/new">New Poll</Link>
</Button>
</div>
<Card>
<CardHeader>
<CardTitle>Empty state</CardTitle>
</CardHeader>
<CardContent>
<p>No polls yet. Create your first one!</p>
</CardContent>
</Card>
</div>
);
}