const queriesForWebPage = [
  {
    query: 'Projekt strony internetowej',
    button1Title: 'Indywidualna grafika',
    button2Title: 'Gotowy szablon',
    isTrueComponent: 'select',
    isTrueSelectValues: ['Mam swoją', 'Chcę zlecić Tobie'],
    isFalseComponent: 'select',
    isFalseSelectValues: ['', 'Znajdę sam', 'Zaproponuj coś'],
  },
  {
    query: 'Kolorystyka strony',
    button1Title: 'jasna',
    button2Title: 'ciemna',
  },
  {
    query: 'Podaj kolory, które Ci się podobają',
    isButtonHidden: true,
    isTrueComponent: 'input',
    isSelectedInitialValue: true,
    isTrueComponentPlaceholder: 'Wpisz tu se coś',
  },
  {
    query: 'Ile sekcji przewidujesz na stronie głównej?',
    isButtonHidden: true,
    isTrueComponent: 'select',
    isSelectedInitialValue: true,
    isTrueSelectValues: ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    query: 'Ile zakładek (podstron) przewidujesz?',
    isButtonHidden: true,
    isTrueComponent: 'input',
    isTrueComponentPlaceholder: 'Wpisz liczbę',
    isSelectedInitialValue: true,
  },
  {
    query: 'Czy posiadasz logo?',
    button1Title: 'Tak',
    button2Title: 'Nie',
    button3Title: 'Nie, chcę Tobie zlecić do stworzenia',
    isThirdButton: true,
  },
  {
    query: 'Stylistyka strony internetowej?',
    isSelectedInitialValue: true,
    isTrueComponent: 'select',
    isButtonHidden: true,
    isTrueSelectValues: [
      '',
      'minimalistyczna',
      'elegancka',
      'prosta',
      'poważna',
      'stonowana',
      'czysta',
      'zabawna/wesoła',
      'inne',
    ],
  },
  {
    query: 'Czy posiadasz jakieś materiały (tekst / zdjęcia) do wdrożenia?',
    button1Title: 'Tak',
    button2Title: 'Nie',
    button3Title: 'Nie, chcę Tobie zlecić stworzenie / wybór.',
    isThirdButton: true,
  },

  {
    query: 'Czy strona będzie zintegrowana z jakimś innym systemem?',
    button1Title: 'Tak',
    button2Title: 'Nie',
  },

  {
    query: 'Wersje językowe strony internetowej?',
    button1Title: 'Tak',
    button2Title: 'Nie, tylko polski',
  },

  {
    query: 'Czy strona ma zawierać formularz kontaktowy?',
    button1Title: 'Tak',
    button2Title: 'Nie',
  },

  {
    query: 'Czy użytkownik ma móc się zapisać do newslettera?',
    button1Title: 'Tak',
    button2Title: 'Nie',
  },

  {
    query: 'Czy posiadasz już wykupioną domenę?',
    isTrueComponent: 'textarea',
    isTrueComponentPlaceholder: 'Wpisz nazwę domeny',
    button2Title: 'Nie',
  },

  {
    query: 'Czy posiadasz już wykupiony hosting?',
    isTrueComponent: 'textarea',
    isTrueComponentPlaceholder: 'Wpisz nazwę hostingu',
    isFalseComponent: 'alert',
  },

  {
    query:
      'Czy są jeszcze jakieś dodatkowe elementy techniczne, integracje lub rzeczy, które chcesz dodać do strony?',
    isTrueComponent: 'textarea',
    isTrueComponentPlaceholder: 'Wpisz tutaj....',
  },
];

