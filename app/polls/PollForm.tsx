// components/polls/PollForm.tsx
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function PollForm() {
return (
<form className="space-y-4">
<div className="space-y-2">
<Label htmlFor="title">Title</Label>
<Input id="title" placeholder="e.g. What's your favorite framework?" />
</div>
<div className="grid gap-2 md:grid-cols-2">
<div className="space-y-2">
<Label htmlFor="opt1">Option 1</Label>
<Input id="opt1" placeholder="React" />
</div>
<div className="space-y-2">
<Label htmlFor="opt2">Option 2</Label>
<Input id="opt2" placeholder="Vue" />
</div>
</div>
<Button disabled>Create (stub)</Button>
</form>
);
}