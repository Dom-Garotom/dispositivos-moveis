const validPhone = (phone: string | number) => {

    if (typeof phone === 'string') {
        const unformattedPhone = phone.trim().replace(/\D/g, '')
        return unformattedPhone.length < 11 ? 'Número inválido' : 'Seu número é válido'
    }


    if (typeof phone === 'number') {
        const unformattedPhone = phone.toString().trim().replace(/\D/g, '')
        return unformattedPhone.length < 11 ? 'Número inválido' : 'Seu número é válido'
    }

    return 'Formato inválido';
}



console.log(validPhone('(11) 91234-5678'));
console.log(validPhone('119123456'));       
console.log(validPhone(11987654321));      