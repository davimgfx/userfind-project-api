export type UserTableInfos = {
  login: {
    uuid: string;
    username: string;
    password: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };

  dob: {
    age: number;
  };
  picture: {
    large: string;
  };
  email: string;
  cell: string;
  gender: string;
  location: {
    country: string;
    city: string;
    state: string;
    postcode: string;
    street: {
      name: string;
      number?: string;
    };
  };
  registered: {
    date: string;
  };
};

export type UserSimpleData ={
  login: {
    username: string;
  };
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  }; 
}