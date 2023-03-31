const handleErrors = (err) => {
  let errors = {};
  //Duplicate key errors
  if (err.code === 11000) {
    console.log(Object.keys(err.keyPattern));
    errors[Object.keys(err.keyPattern)] = `${Object.keys(
      err.keyPattern
    )} already exists for another user`;
  }

  //validation Errors

  if (err.message.includes('Customer validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

 

  // Incorrect password for login
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // user details error for login

  if(err.message === 'enter user details'){
    errors.userDetails = 'Enter User Details'
  }

  //handle jwt errors
  if (err.message.includes('jwt')) {
    errors.error = err.message;
  }

  return errors;
};

module.exports = { handleErrors };
