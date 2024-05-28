export default interface LoginErrors {
    errorType: 'rate-limit-exceded' | 'weak-password' | 'small-password'
}