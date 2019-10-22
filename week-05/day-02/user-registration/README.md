# User registration

Create a simple registration form with the following fields.

- Username (text input)
- Email address (email input)
- Password (password input)

Upon submission, print the values to the console in the following format.

```javascript
{
  username: 'john.locke',
  emailAddress: 'john@locke.com',
  password: '123456'
}
```

The submit button must be disabled until the input isn't valid. It must check
the following rules.

- Username must not be empty
- Email address must contain '@' symbol
- Password must be at least 8 characters
