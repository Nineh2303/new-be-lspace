export class GoogleLoginResponse {
  username?: string;
  email?: string;
  image?: string;
  given_name?: string;
  family_name?: string;
  token?: string;

  constructor(
    username?: string,
    email?: string,
    image?: string,
    given_name?: string,
    family_name?: string,
    token?: string,
  ) {
    this.username = username;
    this.email = email;
    this.image = image;
    this.given_name = given_name;
    this.family_name = family_name;
    this.token = token;
  }
}
