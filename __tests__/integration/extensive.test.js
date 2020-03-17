import request from 'supertest';
import app from '../../src/app';

describe('Extensive', () => {
  it('Invalid route', async () => {
    const response = await request(app).get('/');

    expect(response.body.error).toBe('Rota não encontrada!');
  });

  it('should be able to transcript a integer number to description', async () => {
    const response = await request(app).get('/100');

    expect(response.body).toHaveProperty('extenso');
  });

  it('Invalid number', async () => {
    const response = await request(app).get('/asfsdfasdf');

    expect(response.body.error).toBe(
      'Número inválido. Por favor informe um número inteiro entre -99999 e 99999!'
    );
  });

  it('Range number invalid - Start Number', async () => {
    const response = await request(app).get('/-999999');

    expect(response.body.error).toBe(
      'O valor deve estar entre -99999 e 99999!'
    );
  });

  it('Range number invalid - End Number', async () => {
    const response = await request(app).get('/999999');

    expect(response.body.error).toBe(
      'O valor deve estar entre -99999 e 99999!'
    );
  });
});