const queriesForOnlineShop = [
  {
    query: 'Projekt strony internetowej',
    button1Title: 'Indywidualna grafika',
    button2Title: 'Gotowy szablon',
    isTrueComponent: 'select',
    isTrueSelectValues: ['', 'Mam swoją', 'Chcę zlecić Tobie'],
    isFalseComponent: 'select',
    isFalseSelectValues: ['', 'Znajdę sam', 'Zaproponuj coś'],
  },
  {
    query: 'Kolorystyka strony',
    button1Title: 'jasna',
    button2Title: 'ciemna',
  },
  {
    query: 'Podaj kolory, które Ci się podobają',
    isButtonHidden: true,
    isTrueComponent: 'input',
    isSelectedInitialValue: true,
    isTrueComponentPlaceholder: 'Wpisz tu se coś',
  },
  {
    query: 'Ile sekcji przewidujesz na stronie głównej?',
    isButtonHidden: true,
    isTrueComponent: 'select',
    isSelectedInitialValue: true,
    isTrueSelectValues: ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    query: 'Ile zakładek (podstron) przewidujesz?',
    isButtonHidden: true,
    isTrueComponent: 'input',
    isTrueComponentPlaceholder: 'Wpisz liczbę',
    isSelectedInitialValue: true,
  },
  {
    query: 'Czy posiadasz logo?',
    button1Title: 'Tak',
    button2Title: 'Nie',
    button3Title: 'Nie, chcę Tobie zlecić do stworzenia',
    isThirdButton: true,
  },
  {
    query: 'Stylistyka strony internetowej?',
    isSelectedInitialValue: true,
    isTrueComponent: 'select',
    isButtonHidden: true,
    isTrueSelectValues: [
      '',
      'minimalistyczna',
      'elegancka',
      'prosta',
      'poważna',
      'stonowana',
      'czysta',
      'zabawna/wesoła',
      'inne',
    ],
  },
  {
    query: 'Czy posiadasz jakieś materiały (tekst / zdjęcia) do wdrożenia?',
    button1Title: 'Tak',
    button2Title: 'Nie',
    button3Title: 'Nie, chcę Tobie zlecić stworzenie / wybór.',
    isThirdButton: true,
  },
  {
    query: 'Czy będziesz samodzielnie uzupełniał zdjęcia produktowe?',
    button1Title: 'Tak',
    button2Title: 'Nie',
  },
  {
    query: 'Czy sklep będzie zintegrowany z jakimś systemem ERP?',
    isTrueComponent: 'input',
    isTrueComponentPlaceholder: 'Jakim?',
  },
  {
    query: 'Czy sklep będzie zintegrowany z Baselinkerem',
    button1Title: 'Tak',
    button2Title: 'Nie',
  },

  {
    query: 'Jaki system płatności chcesz / masz wdrożony?',
    isTrueComponent: 'checkboxes',
    isSelectedInitialValue: true,
    isButtonHidden: true,
    isTrueComponentPlaceholder: 'Podaj jaki',
    isTrueSelectValues: [
      'Przelewy24 ',
      'Payu ',
      'tPay ',
      'HotPay ',
      'PayNow ',
      'iMoje ',
      'Cashbill ',
    ],
  },

  {
    query: 'Z jakich przewoźników chcesz korzystać?',
    isTrueComponent: 'checkboxes',
    isSelectedInitialValue: true,
    isButtonHidden: true,
    isTrueComponentPlaceholder: 'Podaj jaki',
    isTrueSelectValues: [
      'Inpost Kurier ',
      'Inpost Paczkomaty ',
      'DHL ',
      'UPS ',
      'GLS ',
      'DPD ',
      'FexEx ',
      'Poczta Polska ',
      'Paczka w Ruchu ',
    ],
  },

  {
    query: 'Czy będziesz sprzedawać produkty również na innych marketplace (np. Allegro?)',
    isTrueComponent: 'checkboxes',
    isTrueComponentPlaceholder: 'Podaj jaki',
    isTrueSelectValues: ['Allegro ', 'Erli ', 'Amazon ', 'Olx ', 'eBay ', 'Ceneo '],
  },

  {
    query: 'Czy chcesz wdrożyć jednostronicowy koszyk dla swoich klientów?',
  },

  {
    query: 'Czy poza integracjami powyżej chcesz również coś innego wprowadzić?',
    isTrueComponent: 'textarea',
    isTrueComponentPlaceholder: 'Wpisz coś',
  },

  {
    query:
      'Czy chcesz abyśmy Ci polecili jakieś dodatkowe moduły, które pomogą w lepszej sprzedaży?',
  },
];

export { queriesForOnlineShop, queriesForWebPage };
