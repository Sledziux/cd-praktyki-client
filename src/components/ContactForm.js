import React from 'react';

const ContactForm = ({ setState }) => {
  const handleOnChange = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.placeholder]: e.target.value };
    });
  };
  return (
    <div>
      <h2>Formularz kontaktowy</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <ContactFormInput onChange={handleOnChange} name="Nazwa firmy" />
        <ContactFormInput onChange={handleOnChange} name="Imię i nazwisko" />
        <ContactFormInput onChange={handleOnChange} name="Numer telefonu" type="tel" />
        <ContactFormInput onChange={handleOnChange} name="Adres e-mail" type="email" />

        <textarea
          style={{ width: '400px' }}
          onChange={handleOnChange}
          placeholder="Branża w jakiej działa firma i ma powstać strona"
        />

        <textarea
          style={{ width: '400px' }}
          onChange={handleOnChange}
          placeholder="Oferowane produkty / usługi"
        />

        <textarea
          style={{ width: '400px' }}
          onChange={handleOnChange}
          placeholder="Dotychczasowe działania reklamowe / marketingowe"
        />

        <textarea
          style={{ width: '400px' }}
          onChange={handleOnChange}
          placeholder="Strony konkurencji, które się podobają i co się w nich podoba"
        />

        <textarea
          style={{ width: '400px' }}
          onChange={handleOnChange}
          placeholder="Przewidywany budżet na stronę internetową (opcjonalnie)"
        />
      </form>
    </div>
  );
};

const ContactFormInput = ({ name, type = 'text', onChange }) => {
  return (
    <div className="py-2 my-2">
      <input placeholder={name} onChange={onChange} type={type} />
    </div>
  );
};

export default ContactForm;
