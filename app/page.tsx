'use client'; 

import { useEffect, useState } from 'react';
// import MicrocmsPage from "./components/microcmsPage";
import QiitaPage from "./components/qiitaPage";

export default function Page() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    // データを取得する関数
    const fetchData = async () => {
      try {
        const res = await fetch('/api/qiita', { cache: "no-store" });
        const result = await res.json();
        setData(result); // データを状態にセット
      } catch (error) {
        console.error('データ取得エラー:', error);
      }
    };

    fetchData(); // useEffect内でデータをフェッチ
  }, []); // 空の依存配列で初回レンダリング時のみ実行

  return (
    <div className="px-5 py-5">
      {/* 取得したデータをQiitaPageに渡す */}
      <QiitaPage data={data} />
      {/* <MicrocmsPage /> */}
    </div>
  );
}
