import Twit from 'twit';
import SyslogServer from 'syslog-server';
import moment from 'moment';
import config from './config'; // see Twit docs to put your OAuth keys here

const server = new SyslogServer();
const T = new Twit(config);

server.on('message', (log) => {
  const tweet = {
    status: `Downbot: Oi Vivo, mais uma queda de conexão às ${moment(log.date).format('LTS')}, obrigado pelo péssimo serviço prestado. #vivo #twitterbot`,
  };
  const isConnected = log.message.indexOf('PPPoE: Connected') > -1;
  if (isConnected) {
    T.post('statuses/update', tweet, (err) => console.log(err));
  }
});

server.start({ port: 2209 });
