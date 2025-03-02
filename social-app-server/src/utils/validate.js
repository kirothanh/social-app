const yup = require('yup');

module.exports = {
  registerSchema: yup.object({
    fullName: yup.string().min(3, 'Name must be at least 3 characters long').max(50, 'Name cannot exceed 50 characters').required('Name cannot be empty'),
    email: yup.string().email('Invalid email address').required('Email cannot be empty'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password cannot be empty'),
  }),
  loginSchema: yup.object({
    email: yup.string().email('Invalid email address').required('Email cannot be empty'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password cannot be empty'),
  }),
}