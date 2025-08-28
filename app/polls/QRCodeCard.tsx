// components/polls/QRCodeCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function QRCodeCard() {
return (
<Card>
<CardHeader>
<CardTitle>Share via QR</CardTitle>
</CardHeader>
<CardContent>
<div className="h-40 w-40 bg-muted/50 grid place-items-center rounded">
<span className="text-sm text-muted-foreground">QR code here</span>
</div>
</CardContent>
</Card>
);
}