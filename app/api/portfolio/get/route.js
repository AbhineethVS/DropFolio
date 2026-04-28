export async function GET() {
  return Response.json({ ok: true, message: "get scaffold" }, { status: 501 });
}
