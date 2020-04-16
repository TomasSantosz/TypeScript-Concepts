interface TechObject {
    title: string,
    experience: number,
}

interface createUserData {
    name ?: string;
    email: string;
    password: string;
    //Array com vario tipos
    techs: Array<string | TechObject>;
    //Array de tipo unico
    //techs: string[];
}

export default function createUser({ name, email, password }: createUserData ){
    const user = {
        name,
        email,
        password
    }

    return user;
}