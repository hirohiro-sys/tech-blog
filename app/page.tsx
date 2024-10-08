import MicrocmsPage from "./components/microcmsPage";
import QiitaPage from "./components/qiitaPage";

export default async function Page() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/qiita`, { cache: "no-store" });
  const data = await res.json();

  return (
    <div className="px-5 py-5">
      <QiitaPage data={data} />
      <MicrocmsPage />
    </div>
  );
}