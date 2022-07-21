interface Transaction {
    id: string;
    date: string;
    value: number;
    type: string;
    origin_account_id: string;
    destination_account_id: string;
}

export { Transaction };
