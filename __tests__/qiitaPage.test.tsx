import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import QiitaPage from '../app/components/qiitaPage';

describe('QiitaPageのテスト', () => {
  const mockData = [
    { url: 'https://example.com/1', thumbnail: 'thumb1.jpg', title: 'Title 1', createdAt: '2023-01-01' },
    { url: 'https://example.com/2', thumbnail: 'thumb2.jpg', title: 'Title 2', createdAt: '2023-01-02' },
    { url: 'https://example.com/3', thumbnail: 'thumb3.jpg', title: 'Title 3', createdAt: '2023-01-03' },
    { url: 'https://example.com/4', thumbnail: 'thumb4.jpg', title: 'Title 4', createdAt: '2023-01-04' },
    { url: 'https://example.com/5', thumbnail: 'thumb5.jpg', title: 'Title 5', createdAt: '2023-01-05' },
  ];
 
  test('初期状態はQiita記事が4つ表示される', () => {
    render(<QiitaPage data={mockData} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
  });

  test('もっとみるボタンを押したらQiita記事5つ表示される', () => {
    render(<QiitaPage data={mockData} />);
    const button = screen.getByText('個人記事をもっとみる');
    fireEvent.click(button);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(5);
  });

  // 厳密な画面遷移のテストは難しいらしいので、正しいリンクが設定されているかをテストする
  test('記事をクリックするとtarget="_blank"が設定されたリンクが存在する', () => {
    render(<QiitaPage data={mockData} />);
    const link = screen.getByText('Title 1');
    expect(link.closest('a')).toHaveAttribute('target', '_blank');
    expect(link.closest('a')).toHaveAttribute('href', 'https://example.com/1');
  });
});