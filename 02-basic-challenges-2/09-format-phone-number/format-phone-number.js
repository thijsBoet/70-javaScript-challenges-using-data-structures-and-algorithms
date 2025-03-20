function formatPhoneNumber(num) {
    const formatted = num.join('');
    return `(${formatted.slice(0, 3)}) ${formatted.slice(3, 6)}-${formatted.slice(6)}`
}

module.exports = formatPhoneNumber;
