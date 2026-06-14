const getWhatsAppNumber = () => process.env.REACT_APP_WHATSAPP_NUMBER || '';

const formatPhoneDisplay = (number) => {
  if (number.length === 12 && number.startsWith('91')) {
    return `+${number.slice(0, 2)} ${number.slice(2, 7)} ${number.slice(7)}`;
  }
  return number;
};

export const getContactPhone = () => ({
  raw: getWhatsAppNumber(),
  display: formatPhoneDisplay(getWhatsAppNumber()),
  tel: getWhatsAppNumber() ? `tel:+${getWhatsAppNumber()}` : '',
});
