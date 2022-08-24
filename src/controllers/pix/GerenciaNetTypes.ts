type Address = {
    street: object,
    number: string | number,
    neighborhood: string,
    zipcode: string,
    complement?: string | null
    state: object,
}

type Juridical_Person = {
    corporate_name: string,
    cnpj: string,
}

type Discount = {
    type: string,   // Valores permitidos: currency e percentage
    value: string,
}

type Conditional_Discount = {
    type: string,
    value: string,
    until_date: string,
}

type Configurations = {
    fine: number,
    interest: number,
}

type Banking_Billet = {
    name: string,
    cpf: string,
    email?: string,
    phone_number?: string,
    birth?: string,
    address?: Address,
    juridical_person?: Juridical_Person,
    expire_at: string,
    discount?: Discount,
    conditional_discount?: Conditional_Discount,
    configurations?: Configurations,
    message?: string,
}

type Payment = {
    banking_billet: Banking_Billet,
}

export {
    Payment,
}