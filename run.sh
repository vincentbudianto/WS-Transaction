cd ws-transactions
npm install
pm2 delete --silent web_service_transaksi || ':'
pm2 start npm run start --name web_service_transaksi
pm2 status