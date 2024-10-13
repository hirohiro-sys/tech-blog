import { headers } from 'next/headers';
import QiitaPage from "./components/qiitaPage";
import MicrocmsPage from './components/microcmsPage';

export default async function Page() {
  const headersList = headers();
  const host = headersList.get('host');

  const res = await fetch(`http://${host}/api/qiita`, { cache: "no-store" });
  const data = await res.json();

  return (
    <div className="px-5 py-5">
      <QiitaPage data={data} />
      <MicrocmsPage />
    </div>
  );
}
