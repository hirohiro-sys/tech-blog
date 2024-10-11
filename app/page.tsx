import MicrocmsPage from "./components/microcmsPage";
import QiitaPage from "./components/qiitaPage";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/qiita", { cache: "no-store" });
  const data = await res.json();

  return (
    <div className="px-5 py-5">
      <QiitaPage data={data} />
      <MicrocmsPage />
    </div>
  );
}