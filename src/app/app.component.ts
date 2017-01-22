import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
      <HeaderBlock></HeaderBlock>
    
      <main role="main" class="site__main main">
        <nav class="main__nav nav">
      
          <NavigationListBlock></NavigationListBlock>
      
          <FooterBlock></FooterBlock>
      
        </nav>
        <article class="main__content content">
          <div class="content__wrapper">
              
              <router-outlet></router-outlet>
            
          </div>
        </article>
      </main>
  `
})
export class AppComponent { }
