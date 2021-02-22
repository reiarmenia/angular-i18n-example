import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styles: [
  ]
})
export class LanguageSwitcherComponent implements OnInit {


  languages: {value: string, display: string}[] = [
    {value: 'en-US', display: 'English'},
    {value: 'fr', display: 'Français'},
    {value: 'ja', display: '日本語'}
  ];

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  changeLanguage(targetLanguage: string): void {
      if (targetLanguage !== this.locale) {

        const windowUrlSplit = window.location.href.split('/');
        const baseUrl = windowUrlSplit.slice(0, 3).join('/');

        const appSplit = this.router.routerState.snapshot.url.split('/');
        const appUrl = [targetLanguage].concat(appSplit[0] === this.locale ? appSplit.slice(1) : appSplit).filter(item => item !== '').join('/');

        // // TODO: IMPORTANT!!!! --- WE MUST ENSURE DATA IS SAVED IN LOCAL HERE
        // console.warn('THE APP IS CURRENTLY NOT SAVING DATA, THIS SHOULD BE USED FOR TESTING ONLY, navigation will occur in 5 seconds');
        const target = `${baseUrl}/${appUrl}`;
        console.log('target', target);
        setTimeout(() => {
          window.location.href = target;
        }, 100);
      }
  }

  resolveLanguageName(localeName: string): string {

    return this.languages.filter(x => x.value === localeName)[0]?.display ?? 'Unknown';

  }

}
