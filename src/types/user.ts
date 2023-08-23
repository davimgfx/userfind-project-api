export type UserTableInfos = {
  login: {
    uuid: string;
    username: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  registered: {
    date: string;
  };
  dob: {
    age: number;
  };
  picture: {
    large: string;
  }
};
