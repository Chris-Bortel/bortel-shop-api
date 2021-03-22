'use strict';

module.exports = (capability) => {

  return (req, res, next) => {
    // Does the user have capability
    if (req.user.capabilities.includes(capability)) {
      next();
    }
    else {
      throw new Error('Improper access');
    }
  }

}
