import client from './client';

// ログイン
export const login = ({ username, password }) =>
    client.post('/api/auth/login', { username, password });

// 会員登録
export const register = ({ username, password }) =>
    client.post('/api/auth/register', { username, password });

// ログイン状態確認
export const check = () => client.get('api/auth/check');