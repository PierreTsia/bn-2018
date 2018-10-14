import { distanceInWordsToNow } from "date-fns";

const dateHelper = {
  distanceToNow: date => {
    return distanceInWordsToNow(date);
  },
};

export default dateHelper;
