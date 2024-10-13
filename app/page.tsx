import { headers } from 'next/headers';
import QiitaPage from './components/qiitaPage';
import MicrocmsPage from './components/microcmsPage';

export default async function Page() {
  const headersData = headers();
  
  const protocol = headersData.get('x-forwarded-proto') || 'http';
  const host = headersData.get('host');

  const apiBase = `${protocol}://${host}`;
  const res = await fetch(`${apiBase}/api/qiita`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Fetch failed with status: ${res.status}`);
  }

  const data = await res.json();

  return (
    <div className="px-5 py-5">
      {/* データを表示するコンポーネント */}
      <QiitaPage data={data} />
      <MicrocmsPage />
    </div>
  );
}
