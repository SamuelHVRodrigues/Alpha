interface Account {
    id?: string;
    agency_number: string;
    agency_check_digit: string;
    account_number?: string;
    account_check_digit: string;
    balance: number;
    user_id: string;
    account_password: number;
}

export { Account };
