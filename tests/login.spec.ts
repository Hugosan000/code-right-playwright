import { test, expect } from '@playwright/test';
//import {LoginPage} from '.../pages/login-page'

test('Deve logar com sucesso', async ({ page }) => {

    // vai para a página de login
  await page.goto('https://login-app-qacademy.vercel.app');
 
  const title = page.locator('.App-header p');
  await expect(title).toHaveText('Login');

  // Submeter o form de login


await page.fill('input[placeholder$=usuário]', 'qa')
await page.fill('input[placeholder^=senha]', 'cademy')
await page.click('button >> text=Entrar')

const modalMessage = page.locator('swal2-html-container')
await expect(modalMessage).toHaveText('Sua credenciais são validas :)')
await page.click('button >>> text=Ok')

});

test.only('senha incorreta',async ({ page }) => {

       // vai para a página de login
  await page.goto('https://login-app-qacademy.vercel.app');
 
  const title = page.locator('.App-header p');
  await expect(title).toHaveText('Login');

  // Submeter o form de login


await page.fill('input[placeholder$=usuário]', 'qas')
await page.fill('input[placeholder^=senha]', '123')
await page.click('button >> text=Entrar')

//Validar o toaster

const ToastMessage = page.locator('div[role=status]')
await expect(ToastMessage).toHaveText('Oops! Credenciais inválidas :(')




    
})