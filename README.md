# テックブログ
QiitaとMicroCMSから記事を取得しているテックブログサイトです。

![スクリーンショット 2024-10-09 21.59.12.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3279945/62c587a8-1274-09db-4866-e34d581dc9cf.png)

# 環境設定
プロジェクトのルートディレクトリに .env.local ファイルを作成し、以下のように環境変数を設定します。
```env
API_KEY="XXXXX"
SERVICE_DOMAIN="XXXXX"
QIITA_ACCESS_TOKEN="XXXXX"
```

# 起動方法
```
npx create-next-app --ts --example with-turbopack
cd projectのディレクトリ
npm install
npm run dev
```
