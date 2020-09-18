import five from 'johnny-five';
import moment from 'moment';

import Message from '../models/message';

const board = new five.Board();

board.on('ready', async () => {
  const lcd = new five.LCD({
    pins: [7, 8, 9, 10, 11, 12],
  });
  const messages = await Message.all();
  const [message] = messages;
  lcd
    .clear()
    .print(`${messages.indexOf(message) + 1}/${messages.length}     `)
    .print(moment(message.due).format('DD/MM/YY'))
    .cursor(1, 0)
    .print(message.text);
});
