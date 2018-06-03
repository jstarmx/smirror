import five from 'johnny-five';

import Message from '../models/message';

const board = new five.Board();

board.on('ready', async () => {
  const lcd = new five.LCD({
    pins: [7, 8, 9, 10, 11, 12],
  });
  const messages = await Message.all();
  const [message] = messages;
  lcd
    .print(`${messages.indexOf(message) + 1}/${messages.length}`)
    .print(` | ${message.due}`)
    .cursor(0, 1)
    .autoscroll()
    .print(message.text);
});
