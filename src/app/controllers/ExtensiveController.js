function Extensive(vlr) {
  const Num = parseFloat(vlr);
  let response;
  // eslint-disable-next-line radix
  if (parseInt(vlr) === 0) {
    response = 'zero';
  } else {
    // eslint-disable-next-line radix
    let vlInteger = parseInt(vlr); // parte inteira do valor

    if (Math.sign(vlInteger) === -1) {
      // eslint-disable-next-line radix
      vlInteger = parseInt(vlInteger.toString().substr(1, vlInteger.length));
    }

    if (vlInteger >= -99999 && vlInteger <= 99999) {
      let rest = Num.toFixed(2) - vlInteger.toFixed(2); // parte fracionária do valor
      rest = rest.toFixed(2);
      const vlrS = vlInteger.toString();
      const cont = vlrS.length;
      let extensive = '';
      let auxNumber;
      let auxNumber2;
      let auxNumber3;

      const unit = [
        '',
        'um',
        'dois',
        'três',
        'quatro',
        'cinco',
        'seis',
        'sete',
        'oito',
        'nove',
        'dez',
        'onze',
        'doze',
        'treze',
        'quatorze',
        'quinze',
        'dezesseis',
        'dezessete',
        'dezoito',
        'dezenove',
      ];

      const hundred = [
        '',
        'cento',
        'duzentos',
        'trezentos',
        'quatrocentos',
        'quinhentos',
        'seiscentos',
        'setecentos',
        'oitocentos',
        'novecentos',
      ];

      const tens = [
        '',
        '',
        'vinte',
        'trinta',
        'quarenta',
        'cinquenta',
        'sessenta',
        'setenta',
        'oitenta',
        'noventa',
      ];

      const qualifyS = ['', 'mil', 'milhão', 'bilhão', 'trilhão'];
      const qualifyP = ['', 'mil', 'milhões', 'bilhões', 'trilhões'];

      // eslint-disable-next-line no-plusplus
      for (let i = cont; i > 0; i--) {
        let verify1 = '';
        let verify2 = 0;
        let verify3 = 0;
        auxNumber2 = '';
        auxNumber3 = '';
        auxNumber = 0;
        auxNumber2 = vlrS.substr(cont - i, 1);
        // eslint-disable-next-line radix
        auxNumber = parseInt(auxNumber2);

        if (i === 14 || i === 11 || i === 8 || i === 5 || i === 2) {
          auxNumber2 = vlrS.substr(cont - i, 2);
          // eslint-disable-next-line radix
          auxNumber = parseInt(auxNumber2);
        }

        if (i === 15 || i === 12 || i === 9 || i === 6 || i === 3) {
          extensive += hundred[auxNumber];
          auxNumber2 = vlrS.substr(cont - i + 1, 1);
          auxNumber3 = vlrS.substr(cont - i + 2, 1);

          if (auxNumber2 !== '0' || auxNumber3 !== '0') extensive += ' e ';
        } else if (auxNumber > 19) {
          auxNumber2 = vlrS.substr(cont - i, 1);
          // eslint-disable-next-line radix
          auxNumber = parseInt(auxNumber2);
          extensive += tens[auxNumber];
          auxNumber3 = vlrS.substr(cont - i + 1, 1);

          if (auxNumber3 !== '0' && auxNumber2 !== '1') extensive += ' e ';
        } else if (
          auxNumber <= 19 &&
          auxNumber > 9 &&
          (i === 14 || i === 11 || i === 8 || i === 5 || i === 2)
        ) {
          extensive += unit[auxNumber];
        } else if (
          auxNumber < 10 &&
          (i === 13 || i === 10 || i === 7 || i === 4 || i === 1)
        ) {
          auxNumber3 = vlrS.substr(cont - i - 1, 1);
          if (auxNumber3 !== '1' && auxNumber3 !== '')
            extensive += unit[auxNumber];
        }

        if (i % 3 == 1) {
          verify3 = cont - i;
          if (verify3 === 0) verify1 = vlrS.substr(cont - i, 1);

          if (verify3 === 1) verify1 = vlrS.substr(cont - i - 1, 2);

          if (verify3 > 1) verify1 = vlrS.substr(cont - i - 2, 3);

          // eslint-disable-next-line radix
          verify2 = parseInt(verify1);

          if (i === 13) {
            if (verify2 === 1) {
              extensive = `${extensive} ${qualifyS[4]}`;
            } else if (verify2 !== 0) {
              extensive = `${extensive} ${qualifyP[4]}`;
            }
          }
          if (i === 10) {
            if (verify2 === 1) {
              extensive = `${extensive} ${qualifyS[3]}`;
            } else if (verify2 !== 0) {
              extensive = `${extensive} ${qualifyP[3]}`;
            }
          }
          if (i === 7) {
            if (verify2 === 1) {
              extensive = `${extensive} ${qualifyS[2]}`;
            } else if (verify2 !== 0) {
              extensive = `${extensive} ${qualifyP[2]}`;
            }
          }
          if (i === 4) {
            if (verify2 === 1) {
              extensive = `${extensive} ${qualifyS[1]}`;
            } else if (verify2 !== 0) {
              extensive = `${extensive} ${qualifyP[1]} e `;
            }
          }
          if (i === 1) {
            if (verify2 === 1) {
              extensive = `um`;
            } else {
              extensive = `${extensive} ${qualifyP[0]}`;
            }
          }
        }

        rest *= 100;
        let aexCent = 0;
        if (rest <= 19 && rest > 0) extensive += ` e ${unit[rest]} Centavos`;
        if (rest > 19) {
          // eslint-disable-next-line radix
          aexCent = parseInt(rest / 10);

          extensive += ` e ${tens[aexCent]}`;
          rest -= aexCent * 10;

          if (rest !== 0) extensive += ` e ${unit[rest]} Centavos`;
          else extensive += ' Centavos';
        }

        response = extensive;
      }
    } else {
      return 'Por favor informe um número Inteiro entre -99999 e 99999!';
    }
  }

  response = response.trim();

  // eslint-disable-next-line radix
  if (parseInt(vlr) === 1) {
    response = 'um';
  }

  // eslint-disable-next-line radix
  if (parseInt(vlr) === 100 || parseInt(vlr) === -100) {
    response = 'cem';
  }

  if (vlr.substr(0, 1) === '-') response = `menos ${response}`;

  if (response.substr(-2) === ' e')
    response = response.substr(0, response.length - 2);

  return response;
}

class ExtensiveController {
  async show(req, res) {
    const { vl } = req.params;

    try {
      // eslint-disable-next-line radix
      if (!Number.isInteger(parseInt(vl)))
        throw new Error(
          'Número inválido. Por favor informe um número inteiro entre -99999 e 99999!'
        );

      // eslint-disable-next-line radix
      if (parseInt(vl) < -99999 || parseInt(vl) > 99999)
        throw new Error('O valor deve estar entre -99999 e 99999!');
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }

    // eslint-disable-next-line radix
    const response = Extensive(vl);

    return res.status(200).json({ extenso: `${response}` });
  }
}

export default new ExtensiveController();
