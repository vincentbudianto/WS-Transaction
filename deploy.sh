chmod 400 $pem_key
ssh -o "StrictHostKeyChecking=no" -i $pem_key $machine@$IP "rm -rf ws-transactions && mkdir ws-transactions"
scp -o "StrictHostKeyChecking=no" -i $pem_key * $machine@$IP:~/ws-transactions
ssh -o "StrictHostKeyChecking=no" -i $pem_key $machine@$IP "bash" < ./run.sh

