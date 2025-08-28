// app/polls/new/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PollForm from "@/app/polls/PollForm"



export default function NewPollPage() {
return (
<Card>
<CardHeader>
<CardTitle>Create a New Poll</CardTitle>
</CardHeader>
<CardContent>
<PollForm />
</CardContent>
</Card>
);
}