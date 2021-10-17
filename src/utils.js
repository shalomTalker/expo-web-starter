import emailjs from 'emailjs-com';
emailjs.init('user_FaC8IjGGsa6BENz6n6laj');
const sendEmail = async (params) => {
    try {
        const result = await emailjs.send('orLaw', 'contact_request_or_law', params, 'user_FaC8IjGGsa6BENz6n6laj')
    } catch (error) {
        throw error
    }
}
export { sendEmail }
