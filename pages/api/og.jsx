import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};
const font = fetch(
  new URL("../../public/fonts/SoinSansNeue-Bold.otf", import.meta.url)
).then((res) => res.arrayBuffer());
const logoImage = fetch(
  new URL("../../public/icon-512x512.png", import.meta.url)
).then((res) => res.arrayBuffer());
export default async function handler(request) {
  const fontData = await font;
  const logoData = await logoImage;
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#0a091b",
            color: "#fef303",
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            fontFamily: "SoinSans",
            flexDirection: "column",
            justifyContent: "center",
            padding: 60,
          }}
        >
          <h2
            style={{
              fontSize: 70,
              lineHeight: 1.5,
            }}
          >
            {title}
          </h2>
          <div
            style={{
              marginTop: 80,

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: 40,
              }}
            >
              Vivek K J | Blogs
            </h2>
            <img src={logoData} height={90} alt="" />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "SoinSans",
            data: fontData,
            style: "bold",
          },
        ],
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
