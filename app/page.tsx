import { headers } from 'next/headers';
import QiitaPage from "./components/qiitaPage";
import MicrocmsPage from './components/microcmsPage';

export default async function Page() {
  const headersData = headers()
  const host = headersData.get('host')
  const protocol = headersData.get('x-forwarded-proto') ?? host.startsWith('localhost') ? 'http' : 'https'
  const apiBase = `${protocol}://${host}`

  const data = await fetch(`${apiBase}/api/qiita`, { cache: "no-store" }).then(data => data.json());

  // const data = await res.json();

  return (
    <div className="px-5 py-5">
      <QiitaPage data={data} />
      <MicrocmsPage />
    </div>
  );
}
