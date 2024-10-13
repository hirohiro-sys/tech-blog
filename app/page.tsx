import { headers } from 'next/headers';
import QiitaPage from "./components/qiitaPage";
import MicrocmsPage from './components/microcmsPage';

export default async function Page() {
  const headersList = headers();
  const host = headersList.get('host');

  // プロトコルの取得: X-Forwarded-Proto ヘッダーから取得する
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  // console.log(`protocol: ${protocol}`);

  const res = await fetch(`${protocol}://${host}/api/qiita`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Fetch failed with status: ${res.status}`);
  }

  const data = await res.json();

  return (
    <div className="px-5 py-5">
      <QiitaPage data={data} />
      <MicrocmsPage />
    </div>
  );
}
