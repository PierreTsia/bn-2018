import _ from "lodash";

const sanitizeHelper = {
  getNamefromEmail: email => {
    const end = email.indexOf("@");
    return email.slice(0, end);
  },
};

export default sanitizeHelper;
