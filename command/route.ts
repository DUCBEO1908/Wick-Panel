let currentCommand: any = null;

export async function POST(req: Request) {
  const body = await req.json();

  currentCommand = body;

  console.log("COMMAND RECEIVED:", body);

  return Response.json({ success: true });
}

export async function GET() {
  const cmd = currentCommand;
  currentCommand = null;

  return Response.json({ command: cmd });
}