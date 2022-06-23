import { Page, expect } from '@playwright/test'

export class LoginPage{
  readonly page: Page

  constructor(page: Page) {

    this.page = Page
}
}

async go() {

  await this.page.goto('https://login-app-qacademy.vercel.app');
 
  const title = page.locator('.App-header p');
  await expect(title).toHaveText('Login');

}

async sigIn(user: string, password: string){
  await this.page.fill('input[placeholder$=usuário]', user)
  await this.page.fill('input[placeholder^=senha]', password)
  await this.page.click('button >> text=Entrar')


}

async userLoggedin() {

const modalMessage = page.locator('swal2-html-container')
await expect(modalMessage).toHaveText('Sua credenciais são validas :)')
await this.page.click('button >>> text=Ok')
}