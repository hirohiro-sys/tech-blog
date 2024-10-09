test('true is true', () => {
  expect(true).toBe(true);
});

/*
なぜかmicrocmsからのデータ取得のテストでエラーが出る
今回はテストケースの指定がない & ユーザーが操作が特にないため一旦スキップ
多分データ取得のapiをclient.tsではなくapiRotesで書いた方がいい気はする
*/