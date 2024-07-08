const ERROR_CODES = {
    INVALID_LOGIN_CREDENTIALS: 'пользователь с таким адресом не найден',
    INVALID_PASSWORD: 'Пароль не верный'
}
export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'неизвестная ошибка'
} 