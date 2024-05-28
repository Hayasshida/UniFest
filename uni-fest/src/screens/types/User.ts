export default interface User {
    id?: string;
    email: string;
    password: string;
    full_name: string;
    age?: number;
    phone: string;
    cpf: string;
    token?: string;
}